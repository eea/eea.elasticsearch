field_base = http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#';
/*
 * GET home page.
 */

var fieldsMapping = [
    {'name':'pam_2015_EU_ETS_kt_CO2', 'field': field_base + '2015_EU_ETS_kt_CO2', 'title': '2015 EU ETS (kt CO2-equivalent per year)'},
    {'name':'pam_2015_non_ETS_kt_CO2', 'field': field_base + '2015_non_ETS_kt_CO2', 'title': '2015 non-ETS (kt CO2-equivalent per year)'},
    {'name':'pam_2015_total_kt_CO2_equivalent_per_year', 'field': field_base + '2015_total_kt_CO2_equivalent_per_year', 'title': '2015 total (kt CO2-equivalent per year)'},
    {'name':'pam_2020_EU_ETS_kt_CO2', 'field': field_base + '2020_EU_ETS_kt_CO2', 'title': '2020 EU ETS (kt CO2-equivalent per year)'},
    {'name':'pam_2020_non_ETS_kt_CO2', 'field': field_base + '2020_non_ETS_kt_CO2', 'title': '2020 non-ETS (kt CO2-equivalent per year)'},
    {'name':'pam_2020_total_kt_CO2', 'field': field_base + '2020_total_kt_CO2', 'title': '2020 total (kt CO2-equivalent per year)'},
    {'name':'pam_2025_total_kt_CO2', 'field': field_base + '2025_total_kt_CO2', 'title': '2025 total (kt CO2-equivalent per year)'},
    {'name':'pam_2030_total_kt_CO2', 'field': field_base + '2030_total_kt_CO2', 'title': '2030 total (kt CO2-equivalent per year)'},
    {'name':'Absolute_costs_per_year_in_EUR_specify_year_cost_has_been_calculated_for', 'field': field_base + 'Absolute_costs_per_year_in_EUR_specify_year_cost_has_been_calculated_for', 'title': 'Absolute costs per year in EUR'},
    {'name':'Average_emission_reduction_kt_CO2', 'field': field_base + 'Average_emission_reduction_kt_CO2', 'title': 'Average emission reduction (kt CO2-equivalent per year)'},
    {'name':'Brief_description', 'field': field_base + 'Brief_description', 'title': 'Brief description'},
    {'name':'Check_of_mandatory_reporting', 'field': field_base + 'Check_of_mandatory_reporting', 'title': 'Check of mandatory reporting'},
    {'name':'Comment_relevant_to_the_PAM', 'field': field_base + 'Comment_relevant_to_the_PAM', 'title': 'General Comment'},
    {'name':'Comments_by_MS', 'field': field_base + 'Comments_by_MS', 'title': 'Comments by MS'},
    {'name':'Comments_relevant_to_the_policy', 'field': field_base + 'Comments_relevant_to_the_policy', 'title': 'Comments relevant to the policy'},
    {'name':'Companies_businesses_industrial_associations', 'field': field_base + 'Companies_businesses_industrial_associations', 'title': 'Companies / businesses / industrial associations'},
    {'name':'Costs_in_EUR_per_tonne_CO2_eq_reduced_sequestered', 'field': field_base + 'Costs_in_EUR_per_tonne_CO2_eq_reduced_sequestered', 'title': 'Costs in EUR per tonne CO2 eq reduced/ sequestered'},
    {'name':'Country', 'field': field_base + 'Country', 'title': 'Member State'},
    {'name':'Country_with_EU', 'field': field_base + 'Country_with_EU', 'title': 'Country, EU membership'},
    {'name':'Description_and_units', 'field': field_base + 'Description_and_units', 'title': 'Description and units'},
    {'name':'Description_of_cost_estimates_Basis_for_cost_estimate', 'field': field_base + 'Description_of_cost_estimates_Basis_for_cost_estimate', 'title': 'Description of cost estimates'},
    {'name':'Documentation_Source_of_cost_estimation', 'field': field_base + 'Documentation_Source_of_cost_estimation', 'title': 'Documentation/ Source of cost estimation'},
    {'name':'Documentation_Source_of_estimation', 'field': field_base + 'Documentation_Source_of_estimation', 'title': 'Documentation/ Source of estimation if available'},
    {'name':'EU_ETS_non_EU_ETS', 'field': field_base + 'EU_ETS_non_EU_ETS', 'title': 'EU ETS/non ETS'},
    {'name':'End_year_of_implementation', 'field': field_base + 'End_year_of_implementation', 'title': 'End year of implementation'},
    {'name':'Estimate_include_reductions_related_to_common_and_coordinated_policies_and_measures', 'field': field_base + 'Estimate_include_reductions_related_to_common_and_coordinated_policies_and_measures', 'title': 'Does the estimate include reductions related to common and coordinated policies and measures?'},
    {'name':'Explanation_of_the__mitigation_estimates', 'field': field_base + 'Explanation_of_the__mitigation_estimates', 'title': 'Explanation of the basis for the mitigation estimates'},
    {'name':'Factors_affected_by_PAM', 'field': field_base + 'Factors_affected_by_PAM', 'title': 'Factors affected by PAM'},
    {'name':'GHG_affected', 'field': field_base + 'GHG_affected', 'title': 'GHG affected'},
    {'name':'Information_about_non_GHG_mitigation_benefits_of_policies_and_measures', 'field': field_base + 'Information_about_non_GHG_mitigation_benefits_of_policies_and_measures', 'title': 'Information about non-GHG mitigation benefits of policies and measures'},
    {'name':'Local_government', 'field': field_base + 'Local_government', 'title': 'Local government'},
    {'name':'Measure_interact_with_other_policies_and_measures_at_the_national_or_EU_level', 'field': field_base + 'Measure_interact_with_other_policies_and_measures_at_the_national_or_EU_level', 'title': 'Does the policy or measure interact with other policies and measures at the national or EU level?'},
    {'name':'Name_of_PAM', 'field': field_base + 'Name_of_PAM', 'title': 'Name of policy or measure (or group)'},
    {'name':'Name_or_organisation', 'field': field_base + 'Name_or_organisation', 'title': 'Name or organisation'},
    {'name':'National_government', 'field': field_base + 'National_government', 'title': 'National government'},
    {'name':'Objective', 'field': field_base + 'Objective', 'title': 'Objective'},
    {'name':'Others_not_listed', 'field': field_base + 'Others_not_listed', 'title': 'Others not listed'},
    {'name':'PAMID', 'field': field_base + 'PAMID', 'title': 'Internal PaM identifier'},
    {'name':'PAM_No', 'field': field_base + 'PAM_No', 'title': 'PaM-No'},
    {'name':'Policy_Type_List', 'field': field_base + 'Policy_Type_List', 'title': 'Type of instruments'},
    {'name':'Policy_interactions_explanation', 'field': field_base + 'Policy_interactions_explanation', 'title': 'Policy interactions explanation'},
    {'name':'Primary_EU_policy_responsible_objectives', 'field': field_base + 'Primary_EU_policy_responsible_objectives', 'title': 'Primary EU policy responsible for the implementation of the national policy or where national objectives are aimed directly at meeting EU objectives of'},
    {'name':'Projections_scenario_in_which_the_PAM_is_included', 'field': field_base + 'Projections_scenario_in_which_the_PAM_is_included', 'title': 'Projections scenario in which the PAM is included'},
    {'name':'Reference_source_of_estimation', 'field': field_base + 'Reference_source_of_estimation', 'title': 'Reference / source of estimation '},
    {'name':'Regional_entities', 'field': field_base + 'Regional_entities', 'title': 'Regional entities'},
    {'name':'Research_institutions', 'field': field_base + 'Research_institutions', 'title': 'Research institutions'},
    {'name':'Secondary_EU_policy_responsible_objectives', 'field': field_base + 'Secondary_EU_policy_responsible_objectives', 'title': 'Other/secondary EU policy responsible for the implementation of the national policy or where national objectives are aimed directly at meeting EU objectives of:'},
    {'name':'Sector_List', 'field': field_base + 'Sector_List', 'title': 'Sector(s) targeted'},
    {'name':'Start_year_of_implementation', 'field': field_base + 'Start_year_of_implementation', 'title': 'Start year of implementation'},
    {'name':'Status', 'field': field_base + 'Status', 'title': 'Status of policy, measure or group'},
    {'name':'Tertiary_EU_policy_responsible_objectives', 'field': field_base + 'Tertiary_EU_policy_responsible_objectives', 'title': 'Other/tertiary EU policy responsible for the implementation of the national policy or where national objectives are aimed directly at meeting EU objectives of:'},
    {'name':'Years_for_which_reduction_applies', 'field': field_base + 'Years_for_which_reduction_applies', 'title': 'Year(s) for which reduction applies'},
];

exports.index = function(req, res){
  res.render('index', { title: 'PAM' });
};

exports.details = function(req, res){
  if (req.query.pamid === undefined){
      res.send('pamid is missing');
      return;
  }

  var http = require('http');

  var query = '{"query":{"bool":{"must":[{"term":{field_base + "PAMID":"'+req.query.pamid+'"}}]}}}';
  query = encodeURIComponent(query)
  var options = {
    host: 'centaurus.eea.europa.eu',
    path: '/elasticsearch/pamdata/resources/_search?&source=' +query
  }
  var request = http.request(options, function (result) {
    var data = '';
    result.on('data', function (chunk) {
        data += chunk;
    });
    result.on('end', function () {
        try{
            data = JSON.parse(data);
            tmp_resultobj = new Object();
            tmp_resultobj["records"] = new Array();

            for ( var item = 0; item < data.hits.hits.length; item++ ) {
                tmp_resultobj["records"].push(data.hits.hits[item]._source);
            }
            resultobj = new Object();
            for (var idx = 0; idx < fieldsMapping.length; idx++) {
                resultobj[fieldsMapping[idx]['name']] = {'label':fieldsMapping[idx]['title'],
                                                    'value':tmp_resultobj["records"][0][fieldsMapping[idx]['field']]};
            }

            res.render('details', {data: resultobj});
        }
        catch(err){
            res.render('details', {data: ""});
        }

    });
  });
  request.on('error', function (e) {
    console.log(e.message);
  });
  request.end();

}

exports.invalidate_templates = function(req, res){
    var fs = require("fs");
    fs.writeFile("external_templates/footer.html","");
    fs.writeFile("external_templates/header.html","");
    fs.writeFile("external_templates/head.html","");

    var http = require('http');
    var head_options = {
        host: 'www.eea.europa.eu',
        path: '/templates/v2/getRequiredHead?jsdisable=all'
    }
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
        host: 'www.eea.europa.eu',
        path: '/templates/v2/getHeader?jsdisable=all'
    }
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
        host: 'www.eea.europa.eu',
        path: '/templates/v2/getFooter'
    }
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

    res.send("done")
}
