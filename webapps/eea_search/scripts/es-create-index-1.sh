curl -u eea:eea -XPUT 'http://centaurus-dev.eea.europa.eu/elasticsearch/_river/search1/_meta' -d '{
  "type": "eeaRDF",
  "eeaRDF" : {
    "endpoint" : "http://semantic.eea.europa.eu/sparql",
    "queryType" : "construct",
    "query" : "CONSTRUCT {?s ?p ?o} WHERE { {?s a <http://www.eea.europa.eu/portal_types/Assessment#Assessment> . ?s ?p ?o} UNION {?s a <http://www.eea.europa.eu/portal_types/CloudVideo#CloudVideo> . ?s ?p ?o} UNION {?s a <http://www.eea.europa.eu/portal_types/Data#Data> . ?s ?p ?o} UNION { ?s a <http://www.eea.europa.eu/portal_types/DavizVisualization#DavizVisualization> . ?s ?p ?o} UNION { ?s a <http://www.eea.europa.eu/portal_types/Document#Document> . ?s ?p ?o }}",
	"normMap" : { "http://www.eea.europa.eu/portal_types/Assessment#themes" : "topic", "http://www.eea.europa.eu/portal_types/AssessmentPart#themes" : "topic", "http://www.eea.europa.eu/portal_types/Data#themes" : "topic", "http://www.eea.europa.eu/portal_types/CloudVideo#themes" : "topic", "http://www.eea.europa.eu/portal_types/DataFile#themes" : "topic", "http://www.eea.europa.eu/portal_types/DavizVisualization#themes" : "topic", "http://www.eea.europa.eu/portal_types/Document#themes" : "topic"},
	"proplist" : ["http://www.eea.europa.eu/portal_types/Assessment#id", "http://www.eea.europa.eu/portal_types/AssessmentPart#id", "http://www.eea.europa.eu/portal_types/Data#id", "http://www.eea.europa.eu/portal_types/CloudVideo#id", "http://www.eea.europa.eu/portal_types/DataFile#id", "http://www.eea.europa.eu/portal_types/DavizVisualization#id", "http://www.eea.europa.eu/portal_types/Document#id"],
    "listtype" : "black"
}}'

