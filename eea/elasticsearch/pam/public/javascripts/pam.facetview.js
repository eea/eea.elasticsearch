jQuery(document).ready(function($) {
    $('.facet-view-simple').facetview({
        search_url: 'http://centaurus.eea.europa.eu/elasticsearch/rdfdata/_search?',
        search_index: 'elasticsearch',
        facets: [
                        {'field':'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Country_with_EU', 'display': 'Country'},
            {'field':'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Sector_List', 'display': 'Sector'},
            {'field':'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Policy_Type_List', 'display': 'Policy Type'},
            {'field':'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#GHG_affected', 'display': 'GHG Affected'},
            {'field':'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Status', 'display': 'Status'},
            {'field':'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Projections_scenario_in_which_the_PAM_is_included', 'display': 'Scenario'}
        ],

        result_display: [
            [
                {
                    'field': "http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Country",
                },
                {
                    'field': "http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Sector",
                },
                {
                    'field': "http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Projections_scenario_in_which_the_PAM_is_included",
                },
                {
                    'field': "http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Name_of_PAM",
                },
                {
                    'field':'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#Policy_Type_List'
                },
                {
                    'field':'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#GHG_affected'
                },
                {
                    'pre': '<a href="/details?pamid=',
                    'field':'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#PAMID',
                    'post': '">Details</a>',
                },
            ],
        ],

        paging: {
            from: 0,
            size: 10
        },
/*        predefined_filters: {
            'pamid': {'term':{'http://semantic.eea.europa.eu/home/szabozo0/pam1.csv#PAMID':'tra'}}
        }*/
    });
});
