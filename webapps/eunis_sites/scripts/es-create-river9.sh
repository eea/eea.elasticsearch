curl -u eea:eea -XPUT 'http://centaurus-dev.eea.europa.eu/elasticsearch/_river/eunis8/_meta' -d '{
   "type" : "eeaRDF",
   "eeaRDF" : {
      "uris" : ["https://dl.dropboxusercontent.com/s/7sybuw0zawz59xa/species8.rdf?dl=1&token_hash=AAELF3lpZZuhFgPfLBSq74R7zhrdkhJ-GvXVdo326vYKCg"]
   },
   "index" : {
      "index" : "eunis",
      "type" : "resource"}}'
