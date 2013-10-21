curl -u eea:eea -XPUT 'http://centaurus-dev.eea.europa.eu/elasticsearch/_river/search3/_meta' -d '{
  "type": "eeaRDF",
  "eeaRDF" : {
    "endpoint" : "http://semantic.eea.europa.eu/sparql",
    "queryType" : "construct",
    "query" : "CONSTRUCT {?s ?p ?o} WHERE { {?s a <http://www.eea.europa.eu/portal_types/File#File> . ?s ?p ?o} UNION { ?s a <http://www.eea.europa.eu/portal_types/Highlight#Highlight> . ?s ?p ?o} UNION {?s a <http://www.eea.europa.eu/portal_types/Image#Image> . ?s ?p ?o} UNION {?s a <http://www.eea.europa.eu/portal_types/IndicatorFactSheet#IndicatorFactSheet> . ?s ?p ?o} UNION {?s a <http://www.eea.europa.eu/portal_types/KeyMessage#KeyMessage> . ?s ?p ?o} UNION { ?s a <http://www.eea.europa.eu/portal_types/Link#Link> . ?s ?p ?o} UNION { ?s a <http://www.eea.europa.eu/portal_types/MethodologyReference#MethodologyReference> . ?s ?p ?o } UNION {?s a <http://www.eea.europa.eu/portal_types/Organisation#Organisation> . ?s ?p ?o} UNION {?s a <http://www.eea.europa.eu/portal_types/PolicyDocumentReference#PolicyDocumentReference> . ?s ?p ?o} UNION {?s a <http://www.eea.europa.eu/portal_types/PolicyQuestion#PolicyQuestion> . ?s ?p ?o} UNION {?s a <http://www.eea.europa.eu/portal_types/PressRelease#PressRelease> . ?s ?p ?o} UNION {?s a <http://www.eea.europa.eu/portal_types/Promotion#Promotion> . ?s ?p ?o} UNION {?s a <http://www.eea.europa.eu/portal_types/QuickEvent#QuickEvent> . ?s ?p ?o} UNION {?s a <http://www.eea.europa.eu/portal_types/RationaleReference#RationaleReference> . ?s ?p ?o} UNION {?s a <http://www.eea.europa.eu/portal_types/Report#Report> . ?s ?p ?o} UNION {?s a <http://www.eea.europa.eu/portal_types/SOERKeyFact#SOERKeyFact> . ?s ?p ?o} UNION {?s a <http://www.eea.europa.eu/portal_types/SOERMessage#SOERMessage> . ?s ?p ?o} UNION {?s a <http://www.eea.europa.eu/portal_types/Specification#Specification> . ?s ?p ?o} UNION {?s a <http://www.eea.europa.eu/portal_types/Speech#Speech> . ?s ?p ?o} UNION {?s a <http://www.eea.europa.eu/portal_types/WorkItem#WorkItem> . ?s ?p ?o}}",
	"normMap" : { "http://www.eea.europa.eu/portal_types/File#themes" : "topic", "http://www.eea.europa.eu/portal_types/Highlight#themes" : "topic", "http://www.eea.europa.eu/portal_types/Image#themes" : "topic", "http://www.eea.europa.eu/portal_types/IndicatorFactSheet#themes" : "topic", "http://www.eea.europa.eu/portal_types/KeyMessage#themes" : "topic", "http://www.eea.europa.eu/portal_types/Link#themes" : "topic", "http://www.eea.europa.eu/portal_types/MethodologyReference#themes" : "topic", "http://www.eea.europa.eu/portal_types/Organisation#themes" : "topic", "http://www.eea.europa.eu/portal_types/PolicyDocumentReference#themes" : "topic", "http://www.eea.europa.eu/portal_types/PolicyQuestion#themes" : "topic", "http://www.eea.europa.eu/portal_types/PressRelease#themes" : "topic", "http://www.eea.europa.eu/portal_types/Promotion#themes" : "topic", "http://www.eea.europa.eu/portal_types/QuickEvent#themes" : "topic", "http://www.eea.europa.eu/portal_types/RationaleReference#themes" : "topic", "http://www.eea.europa.eu/portal_types/Report#themes" : "topic", "http://www.eea.europa.eu/portal_types/SOERKeyFact#themes" : "topic", "http://www.eea.europa.eu/portal_types/SOERMessage#themes" : "topic", "http://www.eea.europa.eu/portal_types/Specification#themes" : "topic", "http://www.eea.europa.eu/portal_types/Speech#themes" : "topic", "http://www.eea.europa.eu/portal_types/WorkItem#themes" : "topic"},
	"proplist" : ["http://www.eea.europa.eu/portal_types/File#id", "http://www.eea.europa.eu/portal_types/Highlight#id", "http://www.eea.europa.eu/portal_types/Image#id", "http://www.eea.europa.eu/portal_types/IndicatorFactSheet#id", "http://www.eea.europa.eu/portal_types/KeyMessage#id", "http://www.eea.europa.eu/portal_types/Link#id", "http://www.eea.europa.eu/portal_types/MethodologyReference#id", "http://www.eea.europa.eu/portal_types/Organisation#id", "http://www.eea.europa.eu/portal_types/PolicyDocumentReference#id", "http://www.eea.europa.eu/portal_types/PolicyQuestion#id", "http://www.eea.europa.eu/portal_types/PressRelease#id", "http://www.eea.europa.eu/portal_types/Promotion#id", "http://www.eea.europa.eu/portal_types/QuickEvent#id", "http://www.eea.europa.eu/portal_types/RationaleReference#id", "http://www.eea.europa.eu/portal_types/Report#id", "http://www.eea.europa.eu/portal_types/SOERKeyFact#id", "http://www.eea.europa.eu/portal_types/SOERMessage#id", "http://www.eea.europa.eu/portal_types/Specification#id", "http://www.eea.europa.eu/portal_types/Speech#id", "http://www.eea.europa.eu/portal_types/WorkItem#id"],
	"listtype" : "black"
}
}'
