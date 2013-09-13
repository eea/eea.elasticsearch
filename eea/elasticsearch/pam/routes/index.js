
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'PAM' });
};

exports.details = function(req, res){
  if (req.query.pamid === undefined){
      res.send('pamid is missing');
      return;
  }
  // get the data for pam
  res.render('details', {pamid: req.query.pamid});
}