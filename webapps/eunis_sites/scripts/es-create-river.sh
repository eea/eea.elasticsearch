curl -u eea:eea -XPUT 'http://centaurus-dev.eea.europa.eu/elasticsearch/_river/eunis_sites/_meta' -d '{
   "type" : "eeaRDF",
   "eeaRDF" : {
      "endpoint" : "http://semantic.eea.europa.eu/sparql",
      "queryType" : "construct",
      "query" : "CONSTRUCT {?s ?p ?o}  WHERE {?s a <http://eunis.eea.europa.eu/rdf/sites-schema.rdf#Site> . ?s ?p ?o} LIMIT 10000"
   },
   "index" : {
      "index" : "eunis_sites",
      "type" : "resource"}}'
