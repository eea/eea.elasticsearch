/*
 * GET home page.
 */

exports.index = function(req, res) {
  var nconf = req.app.get('nconf')
  res.render('index', {
		base_path: nconf.get("http:base_path"),
                es_host: nconf.get("es:host"),
                es_path: nconf.get("es:path")
	     });
};
