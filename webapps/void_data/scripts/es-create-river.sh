curl -u eea:eea -XPUT 'http://centaurus-dev.eea.europa.eu/elasticsearch/_river/voiddata/_meta' -d '{
   "type" : "eeaRDF",
   "eeaRDF" : {
      "endpoint" : "http://semantic.eea.europa.eu/sparql",
      "queryType" : "construct",
      "query" : "CONSTRUCT {?s ?p ?o}  WHERE {?s a <http://rdfs.org/ns/void#Dataset> . ?s ?p ?o}"
   },
   "index" : {
      "index" : "voiddata",
      "type" : "dataset"}}'
