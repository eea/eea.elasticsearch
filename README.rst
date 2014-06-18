==================
EEA ElasticSearch
==================
|elasticsearch logo|

.. image:: http://ci.eionet.europa.eu/job/Elasticsearch%20RDF%20River%20Plugin/badge/icon
  :target: http://ci.eionet.europa.eu/job/Elasticsearch%20RDF%20River%20Plugin/lastBuild

Introduction
============

`EEA elasticsearch`_ is an elasticsearch specific setup by the
`European Environment Agency`_ for querying data in the EEA's
`Semantic Data Service`_ and designing specific search
interfaces and widgets to be used in a CMS.

.. contents::

Components
=============

The setup is composed of the following:

1. An elasticsearch_ instance flavoured with following plugins
2. EEA ElasticSearch `RDF River Plugin`_
3. `Jetty Plugin`_
4. FacetView_, a pure JavaScript library
   for browsing data using an elasticsearch endpoint
5. `elasticsearch service-wrapper <https://github.com/eea/elasticsearch-servicewrapper>`_,
   a script for running elasticsearch using Java Service Wrapper.

This packages specifically includes:

1. Development and production configuration files for elasticsearch and Apache.
2. Custom static pages using facetview js library.
3. PAM, an application using the elasticsearch endpoint.


Live demos
==========

* `Facetview visualisation <http://centaurus-dev.eea.europa.eu>`_ installed
  on development instance, on EEA Centaurus server.
* `Climate change policies and measures in Europe Demo <http://www.eea.europa.eu/data-and-maps/pam/>`_


Installation
============

1. Clone project

   git clone git@github.com:eea/eea.elasticsearch.git

2. Install elasticsearch_, e.g. in /var/local/elasticsearch
3. Replace its `config` folder with a symlink to
   eea.elasticsearch/etc/production/config
4. Install `RDF River Plugin`_, using elasticsearch plugin script inside its
   bin folder:

   ::

     bin/plugin --url https://github.com/eea/eea.elasticsearch.river.rdf/raw/master/target/releases/eea-rdf-river-plugin-1.0.zip
     --install eea-rdf-river-1.0
5. Install `Jetty Plugin`_ in the same manner:

   ::

      bin/plugin --url https://oss-es-plugins.s3.amazonaws.com/elasticsearch-jetty/elasticsearch-jetty-0.90.0.zip
      --install elasticsearch-jetty-0.90.0
6. Install useful plugins for monitoring and debugging:

   ::

      bin/plugin -install mobz/elasticsearch-head
      bin/plugin -install lukas-vlcek/bigdesk
      bin/plugin -install OlegKunitsyn/elasticsearch-browse
      bin/plugin -install polyfractal/elasticsearch-inquisitor

7. Install and configure elasticsearch-service wrapper:

   ::

      git clone git@github.com:eea/elasticsearch-servicewrapper.git
      cd elasticsearch-servicewrapper/service
      vim elasticsearch.conf # configure path to elasticsearch
      ./elasticsearch install
8. Configure users and roles for elasticsearch requests in
   eea.elasticsearch/etc/production/config/realm.properties, see
   `Adding Basic Authentication <https://github.com/sonian/elasticsearch-jetty#adding-basic-authentication>`_.
9. Start elasticsearch service

   ::

      service elasticsearch start
10. Install facetview

    ::

      git clone git@github.com:eea/facetview.git
11. Link eea.elasticsearch/etc/production/httpd.elasticsearch.conf in
    /etc/httpd/conf.d and check settings
12. Reload Apache

    ::

     service httpd reload


Dependencies
============

`eea.elasticsearch`_ has the following dependencies:
  - elasticsearch_, tested with 0.90.x
  - `RDF River Plugin`_
  - `Jetty Plugin`_ 0.9.0
  - FacetView_ is optional pure JavaScript library for visualisation


Source code
===========

Latest source code:
  - `eea.elasticsearch on Github <https://github.com/eea/eea.elasticsearch>`_
  - EEA ElasticSearch `RDF River Plugin`_ on Github



Copyright and license
=====================

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

The EEA ElasticSearch (the Original Code) is free software;
you can redistribute it and/or modify it under the terms of the GNU
General Public License as published by the Free Software Foundation;
either version 2 of the License, or (at your option) any later
version.

More details under eea.elasticsearch/docs/LICENSE.txt



Funding and project management
==============================

EEA_ - European Environment Agency (EU)

.. _`European Environment Agency`: http://www.eea.europa.eu/
.. _`Semantic Data Service`: http://semantic.eea.europa.eu/
.. _EEA: http://www.eea.europa.eu/
.. _`EEA elasticsearch`: http://eea.github.com/docs/eea.elasticsearch
.. |elasticsearch logo| image:: http://www.elasticsearch.org/content/themes/elasticsearch-org/images/logo.png
.. _elasticsearch: http://elasticsearch.org
.. _`eea.elasticsearch`: https://github.com/eea/eea.elasticsearch
.. _`RDF River Plugin`: https://github.com/eea/eea.elasticsearch.river.rdf
.. _`Jetty Plugin`: https://github.com/sonian/elasticsearch-jetty
.. _FacetView: https://github.com/eea/facetview
