curl -u eea:eea -XPUT 'http://centaurus-dev.eea.europa.eu/elasticsearch/_river/eunis10/_meta' -d '{
   "type" : "eeaRDF",
   "eeaRDF" : {
      "uris" : ["https://dl.dropboxusercontent.com/s/2zscaq36e3w7r5x/species10.rdf?dl=1&token_hash=AAGbncZ21m22qdciqNk-nvlb11_mESZCQAaeHM6UvT9-zA"]
   },
   "index" : {
      "index" : "eunis",
      "type" : "resource"}}'
