curl -u eea:eea -XPUT 'http://centaurus-dev.eea.europa.eu/elasticsearch/_river/eunis11/_meta' -d '{
   "type" : "eeaRDF",
   "eeaRDF" : {
      "uris" : ["https://dl.dropboxusercontent.com/s/wqgacm8550x6i20/species11.rdf?dl=1&token_hash=AAFp7NLWqjGw41vJAom8DtKbBXiShGkBBWm5kFOal-BCYg"]
   },
   "index" : {
      "index" : "eunis",
      "type" : "resource"}}'
