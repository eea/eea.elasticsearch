""" Control Panel
"""
from zope.component import queryUtility
from zope.interface import implements
from eea.elasticsearch.interfaces import ISettings
from eea.elasticsearch.config import EEAMessageFactory as _
from plone.app.controlpanel.form import ControlPanelForm
from plone.registry.interfaces import IRegistry
from Products.CMFDefault.formlib.schema import SchemaAdapterBase
from zope.formlib import form

class ControlPanel(ControlPanelForm):
    """ API
    """
    form_fields = form.FormFields(ISettings)
    label = _(u"EEA ElasticSearch Settings")
    description = _(u"EEA ElasticSearch settings")
    form_name = _(u"EEA ElasticSearch settings")

class ControlPanelAdapter(SchemaAdapterBase):
    """ Form adapter
    """
    implements(ISettings)

    def __init__(self, context):
        super(ControlPanelAdapter, self).__init__(context)
        self._settings = None

    @property
    def settings(self):
        """ Settings
        """
        if self._settings is None:
            self._settings = queryUtility(
                IRegistry).forInterface(ISettings, False)
        return self._settings

    @property
    def token(self):
        """ Get token
        """
        name = u"token"
        return getattr(self.settings, name, ISettings[name].default)

    @token.setter
    def token(self, value):
        """ Set token
        """
        self.settings.token = value
