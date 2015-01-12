curl -u eea:eea -XPUT 'http://localhost:9200/_river/aqstats/_meta' -d '{
   "type" : "eeaRDF",
   "eeaRDF" : {
      "endpoint" : "http://cr.eionet.europa.eu/sparql",
      "queryType" : "construct",
      "query" : ["CONSTRUCT {?s ?p ?o} WHERE {?s a <http://reference.eionet.europa.eu/aq/ontology/ValidatedExceedence> ; ?p ?o}"],
      "addLanguage" : false,
      "includeResourceURI" : false
   },
   "index" : {
      "index" : "aqstatsdata",
      "type" : "resources"}}'
