let express = require('express');
let burgers = require('../models/burgers.js');

let router = express.Router();

router.get('/', (req, res) => {
  burgers.all('burgers', (data) => {
    let burger = {
      logo: "assets/images/burger_icon.png",
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

router.put('/:id', (req, res) =>{

  let cond = `id = ${req.params.id};`;
  let burgObj = {
    devoured: req.body.devoured
  };

  burgers.update('burgers', burgObj, cond, (data) =>{
    res.redirect('/');
  });
});

module.exports = router;
