curl -u eea:eea -XPUT 'http://centaurus-dev.eea.europa.eu/elasticsearch/_river/eunis13/_meta' -d '{
   "type" : "eeaRDF",
   "eeaRDF" : {
      "uris" : ["https://dl.dropboxusercontent.com/s/84bs9xk0in6jks6/species13.rdf?dl=1&token_hash=AAFWv-g16doSHKtseQfljf_YZSF_ASvz3ggtuMswJeHMFg"]
   },
   "index" : {
      "index" : "eunis",
      "type" : "resource"}}'
