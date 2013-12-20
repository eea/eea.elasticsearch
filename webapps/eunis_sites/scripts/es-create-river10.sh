curl -u eea:eea -XPUT 'http://centaurus-dev.eea.europa.eu/elasticsearch/_river/eunis9/_meta' -d '{
   "type" : "eeaRDF",
   "eeaRDF" : {
      "uris" : ["https://dl.dropboxusercontent.com/s/mzmngviin3o9w23/species9.rdf?dl=1&token_hash=AAEEBEigTHpI86plf5BlDijetXVzxParvaQbb32eXFjfTg"]
   },
   "index" : {
      "index" : "eunis",
      "type" : "resource"}}'
