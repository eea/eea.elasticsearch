curl -u eea:eea -XPUT 'http://centaurus-dev.eea.europa.eu/elasticsearch/_river/eunis12/_meta' -d '{
   "type" : "eeaRDF",
   "eeaRDF" : {
      "uris" : ["https://dl.dropboxusercontent.com/s/r2iqzjem7h68zss/species12.rdf?dl=1&token_hash=AAHiAZJIFrO7upCNwFQcvcsaQ2OI0eKw5rNhy0oUPiLfnw"]
   },
   "index" : {
      "index" : "eunis",
      "type" : "resource"}}'
