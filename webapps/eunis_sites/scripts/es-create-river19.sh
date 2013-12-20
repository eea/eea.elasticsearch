curl -u eea:eea -XPUT 'http://centaurus-dev.eea.europa.eu/elasticsearch/_river/eunis18/_meta' -d '{
   "type" : "eeaRDF",
   "eeaRDF" : {
      "uris" : ["https://dl.dropboxusercontent.com/s/1mz99hr7c9h86ei/species18.rdf?dl=1&token_hash=AAHpQAK0MCuvSFABwPagYwXgx7mViYAbRaEGoTck1SDDHQ"]
   },
   "index" : {
      "index" : "eunis",
      "type" : "resource"}}'
