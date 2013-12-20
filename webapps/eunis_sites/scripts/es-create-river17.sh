curl -u eea:eea -XPUT 'http://centaurus-dev.eea.europa.eu/elasticsearch/_river/eunis16/_meta' -d '{
   "type" : "eeaRDF",
   "eeaRDF" : {
      "uris" : ["https://dl.dropboxusercontent.com/s/ajfx62uuknl706v/species16.rdf?dl=1&token_hash=AAGjOtkt4XQ9Wj1tn2_iDD_J8t0YC4h-HmcIVIiXVZSHjA"]
   },
   "index" : {
      "index" : "eunis",
      "type" : "resource"}}'
