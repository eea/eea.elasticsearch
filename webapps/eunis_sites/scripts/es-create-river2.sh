curl -u eea:eea -XPUT 'http://centaurus-dev.eea.europa.eu/elasticsearch/_river/eunis2/_meta' -d '{
   "type" : "eeaRDF",
   "eeaRDF" : {
      "uris" : ["https://dl.dropboxusercontent.com/s/0ffi6gq5benanv7/species3.rdf?dl=1&token_hash=AAGR65GYkKW1HDmpvQ8EWYVOYcb2hgzLNPLFKmCzsm3XTw"]
   },
   "index" : {
      "index" : "eunis",
      "type" : "resource"}}'
