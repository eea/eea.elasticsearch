===================
Predefined Settings
===================

Predefined sort
===============
The results can be sorted with the facetview option 'sort'. In the example
below results are sorted by their publishing date.

::

sort: [{'http://purl.org/dc/terms/issued':{'order': 'desc'}}]

Predefined filter
=================
Facetview can always start with a set of predefined filters. They can be set
with the option 'predefined_filter'. In the example below the language is
pre-set to 'en'.

::

predefined_filters: [{'term': {'language':'en'}}]

=====
Setup
=====

1. Add elasticsearch.conf in httpd config directory
2. In this directory run `npm install`
3. Add symlink to etc/{dev|production}/init.d/eea-search{-dev} in /etc/init.d
4. /etc/init.d/eea-search{-dev} start
5. in your browser go to $URL/search/invalidate_templates.
6. go to $URL/search and check the results
