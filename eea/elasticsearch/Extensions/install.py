""" Uninstall Profile
"""
from Products.CMFCore.utils import getToolByName

def uninstall(portal, reinstall=False):
    """ Uninstall profile setup
    """
    if not reinstall:
        setup_tool = getToolByName(portal, 'portal_setup')
        setup_tool.runAllImportStepsFromProfile(
            'profile-eea.elasticsearch:uninstall')
        return "Ran all uninstall steps."
