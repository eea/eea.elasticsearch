if(window.EEA === undefined){
  var EEA = {
    who: 'eea.elasticsearch',
    version: '1.0'
  };
}

EEA.Elasticsearch = function(context, options){
 var self = this;
  self.context = context;

  self.settings = {
  };

  if(options){
    jQuery.extend(self.settings, options);
  }

  self.initialize();
};

EEA.Elasticsearch.prototype = {
  initialize: function(){
    var self = this;
  }
};


jQuery.fn.EEAElasticsearch = function(options){
  return this.each(function(){
    var context = jQuery(this);
    var adapter = new EEA.Elasticsearch(context, options);
    context.data('EEAElasticsearch', adapter);
  });
};

jQuery(document).ready(function(){

  var items = jQuery(".eea-elasticsearch");
  if(!items.length){
    return;
  }

  var settings = {};
  items.EEAElasticsearch(settings);

});
