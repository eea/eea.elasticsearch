curl -u eea:eea -XPUT 'http://centaurus-dev.eea.europa.eu/elasticsearch/_river/eunis6/_meta' -d '{
   "type" : "eeaRDF",
   "eeaRDF" : {
      "uris" : ["https://dl.dropboxusercontent.com/s/wz7xad53fty5x55/species6.rdf?dl=1&token_hash=AAEjLHrzD3XUo75vy9id4ZhwTOAIHBSHhMA07u74TLplFQ"]
   },
   "index" : {
      "index" : "eunis",
      "type" : "resource"}}'
