How To Build Elasticsearch Based Catalogue Having a SPARQL query
================================================================

Servers:
    Development:
        centaurus-dev
    Production:
        centaurus

Development setup
    The application is located in 
        /var/local/es-dev/eea.elasticsearch
    Configuration files are located in 
        /var/local/es-dev/eea.elasticsearch/etc/dev

Production setup
    The application is located in 
        /var/local/es/eea.elasticsearch
    Configuration files are located in 
        /var/local/es/eea.elasticsearch/etc/production

Create a new application from template
    Currently we use the pam app as a template
    It's located in 
        /var/local/es-dev/eea.elasticsearch/webapps/pam
    Create a copy of the folder:
        /var/local/es-dev/eea.elasticsearch/webapps/<new-app>
    Create a copy of the development configuration files:
        /var/local/es-dev/eea.elasticsearch/etc/dev/pam -> /var/local/es-dev/eea.elasticsearch/etc/dev/<new-app>
    Create a symlink from the application to the configuration file
        /var/local/es-dev/eea.elasticsearch/webapps/<new-app>/config.json -> /var/local/es-dev/eea.elasticsearch/etc/dev/<new-app>/config.json

    Update the configuration file
        http:
            port: on what port the application should listen
            base_path: the path what will be used in all urls
        es:
            host: url of ES
            path: the path where the queries should be executed
            field_base: prefix of all fields (this is for simplifying our work when writing the templates for the pages, so we don't have to write the prefix all the time)

        external_templates:
            the settings from where the external templates should be downloaded

    Indexing data in ES
        TODO: for the PAM app currently the indexing is done with bash scripts, but will be migrated to node. This step will be completed when the migration is done.
    Customizing the app for your <new-app>
        Templates: are located in
            /var/local/es-dev/eea.elasticsearch/webapps/<new-app>/views
            layout.jade is the main template, it's included in both index and detail pages
            index.jade is the index page, it's very minimal as the listing is done with js
            details.jade is the detail page for "one row". Here we can customize which fields to be displayed and how they should be grouped

        Javascripts: are located in
            /var/local/es-dev/eea.elasticsearch/webapps/<new-app>/public/javascripts
            The only script we have to customize is: pam.facetview.js, you should rename it for your app (don't forget to update also layout.jade to include the new js)
            In this script in the ready function we setup the facets and the fields to be displayed on the index page. In the case of the PAM app we had some small customizations for some fields, depending on your new app you can remove them or add new ones

        CSS: are located in
            /var/local/es-dev/eea.elasticsearch/webapps/<new-app>/public/stylesheets
            The only css file you have to work on is the style.css, where you can make your customizations
