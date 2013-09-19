
/*
 * GET home page.
 */

var fieldsMapping = [
    {'name':'pam_2015_EU_ETS_kt_CO2', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#2015_EU_ETS_kt_CO2', 'title': '2015 EU ETS (kt CO2-equivalent per year)'},
    {'name':'pam_2015_non_ETS_kt_CO2', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#2015_non_ETS_kt_CO2', 'title': '2015 non-ETS (kt CO2-equivalent per year)'},
    {'name':'pam_2015_total_kt_CO2_equivalent_per_year', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#2015_total_kt_CO2_equivalent_per_year', 'title': '2015 total (kt CO2-equivalent per year)'},
    {'name':'pam_2020_EU_ETS_kt_CO2', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#2020_EU_ETS_kt_CO2', 'title': '2020 EU ETS (kt CO2-equivalent per year)'},
    {'name':'pam_2020_non_ETS_kt_CO2', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#2020_non_ETS_kt_CO2', 'title': '2020 non-ETS (kt CO2-equivalent per year)'},
    {'name':'pam_2020_total_kt_CO2', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#2020_total_kt_CO2', 'title': '2020 total (kt CO2-equivalent per year)'},
    {'name':'pam_2025_total_kt_CO2', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#2025_total_kt_CO2', 'title': '2025 total (kt CO2-equivalent per year)'},
    {'name':'pam_2030_total_kt_CO2', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#2030_total_kt_CO2', 'title': '2030 total (kt CO2-equivalent per year)'},
    {'name':'Absolute_costs_per_year_in_EUR_specify_year_cost_has_been_calculated_for', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Absolute_costs_per_year_in_EUR_specify_year_cost_has_been_calculated_for', 'title': 'Absolute costs per year in EUR (specify year cost has been calculated for)'},
    {'name':'Average_emission_reduction_kt_CO2', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Average_emission_reduction_kt_CO2', 'title': 'Average emission reduction (kt CO2-equivalent per year)'},
    {'name':'Brief_description', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Brief_description', 'title': 'Brief description'},
    {'name':'Check_of_mandatory_reporting', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Check_of_mandatory_reporting', 'title': 'Check of mandatory reporting'},
    {'name':'Comment_relevant_to_the_PAM', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Comment_relevant_to_the_PAM', 'title': 'General Comment'},
    {'name':'Comments_by_MS', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Comments_by_MS', 'title': 'Comments by MS'},
    {'name':'Comments_relevant_to_the_policy', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Comments_relevant_to_the_policy', 'title': 'Comments relevant to the policy'},
    {'name':'Companies_businesses_industrial_associations', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Companies_businesses_industrial_associations', 'title': 'Companies / businesses / industrial associations'},
    {'name':'Costs_in_EUR_per_tonne_CO2_eq_reduced_sequestered', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Costs_in_EUR_per_tonne_CO2_eq_reduced_sequestered', 'title': 'Costs in EUR per tonne CO2 eq reduced/ sequestered'},
    {'name':'Country', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Country', 'title': 'Country'},
    {'name':'Country_with_EU', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Country_with_EU', 'title': 'Member State'},
    {'name':'Description_and_units', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Description_and_units', 'title': 'Description and units'},
    {'name':'Description_of_cost_estimates_Basis_for_cost_estimate', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Description_of_cost_estimates_Basis_for_cost_estimate', 'title': 'Description of cost estimates (Basis for cost estimate, what type of costs are provided)'},
    {'name':'Documentation_Source_of_cost_estimation', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Documentation_Source_of_cost_estimation', 'title': 'Documentation/ Source of cost estimation'},
    {'name':'Documentation_Source_of_estimation', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Documentation_Source_of_estimation', 'title': 'Documentation/ Source of estimation'},
    {'name':'EU_ETS_non_EU_ETS', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#EU_ETS_non_EU_ETS', 'title': 'EU ETS/non ETS'},
    {'name':'End_year_of_implementation', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#End_year_of_implementation', 'title': 'End year of implementation'},
    {'name':'Estimate_include_reductions_related_to_common_and_coordinated_policies_and_measures', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Estimate_include_reductions_related_to_common_and_coordinated_policies_and_measures', 'title': 'Does the estimate include reductions related to common and coordinated policies and measures?'},
    {'name':'Explanation_of_the__mitigation_estimates', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Explanation_of_the__mitigation_estimates', 'title': 'Explanation of the basis for  the mitigation estimates'},
    {'name':'Factors_affected_by_PAM', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Factors_affected_by_PAM', 'title': 'Factors affected by PAM'},
    {'name':'GHG_affected', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#GHG_affected', 'title': 'GHG affected'},
    {'name':'Information_about_non_GHG_mitigation_benefits_of_policies_and_measures', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Information_about_non_GHG_mitigation_benefits_of_policies_and_measures', 'title': 'Information about non-GHG mitigation benefits of policies and measures'},
    {'name':'Local_government', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Local_government', 'title': 'Local government'},
    {'name':'Measure_interact_with_other_policies_and_measures_at_the_national_or_EU_level', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Measure_interact_with_other_policies_and_measures_at_the_national_or_EU_level', 'title': 'Does the policy or measure interact with other policies and measures at the national or EU level?'},
    {'name':'Name_of_PAM', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Name_of_PAM', 'title': 'Name of policy or measure (or group)'},
    {'name':'Name_or_organisation', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Name_or_organisation', 'title': 'Name or organisation'},
    {'name':'National_government', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#National_government', 'title': 'National government'},
    {'name':'Objective', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Objective', 'title': 'Objective'},
    {'name':'Others_not_listed', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Others_not_listed', 'title': 'Others not listed'},
    {'name':'PAMID', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#PAMID', 'title': 'Internal PaM identifier'},
    {'name':'PAM_No', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#PAM_No', 'title': 'PaM-No'},
    {'name':'Policy_Type_List', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Policy_Type_List', 'title': 'Policy Type List'},
    {'name':'Policy_interactions_explanation', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Policy_interactions_explanation', 'title': 'Policy interactions explanation'},
    {'name':'Primary_EU_policy_responsible_objectives', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Primary_EU_policy_responsible_objectives', 'title': 'Primary EU policy responsible for the implementation of the national policy or where national objectives are aimed directly at meeting EU objectives of'},
    {'name':'Projections_scenario_in_which_the_PAM_is_included', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Projections_scenario_in_which_the_PAM_is_included', 'title': 'Projections scenario in which the PAM is included'},
    {'name':'Reference_source_of_estimation', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Reference_source_of_estimation', 'title': 'Reference / source of estimation '},
    {'name':'Regional_entities', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Regional_entities', 'title': 'Regional entities'},
    {'name':'Research_institutions', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Research_institutions', 'title': 'Research institutions'},
    {'name':'Secondary_EU_policy_responsible_objectives', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Secondary_EU_policy_responsible_objectives', 'title': 'Other/secondary EU policy responsible for the implementation of the national policy or where national objectives are aimed directly at meeting EU objectives of:'},
    {'name':'Sector_List', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Sector_List', 'title': 'Sector List'},
    {'name':'Start_year_of_implementation', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Start_year_of_implementation', 'title': 'Start year of implementation'},
    {'name':'Status', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Status', 'title': 'Status'},
    {'name':'Tertiary_EU_policy_responsible_objectives', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Tertiary_EU_policy_responsible_objectives', 'title': 'Other/tertiary EU policy responsible for the implementation of the national policy or where national objectives are aimed directly at meeting EU objectives of:'},
    {'name':'Years_for_which_reduction_applies', 'field': 'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Years_for_which_reduction_applies', 'title': 'Year(s) for which reduction applies'},
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
