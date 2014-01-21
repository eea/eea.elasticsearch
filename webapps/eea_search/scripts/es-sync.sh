curl -u eea:eea -XDELETE 'http://centaurus-dev.eea.europa.eu/elasticsearch/_river/sync'
curl -u eea:eea -XPUT 'http://centaurus-dev.eea.europa.eu/elasticsearch/_river/sync/_meta' -d '{
  "type": "eeaRDF",
  "eeaRDF" : {
    "endpoint" : "http://semantic.eea.europa.eu/sparql",
    "indexType" : "sync",
	 "startTime" : ""
  }
}'
