#!/var/local/nodejs/bin/node

var options = {
    'es_host': process.argv[2],
    'auth': 'eea:eea'
}

console.log('Running: ' + process.argv[3]);
var localPrefix = process.argv[3].charAt(0) === '/' ? '' : './';
var script = require(localPrefix + process.argv[3]);
script.run(options, {
    success: function(statusCode, header, body) {
        console.log('ResponseCode: ', statusCode);
        console.log(body);
    },
    error: function(e) {
        console.log('ERROR!');
        console.log(e);
    }
});
