let express = require('express');
let burgers = require('../models/burgers.js');

let router = express.Router();

router.get('/', (req, res) => {
  burgers.all('burgers', (data) => {
    let burger = {
      burger: data
    };
    res.render('index', burger);
  });
});

router.post('/api/new', (req, res) => {
  let burg = {
    burger_name: req.body.burger_name,
    devoured: req.body.devoured,
    date: new Date()
  };

  burgers.add('burgers', ['burger_name', 'devoured', 'date'], burg, (data) => {
    res.redirect('/');
  });
});

router.put('api/update', (req, res) =>{
  // TODO: Build burger object
  // This functionality will prove problematic later
  burgers.update('burgers', burgObj, cond, cb);
});

module.exports = router;
