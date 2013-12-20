curl -u eea:eea -XPUT 'http://centaurus-dev.eea.europa.eu/elasticsearch/_river/eunis7/_meta' -d '{
   "type" : "eeaRDF",
   "eeaRDF" : {
      "uris" : ["https://dl.dropboxusercontent.com/s/qw00l6a6gw23tta/species7.rdf?dl=1&token_hash=AAHQG09tgBOYpT8eNNPtuV5iyx1AD-WL3Ov4K56sSWDFbQ"]
   },
   "index" : {
      "index" : "eunis",
      "type" : "resource"}}'
