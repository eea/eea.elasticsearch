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
    {'name' : 'pam_2015_EU_ETS_kt_CO2', 'field' : field_base + '2015_EU_ETS_kt_CO2', 'title' : '2015 EU ETS (kt CO2-equivalent per year)'},
    {'name' : 'pam_2015_non_ETS_kt_CO2', 'field' : field_base + '2015_non_ETS_kt_CO2', 'title' : '2015 non-ETS (kt CO2-equivalent per year)'},
    {'name' : 'pam_2015_total_kt_CO2_equivalent_per_year', 'field' : field_base +'2015_total_kt_CO2_equivalent_per_year', 'title' : '2015 total (kt CO2-equivalent per year)'},
    {'name' : 'pam_2020_EU_ETS_kt_CO2', 'field' : field_base + '2020_EU_ETS_kt_CO2', 'title' : '2020 EU ETS (kt CO2-equivalent per year)'},
    {'name' : 'pam_2020_non_ETS_kt_CO2', 'field' : field_base + '2020_non_ETS_kt_CO2', 'title' : '2020 non-ETS (kt CO2-equivalent per year)'},
    {'name' : 'pam_2020_total_kt_CO2', 'field' : field_base + '2020_total_kt_CO2', 'title' : '2020 total (kt CO2-equivalent per year)'},
    {'name' : 'pam_2025_total_kt_CO2', 'field' : field_base + '2025_total_kt_CO2', 'title' : '2025 total (kt CO2-equivalent per year)'},
    {'name' : 'pam_2030_total_kt_CO2', 'field' : field_base + '2030_total_kt_CO2', 'title' : '2030 total (kt CO2-equivalent per year)'},
    {'name' : 'Absolute_costs_per_year_in_million_EUR', 'field' : field_base + 'Absolute_costs_per_year_in_million_EUR', 'title' : 'Absolute costs per year in million EUR'},
    {'name' : 'Additional_comment', 'field' : field_base + 'Additional_comment', 'title' : 'Additional comment'},
    {'name' : 'Affected_GHG', 'field' : field_base + 'Affected_GHG', 'title' : 'Affected GHG'},
    {'name' : 'Average_emission_reduction_kt_CO2', 'field' : field_base + 'Average_emission_reduction_kt_CO2', 'title' : 'Average emission reduction'},
    {'name' : 'Basis_for_estimate', 'field' : field_base + 'Basis_for_estimate', 'title' : 'Basis for estimate'},
    {'name' : 'Check_of_mandatory_reporting', 'field' : field_base + 'Check_of_mandatory_reporting', 'title' : ''},
    {'name' : 'Comment_on_implementation_period', 'field' : field_base + 'Comment_on_implementation_period', 'title' : 'Comment on implementation period start year'},
    {'name' : 'Comments_by_MS', 'field' : field_base + 'Comments_by_MS', 'title' : ''},
    {'name' : 'Costs_in_EUR_per_tonne_CO2_equivalent_reduced_sequestered', 'field' : field_base + 'Costs_in_EUR_per_tonne_CO2_equivalent_reduced_sequestered', 'title' : 'Costs in EUR per tonne CO2 equivalent reduced/ sequestered'},
    {'name' : 'Country', 'field' : field_base + 'Country', 'title' : 'Country'},
    {'name' : 'CountryCode', 'field' : field_base + 'CountryCode', 'title' : ''},
    {'name' : 'Description', 'field' : field_base + 'Description', 'title' : 'Description'},
    {'name' : 'Description___basis_for_cost_estimate', 'field' : field_base + 'Description___basis_for_cost_estimate', 'title' : 'Description - basis for cost estimate'},
    {'name' : 'Details_on_policy_interactions', 'field' : field_base + 'Details_on_policy_interactions', 'title' : 'Details on policy interactions'},
    {'name' : 'Documentation___source_of_cost_estimate', 'field' : field_base + 'Documentation___source_of_cost_estimate', 'title' : 'Documentation - source of cost estimation'},
    {'name' : 'End_year', 'field' : field_base + 'End_year', 'title' : 'End year'},
    {'name' : 'Factors_affected_by_PAM', 'field' : field_base + 'Factors_affected_by_PAM', 'title' : 'Factors affected by PAM'},
    {'name' : 'Impact_included_in_another_policy_or_policy_package', 'field' : field_base + 'Impact_included_in_another_policy_or_policy_package', 'title' : 'Impact included in another policy or policy package?'},
    {'name' : 'Inclusion_of_estimate_in_projections', 'field' : field_base + 'Inclusion_of_estimate_in_projections', 'title' : 'Inclusion of estimate in projections'},
    {'name' : 'Inclusion_of_savings_related_to_EU_policies', 'field' : field_base + 'Inclusion_of_savings_related_to_EU_policies', 'title' : 'Inclusion of savings from EU policies into estimate'},
    {'name' : 'Indicators_to_monitor_and_evaluate_implementation', 'field' : field_base + 'Indicators_to_monitor_and_evaluate_implementation', 'title' : 'Indicator(s) to monitor and evaluate implementation'},
    {'name' : 'Interaction_with_other_policies_and_measures_at_the_national_or_EU_level', 'field' : field_base + 'Interaction_with_other_policies_and_measures_at_the_national_or_EU_level', 'title' : 'Interaction with other policies and measures at the national or EU level'},
    {'name' : 'Link_to_EU_Emissions_Trading_Scheme_ETS', 'field' : field_base + 'Link_to_EU_Emissions_Trading_Scheme_ETS', 'title' : 'Link to EU Emissions Trading Scheme (ETS)'},
    {'name' : 'Name', 'field' : field_base + 'Name', 'title' : 'Name'},
    {'name' : 'Name_of_implementing_entities', 'field' : field_base + 'Name_of_implementing_entities', 'title' : 'Name of implementing entities'},
    {'name' : 'Name_or_organisation_providing_information_on_policy', 'field' : field_base + 'Name_or_organisation_providing_information_on_policy', 'title' : 'Name or organisation providing information on policy'},
    {'name' : 'Non_GHG_mitigation_benefits', 'field' : field_base + 'Non_GHG_mitigation_benefits', 'title' : 'Non GHG-mitigation benefits'},
    {'name' : 'Objective', 'field' : field_base + 'Objective', 'title' : 'Objective'},
    {'name' : 'Other_policy_or_policy_package_in_which_the_impact_is_included', 'field' : field_base + 'Other_policy_or_policy_package_in_which_the_impact_is_included', 'title' : 'Other policy or /policy package in which the impact is included'},
    {'name' : 'PAMID', 'field' : field_base + 'PAMID', 'title' : ''},
    {'name' : 'PAM_No', 'field' : field_base + 'PAM_No', 'title' : ''},
    {'name' : 'Primary_EU_policy_responsible_objectives', 'field' : field_base + 'Primary_EU_policy_responsible_objectives', 'title' : ''},
    {'name' : 'Projection_scenario_in_which_the_PAM_is_included', 'field' : field_base + 'Projection_scenario_in_which_the_PAM_is_included', 'title' : 'Projection scenario in which the PAM is included'},
    {'name' : 'Reference_source_of_estimation', 'field' : field_base + 'Reference_source_of_estimation', 'title' : 'Reference / source for estimation of emission savings'},
    {'name' : 'Related_EU_policies', 'field' : field_base + 'Related_EU_policies', 'title' : 'Related EU policies'},
    {'name' : 'Secondary_EU_policy_responsible_objectives', 'field' : field_base + 'Secondary_EU_policy_responsible_objectives', 'title' : ''},
    {'name' : 'Start_year', 'field' : field_base + 'Start_year', 'title' : 'Start year'},
    {'name' : 'Status', 'field' : field_base + 'Status', 'title' : 'Status'},
    {'name' : 'Targeted_sectors', 'field' : field_base + 'Targeted_sectors', 'title' : 'Targeted sector(s)'},
    {'name' : 'Tertiary_EU_policy_responsible_objectives', 'field' : field_base + 'Tertiary_EU_policy_responsible_objectives', 'title' : ''},
    {'name' : 'Type_of_implementing_entities', 'field' : field_base + 'Type_of_implementing_entities', 'title' : 'Type of implementing entities'},
    {'name' : 'Type_of_instrument', 'field' : field_base + 'Type_of_instrument', 'title' : 'Type of instrument'},
    {'name' : 'Years_for_which_the_reduction_applies', 'field' : field_base + 'Years_for_which_the_reduction_applies', 'title' : 'Year(s) for which the reduction applies'}
];

exports.index = function(req, res){
  res.render('index', {title: 'PAM',
                       base_path: base_path,
                       es_host: es_host,
                       es_path: es_path,
                       field_base: field_base});
};

exports.details = function(req, res){
  if (req.query.pamid === undefined){
      res.send('pamid is missing');
      return;
  }

  var http = require('http');

  var query = '{"query":{"bool":{"must":[{"term":{"'+field_base + 'PAMID":"'+req.query.pamid+'"}}]}}}';
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
            tmp_resultobj = {};
            tmp_resultobj["records"] = [];

            for ( var item = 0; item < data.hits.hits.length; item++ ) {
                tmp_resultobj["records"].push(data.hits.hits[item]._source);
            }
            resultobj = {};
            for (var idx = 0; idx < fieldsMapping.length; idx++) {
                resultobj[fieldsMapping[idx]['name']] = {'label':fieldsMapping[idx]['title'],
                                                    'value':tmp_resultobj["records"][0][fieldsMapping[idx]['field']]};
            }

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

    });
  });
  request.on('error', function (e) {
    console.log(e.message);
  });
  request.end();
};

exports.invalidate_templates = function(req, res){
    var fs = require("fs");
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
        });
    });
    footer_request.on('error', function (e) {
        console.log(e.message);
    });
    footer_request.end();

    res.send("done");
};
