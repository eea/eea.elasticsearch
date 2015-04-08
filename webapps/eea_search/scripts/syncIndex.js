var api = require('../../common/lib/esAPI.js');
var config = require('./river_config/config.js');

var reqBody = {
    "type": "eeaRDF",
    "eeaRDF": {
        "endpoint": config.endpoint,
        "indexType": "sync",
        "syncConditions": config.syncConditions,
        "graphSyncConditions": "FILTER (str(?graph) = concat(str(?resource), \"/@@rdf\"))",
        "syncTimeProp": config.syncTimeProp,
        "startTime": "",
        "queryType": config.queryType,
        "proplist": config.proplist,
        "listtype": config.listtype,
        "normProp": config.normProp,
        "normMissing": config.normMissing,
        "blackMap": config.blackMap,
        "whiteMap": config.whiteMap,
        "normObj": config.normObj,
        "syncOldData": true
    }
};

// As part of the runScript skel
var run = function(options, callbacks) {
    api.esAPI(options)
       .DELETE('/_river/sync', callbacks)
       .PUT('/_river/sync/_meta', reqBody, callbacks).execute();
}
module.exports = { run: run };
