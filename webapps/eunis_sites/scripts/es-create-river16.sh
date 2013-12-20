curl -u eea:eea -XPUT 'http://centaurus-dev.eea.europa.eu/elasticsearch/_river/eunis15/_meta' -d '{
   "type" : "eeaRDF",
   "eeaRDF" : {
      "uris" : ["https://dl.dropboxusercontent.com/s/qnsi3qz12ifw0pu/species15.rdf?dl=1&token_hash=AAHUMb1d1JMplgLAkryJLSi0m17-qHujSuLk3UC8BmUhUA"]
   },
   "index" : {
      "index" : "eunis",
      "type" : "resource"}}'
