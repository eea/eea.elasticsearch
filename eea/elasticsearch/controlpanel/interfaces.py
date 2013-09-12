""" Control Panel Interfaces

   >>> portal = layer['portal']
   >>> sandbox = portal['sandbox']

"""
from zope.interface import Interface
from zope import schema
from eea.elasticsearch.config import EEAMessageFactory as _

class ISettings(Interface):
    """ Alchemy settings

        >>> from eea.elasticsearch.interfaces import ISettings
        >>> ISettings(portal).token = u'123'
        >>> ISettings(portal).token
        u'123'

    """
    token = schema.TextLine(
        title=_(u"Token"),
        description=_(u"Provide token"),
        required=True,
        default=u""
    )
