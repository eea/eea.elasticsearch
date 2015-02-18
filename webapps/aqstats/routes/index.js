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
    {'name' : 'inspireNamespace', 'field' : field_base + 'inspireNamespace', 'title' : 'Namespace'},
    {'name' : 'station', 'field' : field_base + 'station', 'title' : 'Station'},
    {'name' : 'aggregationType', 'field' : field_base + 'aggregationType', 'title' : 'AggregationType'},
    {'name' : 'aggregationType_reportingmetric', 'field' : field_base + 'aggregationType_reportingmetric', 'title' : 'ReportingMetric'},
    {'name' : 'beginPosition', 'field' : field_base + 'beginPosition_year', 'title' : 'Year'},
    {'name' : 'pollutant', 'field' : field_base + 'pollutant', 'title' : 'Pollutant'},
    {'name' : 'airqualityValue_aqvalue', 'field' : field_base + 'airqualityValue_aqvalue', 'title' : 'AQvalue'},
    {'name' : 'datacapturePct_datacapture', 'field' : field_base + 'datacapturePct_datacapture', 'title' : 'DataCapture'},
    {'name' : 'observationValidity', 'field' : field_base + 'observationValidity', 'title' : 'ValidityFlag'},
    {'name' : 'observationVerification', 'field' : field_base + 'observationVerification', 'title' : 'VerificationFlag'},
    {'name' : 'samplingPoint_stationtype', 'field' : field_base + 'samplingPoint_stationtype', 'title' : 'StationType'},
    {'name' : 'station_stationarea', 'field' : field_base + 'station_stationarea', 'title' : 'StationArea'},
    {'name' : 'station_lat_stationlatitude', 'field' : field_base + 'station_lat_stationlatitude', 'title' : 'StationLatitude'},
    {'name' : 'station_lon_stationlongitude', 'field' : field_base + 'station_lon_stationlongitude', 'title' : 'StationLongitude'},
    {'name' : 'procedure_analyticaltechnique', 'field' : field_base + 'procedure_analyticaltechnique', 'title' : 'AnalyticalTechnique'},
    {'name' : 'procedure_measurementtype', 'field' : field_base + 'procedure_measurementtype', 'title' : 'MeasurementType'},
    {'name' : 'sample_inletHeight', 'field' : field_base + 'sample_inletHeight', 'title' : 'InletHeight'},
    {'name' : 'sample_kerbdistance', 'field' : field_base + 'sample_kerbdistance', 'title' : 'KerbDistance'},
    {'name' : 'samplingPoint_zone', 'field' : field_base + 'samplingPoint_zone', 'title' : 'Zone'},
    {'name' : 'samplingPoint_zoneLabel', 'field' : field_base + 'samplingPoint_zoneLabel', 'title' : 'ZoneLabel'},
    {'name' : 'samplingPoint_zoneType', 'field' : field_base + 'samplingPoint_zoneType', 'title' : 'ZoneType'},
    {'name' : 'samplingPoint_zoneCountryLabel', 'field' : field_base + 'samplingPoint_zoneCountryLabel', 'title' : 'ZoneCountryLabel'},
    {'name' : 'samplingPoint_samplingPoint', 'field' : field_base + 'samplingPoint_samplingPoint', 'title' : 'SamplingPoint'},
    {'name' : 'sample_sample', 'field' : field_base + 'sample_sample', 'title' : 'Sample'},
    {'name' : 'procedure_procedure', 'field' : field_base + 'procedure_procedure', 'title' : 'Procedure'}
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

  var request = require('request');

  var query = '{"query":{"ids":{"values":["' + req.query.aqstatid + '"]}}}';
  query = encodeURIComponent(query);
  var options = {
    host: es_host,
    path: es_path + "?source="+ query
  };

  request("http://"+options.host + options.path, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        try{
            var data = JSON.parse(body);
            tmp_resultobj = {};
            tmp_resultobj["records"] = [];

            for ( var item = 0; item < data.hits.hits.length; item++ ) {
                tmp_resultobj["records"].push(data.hits.hits[item]._source);
                tmp_resultobj["records"][tmp_resultobj["records"].length - 1]._id = data.hits.hits[item]._id;
            }
            resultobj = {};
            for (var idx = 0; idx < fieldsMapping.length; idx++) {
                resultobj[fieldsMapping[idx]['name']] = {'label':fieldsMapping[idx]['title'],
                                                    'value':tmp_resultobj["records"][0][fieldsMapping[idx]['field']]};
            }
            resultobj['exceedence_href'] = {'label':'exceedence_href', value:encodeURIComponent(resultobj['_id'].value)};
            res.render('details', {data: resultobj,
                                   base_path: base_path,
                                   es_host: es_host,
                                   es_path: es_path,
                                   field_base: field_base});
        }
        catch(err){
            res.render('details', {data: "",
                                   base_path: base_path,
                                   es_host: es_host,
                                   es_path: es_path,
                                   field_base: field_base});
        }

    }
    else {
        if (!error && response.statusCode !== 200){
            console.log(response.statusCode);
        }
        else {
            console.log(error);
        }
    }
  });

};
