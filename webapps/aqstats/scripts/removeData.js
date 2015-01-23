var api = require('../../common/lib/esAPI.js');

// As part of the runScript skel
var run = function(options, callbacks) {
    api.esAPI(options).DELETE('/aqstatsdata', callbacks).execute();
}

module.exports = { run: run };
