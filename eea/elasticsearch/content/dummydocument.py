"""Definition of the Dummydocument content type
"""

from zope.interface import implements

from Products.Archetypes import atapi
from Products.ATContentTypes.content import folder
from Products.ATContentTypes.content import schemata

# -*- Message Factory Imported Here -*-

from eea.elasticsearch.interfaces import IDummydocument

DummydocumentSchema = folder.ATFolderSchema.copy() + atapi.Schema((

    # -*- Your Archetypes field definitions here ... -*-

))


schemata.finalizeATCTSchema(
    DummydocumentSchema,
    folderish=True,
    moveDiscussion=False
)


class Dummydocument(folder.ATFolder):
    """ Dummydocument """

    implements(IDummydocument)

    meta_type = "Dummydocument"
    portal_type = "Dummydocument"
    archetypes_name = "Dummydocument"

    schema = DummydocumentSchema
