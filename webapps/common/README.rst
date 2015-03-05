To run js scripts do:
./runScript.js $elasticsearchendpoint scriptname

e.g.
./runScript.js centaurus-dev.eea.europa.eu/elasticsearch ../eea_search/createIndex


If you want to remove data and re-index everything again, these are the steps:

./runScript.js centaurus-dev.eea.europa.eu/elasticsearch ../eea_search/removeRiver

./runScript.js centaurus-dev.eea.europa.eu/elasticsearch ../eea_search/removeData

./runScript.js centaurus-dev.eea.europa.eu/elasticsearch ../eea_search/setupAnalyzers

./runScript.js centaurus-dev.eea.europa.eu/elasticsearch ../eea_search/createIndex


