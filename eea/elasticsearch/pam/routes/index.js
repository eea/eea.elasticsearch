
/*
 * GET home page.
 */

var fieldsMapping = [
    {'name':'2015_EU_ETS_kt_CO2', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#2015_EU_ETS_kt_CO2', 'title': '2015_EU_ETS_kt_CO2'},
    {'name':'2015_non_ETS_kt_CO2', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#2015_non_ETS_kt_CO2', 'title': '2015_non_ETS_kt_CO2'},
    {'name':'2015_total_kt_CO2_equivalent_per_year', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#2015_total_kt_CO2_equivalent_per_year', 'title': '2015_total_kt_CO2_equivalent_per_year'},
    {'name':'2020_EU_ETS_kt_CO2', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#2020_EU_ETS_kt_CO2', 'title': '2020_EU_ETS_kt_CO2'},
    {'name':'2020_non_ETS_kt_CO2', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#2020_non_ETS_kt_CO2', 'title': '2020_non_ETS_kt_CO2'},
    {'name':'2020_total_kt_CO2', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#2020_total_kt_CO2', 'title': '2020_total_kt_CO2'},
    {'name':'2025_total_kt_CO2', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#2025_total_kt_CO2', 'title': '2025_total_kt_CO2'},
    {'name':'2030_total_kt_CO2', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#2030_total_kt_CO2', 'title': '2030_total_kt_CO2'},
    {'name':'Absolute_costs_per_year_in_EUR_specify_year_cost_has_been_calculated_for', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Absolute_costs_per_year_in_EUR_specify_year_cost_has_been_calculated_for', 'title': 'Absolute_costs_per_year_in_EUR_specify_year_cost_has_been_calculated_for'},
    {'name':'Average_emission_reduction_kt_CO2', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Average_emission_reduction_kt_CO2', 'title': 'Average_emission_reduction_kt_CO2'},
    {'name':'Brief_description', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Brief_description', 'title': 'Brief_description'},
    {'name':'Check_of_mandatory_reporting', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Check_of_mandatory_reporting', 'title': 'Check_of_mandatory_reporting'},
    {'name':'Comment_relevant_to_the_PAM', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Comment_relevant_to_the_PAM', 'title': 'Comment_relevant_to_the_PAM'},
    {'name':'Comments_by_MS', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Comments_by_MS', 'title': 'Comments_by_MS'},
    {'name':'Comments_relevant_to_the_policy', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Comments_relevant_to_the_policy', 'title': 'Comments_relevant_to_the_policy'},
    {'name':'Companies_businesses_industrial_associations', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Companies_businesses_industrial_associations', 'title': 'Companies_businesses_industrial_associations'},
    {'name':'Costs_in_EUR_per_tonne_CO2_eq_reduced_sequestered', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Costs_in_EUR_per_tonne_CO2_eq_reduced_sequestered', 'title': 'Costs_in_EUR_per_tonne_CO2_eq_reduced_sequestered'},
    {'name':'Country', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Country', 'title': 'Country'},
    {'name':'Country_with_EU', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Country_with_EU', 'title': 'Country_with_EU'},
    {'name':'Description_and_units', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Description_and_units', 'title': 'Description_and_units'},
    {'name':'Description_of_cost_estimates_Basis_for_cost_estimate', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Description_of_cost_estimates_Basis_for_cost_estimate', 'title': 'Description_of_cost_estimates_Basis_for_cost_estimate'},
    {'name':'Documentation_Source_of_cost_estimation', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Documentation_Source_of_cost_estimation', 'title': 'Documentation_Source_of_cost_estimation'},
    {'name':'Documentation_Source_of_estimation', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Documentation_Source_of_estimation', 'title': 'Documentation_Source_of_estimation'},
    {'name':'EU_ETS_non_EU_ETS', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#EU_ETS_non_EU_ETS', 'title': 'EU_ETS_non_EU_ETS'},
    {'name':'End_year_of_implementation', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#End_year_of_implementation', 'title': 'End_year_of_implementation'},
    {'name':'Estimate_include_reductions_related_to_common_and_coordinated_policies_and_measures', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Estimate_include_reductions_related_to_common_and_coordinated_policies_and_measures', 'title': 'Estimate_include_reductions_related_to_common_and_coordinated_policies_and_measures'},
    {'name':'Explanation_of_the__mitigation_estimates', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Explanation_of_the__mitigation_estimates', 'title': 'Explanation_of_the__mitigation_estimates'},
    {'name':'Factors_affected_by_PAM', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Factors_affected_by_PAM', 'title': 'Factors_affected_by_PAM'},
    {'name':'GHG_affected', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#GHG_affected', 'title': 'GHG_affected'},
    {'name':'Information_about_non_GHG_mitigation_benefits_of_policies_and_measures', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Information_about_non_GHG_mitigation_benefits_of_policies_and_measures', 'title': 'Information_about_non_GHG_mitigation_benefits_of_policies_and_measures'},
    {'name':'Local_government', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Local_government', 'title': 'Local_government'},
    {'name':'Measure_interact_with_other_policies_and_measures_at_the_national_or_EU_level', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Measure_interact_with_other_policies_and_measures_at_the_national_or_EU_level', 'title': 'Measure_interact_with_other_policies_and_measures_at_the_national_or_EU_level'},
    {'name':'Name_of_PAM', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Name_of_PAM', 'title': 'Name_of_PAM'},
    {'name':'Name_or_organisation', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Name_or_organisation', 'title': 'Name_or_organisation'},
    {'name':'National_government', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#National_government', 'title': 'National_government'},
    {'name':'Objective', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Objective', 'title': 'Objective'},
    {'name':'Others_not_listed', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Others_not_listed', 'title': 'Others_not_listed'},
    {'name':'PAMID', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#PAMID', 'title': 'PAMID'},
    {'name':'PAM_No', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#PAM_No', 'title': 'PAM_No'},
    {'name':'Policy_Type_List', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Policy_Type_List', 'title': 'Policy_Type_List'},
    {'name':'Policy_interactions_explanation', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Policy_interactions_explanation', 'title': 'Policy_interactions_explanation'},
    {'name':'Primary_EU_policy_responsible_objectives', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Primary_EU_policy_responsible_objectives', 'title': 'Primary_EU_policy_responsible_objectives'},
    {'name':'Projections_scenario_in_which_the_PAM_is_included', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Projections_scenario_in_which_the_PAM_is_included', 'title': 'Projections_scenario_in_which_the_PAM_is_included'},
    {'name':'Reference_source_of_estimation', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Reference_source_of_estimation', 'title': 'Reference_source_of_estimation'},
    {'name':'Regional_entities', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Regional_entities', 'title': 'Regional_entities'},
    {'name':'Research_institutions', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Research_institutions', 'title': 'Research_institutions'},
    {'name':'Secondary_EU_policy_responsible_objectives', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Secondary_EU_policy_responsible_objectives', 'title': 'Secondary_EU_policy_responsible_objectives'},
    {'name':'Sector_List', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Sector_List', 'title': 'Sector_List'},
    {'name':'Start_year_of_implementation', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Start_year_of_implementation', 'title': 'Start_year_of_implementation'},
    {'name':'Status', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Status', 'title': 'Status'},
    {'name':'Tertiary_EU_policy_responsible_objectives', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Tertiary_EU_policy_responsible_objectives', 'title': 'Tertiary_EU_policy_responsible_objectives'},
    {'name':'Years_for_which_reduction_applies', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Years_for_which_reduction_applies', 'title': 'Years_for_which_reduction_applies'},
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

  var query = '{"query":{"bool":{"must":[{"term":{"http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#PAMID":"'+req.query.pamid+'"}}]}}}';
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
//    console.log(e.message);
  });
  request.end();

}
