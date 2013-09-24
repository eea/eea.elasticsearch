curl -XPUT 'http://centaurus.eea.europa.eu/elasticsearch/_river/new_pam/_meta' -d '{
   "type" : "eeaRDF",
   "eeaRDF" : {
      "endpoint" : "http://semantic.eea.europa.eu/sparql",
      "queryType" : "construct",
      "query" : "CONSTRUCT {?s ?p ?o} FROM <http://semantic.eea.europa.eu/project/pam/pam_v10.csv> WHERE { ?s ?p ?o}"},
   "index" : {
      "index" : "pamdata", 
      "type" : "resources"}}'
