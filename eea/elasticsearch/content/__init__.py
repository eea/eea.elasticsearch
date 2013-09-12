""" Custom content
"""
from Products.ATContentTypes.content.base import registerATCT
from eea.elasticsearch.content.dummydocument import Dummydocument
from eea.elasticsearch.config import PROJECTNAME

def register():
    """ Register custom content-types
    """
    registerATCT(Dummydocument, PROJECTNAME)
