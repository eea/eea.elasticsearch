var api = require('../../common/lib/esAPI.js');
var config = require('./river_config/config.js');

var reqBody = {
  "type": "eeaRDF",
  "eeaRDF" : {
    "endpoint" : config.endpoint,
    "queryType" : config.queryType,
    "query" : config.indexQuery,
    "proplist" : config.proplist,
    "listtype" : config.listtype,
    "normProp" : config.normalisedProperties,
    "normMissing" : config.normMissing,
    "blackMap" : config.blackMap,
    "whiteMap" : config.whiteMap,
    "normObj" : config.normObj
  }
};

// As part of the runScript skel
var run = function(options, callbacks) {
    api.esAPI(options)
       .PUT('/_river/search/_meta', reqBody, callbacks).execute();
}
module.exports = { run: run };
