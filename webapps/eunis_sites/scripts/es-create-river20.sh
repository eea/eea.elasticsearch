curl -u eea:eea -XPUT 'http://centaurus-dev.eea.europa.eu/elasticsearch/_river/eunis19/_meta' -d '{
   "type" : "eeaRDF",
   "eeaRDF" : {
      "uris" : ["https://dl.dropboxusercontent.com/s/5xxi8dz2csihz21/species19.rdf?dl=1&token_hash=AAH5FHg_WEhnra5kbjNUHUX65znpp-h3EupgKxIC3YYbCQ"]
   },
   "index" : {
      "index" : "eunis",
      "type" : "resource"}}'
