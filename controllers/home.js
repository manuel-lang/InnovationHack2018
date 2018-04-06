const fs = require('fs');

/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  var data = JSON.parse(fs.readFileSync('./jsons/entrydata.json', 'utf8'));
  res.render('home', {
    title: '#GetSocial',
    data: data['data']
  });
};
