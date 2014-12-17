var api = require('./util/esAPI.js');

// As part of the runScript skel
var run = function(options, callbacks) {
    api.esAPI(options).DELETE('/rdfdata', callbacks).execute();
}
module.exports = { run: run };
