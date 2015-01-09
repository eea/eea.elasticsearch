#!/usr/bin/nodejs

var http = require('http');

var sendRequest = function(method, url, auth, body, callbacks) {
    if (!url.indexOf('http://') == 0)
        url = 'http://' + url;

    var urlparse = require('url');
    parsedUrl = urlparse.parse(url);

    options = {
        host: parsedUrl.host,
        path: parsedUrl.path,
        method: method,
        auth: auth,
        port: parsedUrl.port ? parsedUrl.port : 80
    }

    var req = http.request(options, function(res) {
        res.setEncoding('utf8');
        var body = '';
        res.on('data', function (chunk) {
            body += chunk
        });
        res.on('end', function() {
            callbacks.success(res.statusCode, res.header, body);
        });
    });

    req.on('error', callbacks.error);
    req.write(body);
    req.end();
}

var esAPI = function(options) {
    var successFns = arguments[1] || [];
    var operations = arguments[2] || [];
    return {
        PUT: function(endpoint, body, callbacks) {
            var idx = successFns.length

            var putImpl = function() {
                sendRequest('PUT',
                    options.es_host + endpoint,
                    options.auth,
                    JSON.stringify(body),
                    successFns[idx]);
            }

            successFns.push(callbacks);
            operations.push(putImpl);
            return esAPI(options, successFns, operations);
        },

        DELETE: function(endpoint, callbacks) {
            var idx = successFns.length

            var delImpl = function() {
                sendRequest('DELETE',
                    options.es_host + endpoint,
                    options.auth, '',
                    successFns[idx]);
            }

            successFns.push(callbacks);
            operations.push(delImpl);
            return esAPI(options, successFns, operations);
        },

        execute: function() {
            for (var i = operations.length - 2; i >=0; i--) {
                oldSucc = successFns[i];
                var idx = i;
                successFns[i] = {
                    'error': oldSucc.error,
                    'success': function(s, e, b) {
                        oldSucc.success(s, e, b);
                        operations[idx + 1]();
                    }
                };
            }
            operations[0]();
        }
    };
};

module.exports = {
    esAPI: esAPI
};
