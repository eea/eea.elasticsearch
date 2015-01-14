/*
 * GET home page.
 */

var nconf = require('nconf');
nconf.file({file:'config.json'});
var field_base = nconf.get("es:field_base");
var es_host = nconf.get("es:host");
var es_path = nconf.get("es:path");
var base_path = nconf.get("http:base_path");

var fieldsMapping = [
    {'name' : '_id', 'field' : '_id', 'title' : '_id'},
    {'name' : 'observationVerification', 'field' : field_base + 'observationVerification', 'title' : 'observationVerification'},
    {'name' : 'samplingPoint', 'field' : field_base + 'samplingPoint', 'title' : 'samplingPoint'},
    {'name' : 'endPosition', 'field' : field_base + 'endPosition', 'title' : 'endPosition'},
    {'name' : 'aggregationType', 'field' : field_base +'aggregationType', 'title' : 'aggregationType'},
    {'name' : 'station', 'field' : field_base +'station', 'title' : 'station'},
    {'name' : 'sample', 'field' : field_base +'sample', 'title' : 'sample'},
    {'name' : 'datacapturePct', 'field' : field_base +'datacapturePct', 'title' : 'datacapturePct'},
    {'name' : 'airqualityValue', 'field' : field_base +'airqualityValue', 'title' : 'airqualityValue'},
    {'name' : 'observationValidity', 'field' : field_base +'', 'title' : 'observationValidity'},
    {'name' : 'inspireNamespace', 'field' : field_base +'inspireNamespace', 'title' : 'inspireNamespace'},
    {'name' : 'procedure', 'field' : field_base +'procedure', 'title' : 'procedure'},
    {'name' : 'inserted', 'field' : field_base +'inserted', 'title' : 'inserted'},
    {'name' : 'beginPosition', 'field' : field_base +'beginPosition', 'title' : 'beginPosition'},
    {'name' : 'pollutant', 'field' : field_base +'pollutant', 'title' : ''},
];

exports.index = function(req, res){
  res.render('index', {title: 'aqstat',
                       base_path: base_path,
                       es_host: es_host,
                       es_path: es_path,
                       field_base: field_base});
};

exports.details = function(req, res){
  if (req.query.aqstatid === undefined){
      res.send('aqstatid is missing');
      return;
  }

  var http = require('http');
  var query = '{"query":{"ids":{"values":["' + req.query.aqstatid + '"]}}}';
  query = encodeURIComponent(query);
  var options = {
    host: es_host,
    path: es_path + "?source="+ query
  };

  var request = http.request(options, function (result) {
    var data = '';
    result.on('data', function (chunk) {
        data += chunk;
    });
    result.on('end', function () {
        try{
            data = JSON.parse(data);
//console.log(data.hits.hits);
            tmp_resultobj = {};
            tmp_resultobj["records"] = [];

            for ( var item = 0; item < data.hits.hits.length; item++ ) {
                tmp_resultobj["records"].push(data.hits.hits[item]._source);
console.log("xxx")
                console.log(data.hits.hits[item]._id)
                tmp_resultobj["records"][tmp_resultobj["records"].length - 1]._id = data.hits.hits[item]._id;
console.log(tmp_resultobj["records"][tmp_resultobj["records"].length - 1])
            }
            resultobj = {};
            for (var idx = 0; idx < fieldsMapping.length; idx++) {
                resultobj[fieldsMapping[idx]['name']] = {'label':fieldsMapping[idx]['title'],
                                                    'value':tmp_resultobj["records"][0][fieldsMapping[idx]['field']]};
            }
//console.log("xxx")
//console.log(resultobj)
            res.render('details', {data: resultobj,
                                   base_path: base_path,
                                   es_host: es_host,
                                   es_path: es_path,
                                   field_base: field_base});
        }
        catch(err){
//console.log("xxx2")
            res.render('details', {data: "",
                                   base_path: base_path,
                                   es_host: es_host,
                                   es_path: es_path,
                                   field_base: field_base});
        }

    });
  });
  request.on('error', function (e) {
    console.log(e.message);
  });
  request.end();
};
