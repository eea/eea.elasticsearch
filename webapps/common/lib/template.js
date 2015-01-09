/*
 * GET home page.
 */

exports.invalidate_templates = function(nconf) {
    return function(req, res) {
        var fs = require("fs");
        fs.mkdir("external_templates", function(e) {
            // Pass silently if external tempalte dir exists
            if (e && e.code !== 'EEXIST')
                console.log(e);
        });
        fs.writeFile("external_templates/footer.html","");
        fs.writeFile("external_templates/header.html","");
        fs.writeFile("external_templates/head.html","");

        var http = require('http');
        var head_options = {
            host: nconf.get("external_templates:host"),
            path: nconf.get("external_templates:head_path")
        };
        var head_request = http.request(head_options, function (res) {
            var data = '';
            res.on('data', function (chunk) {
                data += chunk;
            });
            res.on('end', function () {
                fs.writeFile("external_templates/head.html",data);
                console.log('Wrote head');
            });
        });
        head_request.on('error', function (e) {
            console.log(e.message);
        });
        head_request.end();

        var header_options = {
            host: nconf.get("external_templates:host"),
            path: nconf.get("external_templates:header_path")
        };
        var header_request = http.request(header_options, function (res) {
            var data = '';
            res.on('data', function (chunk) {
                data += chunk;
            });
            res.on('end', function () {
                fs.writeFile("external_templates/header.html",data);
                console.log('Wrote header');
            });
        });
        header_request.on('error', function (e) {
            console.log(e.message);
        });
        header_request.end();

        var footer_options = {
            host: nconf.get("external_templates:host"),
            path: nconf.get("external_templates:footer_path")
        };
        var footer_request = http.request(footer_options, function (res) {
            var data = '';
            res.on('data', function (chunk) {
                data += chunk;
            });
            res.on('end', function () {
                fs.writeFile("external_templates/footer.html",data);
                console.log('Wrote footer');
            });
        });
        footer_request.on('error', function (e) {
            console.log(e.message);
        });
        footer_request.end();

        res.send("done");
    };
};
