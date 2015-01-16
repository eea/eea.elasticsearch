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

1. Create a new application from template
    Currently we use the pam app as a template
    It's located in 
        /var/local/es-dev/eea.elasticsearch/webapps/pam
    Create a copy of the folder:
        /var/local/es-dev/eea.elasticsearch/webapps/<new-app>

2. Create a copy of the development configuration files
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
    Create a copy of the development service script:
      /var/local/es-dev/eea.elasticsearch/etc/dev/init.d/pam-dev -> /var/local/es-dev/eea.elasticsearch/etc/dev/init.d/<new-app>-dev update it for your new app and symlink it into /init.d

3. Index your data in Elasticsearch
    Indexing data in ES
        TODO: for the PAM app currently the indexing is done with bash scripts, but will be migrated to node. This step will be completed when the migration is done.

4. Customize your application
    Customizing the app for your <new-app>
        Templates: are located in
            /var/local/es-dev/eea.elasticsearch/webapps/<new-app>/views
            layout.jade is the main template, it's included in both index and detail pages
            index.jade is the index page, it's very minimal as the listing is done with js
            details.jade is the detail page for "one row". Here we can customize which fields to be displayed and how they should be grouped

        Javascripts: are located in
            /var/local/es-dev/eea.elasticsearch/webapps/<new-app>/public/javascripts
            The only script we have to customize is: pam.facetview.js, you should rename it for your app
            In this script in the ready function we setup the facets and the fields to be displayed on the index page. 

        CSS: are located in
            /var/local/es-dev/eea.elasticsearch/webapps/<new-app>/public/stylesheets
            The only css file you have to work on is the style.css, where you can make your customizations

        Routes: located in
            /var/local/es-dev/eea.elasticsearch/webapps/<new-app>/routes
            This folder contains only one file, the index.js. It contains the naming mappings for the fields, and the query for the detail view.

    4.1 Update the layout template (layout.jade)
            - update the title
            - update the included resources
            - update the data source information
    4.2 Update the <new-app>.facetview.js
            - setup the facets
            - setup the result_display: the fields should be added in <td> tags, except the first one where you only have to close the <td> and the last one, where you have to open it
            - setup the range filters: if there are facets containing only number values, you can set them to be range filters, you only have to add to them the "facet_range_only" class:
                $('[id="facetview_' + clean_base + '<number_field_name>"]').addClass("facet_range_only");
            - setup the table headers: modify the addHeaders method
            Note: In the case of the PAM app we had some small customizations for some fields(replaceNumbers method), depending on your new app you can remove them or add new ones, these customizations can be called either in the document.ready or in the viewReady (what is the called after each search)

In the case of the PAM app we had some small customizations for some fields, depending on your new app you can remove them or add new ones

    4.3 Update the index template (index.jade)
            - the only thing to be changed is the breadcrumb and the title and description to be displayed in top of the search results
    4.4 Update the routes (index.js inside routes folder)
            - In this file you have to make 2 changes:
                The mapping contains 3 attributes:
                    - name: the name how it can be used in the detail view
                    - field: the name used in the result from elasticsearch
                    - label: the label what will be displayed on the detail view
                The query for the detail page has 2 forms:
                    - when one of the fields is a unique id:
                        in this case the query should look like: {"query":{"bool":{"must":[{"term":{"'+field_base + '<unique_id>":"'+req.query.<unique_id_value>+'"}}]}}}
                    - when we have no unique id and we use the _id from the results from elasticsearch:
                        in this case the query should look like: '{"query":{"ids":{"values":["' + req.query.<id_value> + '"]}}}';
    4.5 Update the details template (details.jade)
            - update the breadcrumb
            - update the fields to be displayed on the detail page (you have to use the name from the mapping from the index.js in the routes folder) and you have more options:
                - simply use the data.<field_name>.label and data.<field_name>.value
                - inside a table create one row with two columns: label and value using the tr_th_td mixin: tr_th_td(data.<field_name>)

    4.6 Update the layout of the application by modifying the styles.css

5. Create the production configuration files
    It's similar with the configuration files for development, but they should be located in 
        /var/local/es-dev/eea.elasticsearch/etc/production/<new-app>

6. Update the apache config file:
    You only have to add a proxypass in the development and the production config file elasticsearch.conf, located in
        /var/local/es-dev/eea.elasticsearch/etc/production/httpd
        /var/local/es-dev/eea.elasticsearch/etc/dev/httpd

7. Create the service scripts:
    Create a copy of the production service script:
      /var/local/es-dev/eea.elasticsearch/etc/production/init.d/pam -> /var/local/es-dev/eea.elasticsearch/etc/production/init.d/<new-app> update it for your new app

8. commit and push your changes in git

9. on the production server pull the changes

10. create the symlinks:
        - for the service script /var/local/es/eea.elasticsearch/etc/production/init.d/<new-app> into /init.d
        - for the application config file /var/local/es/eea.elasticsearch/etc/production/<new-app>/config.json into /var/local/es/eea.elasticsearch/webapps/<new-app>

11. start the application