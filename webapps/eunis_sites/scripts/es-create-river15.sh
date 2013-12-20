curl -u eea:eea -XPUT 'http://centaurus-dev.eea.europa.eu/elasticsearch/_river/eunis14/_meta' -d '{
   "type" : "eeaRDF",
   "eeaRDF" : {
      "uris" : ["https://dl.dropboxusercontent.com/s/padsblwhro8480a/species14.rdf?dl=1&token_hash=AAFwD7SLDKdgC61OjjUvM0LgmXR6uXmRahmq34szNpOafQ"]
   },
   "index" : {
      "index" : "eunis",
      "type" : "resource"}}'
