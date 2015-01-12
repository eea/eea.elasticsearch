===============================================================================
PAM - EEA database on climate change mitigation policies and measures in Europe
===============================================================================

The PAM application is a enduser frontend UI for the PAM database indexed 
in an ElasticSarch endpoint which it turn retrieves the PAM data 
from a sparql endpoint (eea.elasticsearch).

Dependencies
============
The PAM application uses OKFN FacetView UI for the main search catalog, included
in this package. It is composed of a few pages that needs simply be deployed 
via a typical web server like Apache. Nodejs must also be installed on the server 
(used for the detail pam factsheet).

The PAM application client connects to a ElasticSearch endpoint which must have
a EEA RDF River plugin installed (eea.elasticsearch).

Configuration
=============
Configuration of PAM service is available in `etc/dev/pam` and in
`etc/production/pam` of this package.
Required `config.json` needs to be symlinked in pam folder.

How to update the PAM db
========================

The PAM database is indexed in a ElasticSearch endpoint (eea.elasticsearch) with
a EEA RDF River plugin.

The PAM data must be available on a Sparql endpoint. We will use 
semantic.eea.europa.eu (SDS) for storing the PAM data via the CSV upload.

After uploading the csv file to SDS, the data should be indexed in ElasticSearch
For indexing the pam data in elasticsearch the following scripts should be executed:

1. delete the old RDF river index: scripts/es-pam-remove-river.sh

2. delete the old data: scripts/es-pam-remove-data.sh

3. setup the analyzers: scripts/es-pam-setup-analyzers.sh
Note: if there are columns which needs extra analyzer for indexing 
(ex. comma separator, or no separator) it should be configured in this script
before adding the data. Analyzers must be configured before the data is added.

4. index the new data in: scripts/es-pam-create.sh

Nodejs required modules
=======================
The following modules are required by the PAM application:

1. express - web application framework for node (http://expressjs.com/2x)

Install:
    npm install -g express

    inside the nodejs pam directory (eea.elasticsearch/eea/elasticsearch/pam)
    npm install express

2. jade - node template engine (http://jade-lang.com/)

Install:
    inside the nodejs pam directory (eea.elasticsearch/eea/elasticsearch/pam)
    npm install jade

3. nconf - Hierarchical node.js configuration with files, environment variables, 
command-line arguments, and atomic object merging 
(https://github.com/flatiron/nconf)

Install:
    inside the nodejs pam directory (eea.elasticsearch/eea/elasticsearch/pam)
    npm install nconf
