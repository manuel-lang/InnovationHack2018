/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: '#GetSocial',
    "data": [
      {"title" : "Canteen", "topic": "Machine Learning", "distance": "< 0.5 km", "time": "19:45", "imgsrc": "https://www.pets4homes.co.uk/images/articles/771/cat-lifespan-the-life-expectancy-of-cats-568e40723c336.jpg"},
      {"title" : "Short Break", "topic": "Ethical Hacking", "distance": "< 1 km", "time": "now", "imgsrc": "http://www.catster.com/wp-content/uploads/2017/08/Pixiebob-cat.jpg"},
      {"title" : "Meet similar minded people", "topic": "Reading - Goethe's Faust", "distance": "< 5 km", "time": "20:30", "imgsrc": "https://www.petmd.com/sites/default/files/petmd-cat-happy-13.jpg"}
    ]
  });
};
