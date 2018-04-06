/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: '#GetSocial',
    data: {
      'title': 'b',
      'title': 'd' 
    }
  });
};
