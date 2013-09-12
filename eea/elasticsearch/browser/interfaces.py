""" Browser interfaces

   >>> portal = layer['portal']
   >>> sandbox = portal['sandbox']

"""
from zope.interface import Interface

class ILayer(Interface):
    """ Custom layer for this package
    """
