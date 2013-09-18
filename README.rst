=========
EEA elasticsearch
=========
|elasticsearch logo|


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
4. EEA fork of FacetView_, a pure
   JavaScript library for browsing data using an elasticsearch endpoint
5. EEA fork of `elasticsearch service-wrapper <https://github.com/eea/elasticsearch-servicewrapper>`_,
   a script for running elasticsearch using Java Service Wrapper.

This packages specifically includes:

1. Development and production configuration files for elasticsearch and Apache.
2. Custom static pages using facetview js library.
3. PAM, an application using the elasticsearch endpoint.


Live demos
==========

* `Facetview visualisation <https://centaurus-dev.eea.europa.eu>`_ installed
  on development instance, on EEA Centaurus server.


Architecture overview
=====================




Installation
============



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
