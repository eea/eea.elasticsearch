curl -u eea:eea -XPUT 'http://centaurus-dev.eea.europa.eu/elasticsearch/_river/eunis1/_meta' -d '{
   "type" : "eeaRDF",
   "eeaRDF" : {
      "uris" : ["https://dl.dropboxusercontent.com/s/mnphyjulux07cpu/species2.rdf?dl=1&token_hash=AAFZBXCJdKiMQg9fpoWAyqHyfv8g6rgmzV4Zn63G5cAbvw"]
   },
   "index" : {
      "index" : "eunis",
      "type" : "resource"}}'
