echo "got arguments:" $1 $2 $3 $4 $5 $6

rdfquery=$(printf '{
   "type" : "eeaRDF",
   "eeaRDF" : {
      "endpoint" : "%s",
      "queryType" : "construct",
      "query" : "CONSTRUCT {?s ?p ?o}  WHERE {?s a %s . ?s ?p ?o} ORDER BY (?s) LIMIT %s OFFSET %s"
   },
   "index" : {
      "index" : "%s",
      "type" : "resource"}}' "$2" "$3" "$4" "$5" "$6")

echo $rdfquery

esendpoint=$(printf '%s/_river/%s%s%s/_meta' "$1" "$6" "$4" "$5")

echo $esendpoint

echo "RUNNING INDEXING"

curl -u eea:eea -XPUT "$esendpoint" -d "$rdfquery"

echo "\n"
