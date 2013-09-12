""" Content interfaces

   >>> portal = layer['portal']
   >>> sandbox = portal['sandbox']

"""
from zope.interface import Interface

class IDummydocument(Interface):
    """ Dummydocument

        >>> fid = sandbox.invokeFactory('Dummydocument', id='Dummydocument')
        >>> doc = sandbox._getOb(fid)
        >>> doc
        <Dummydocument at...>

    """
