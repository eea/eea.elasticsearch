""" Main product initializer
"""

from eea.elasticsearch import config

from Products.Archetypes import atapi
from Products.CMFCore import utils
from eea.elasticsearch import content


def initialize(context):
    """Initializer called when used as a Zope 2 product.
    """

    content.register()

    content_types, constructors, _ftis = atapi.process_types(
        atapi.listTypes(config.PROJECTNAME),
        config.PROJECTNAME)

    for atype, constructor in zip(content_types, constructors):
        utils.ContentInit('%s: %s' % (config.PROJECTNAME, atype.portal_type),
            content_types=(atype, ),
            permission=config.ADD_PERMISSION,
            extra_constructors=(constructor,),
            ).initialize(context)

