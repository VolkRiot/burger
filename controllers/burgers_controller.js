let express = require('express');
let burgers = require('../models/burgers.js');

let router = express.Router();

router.get('/', (req, res) => {
  burgers.all('burgers', (data) => {
    let hhsObj = {
      burger: data
    };
    res.render('index', hhsObj);
  });
});

router.post('api/new', (req, res) => {
  let burg = {
    burger_name: req.body.burger_name,
    devoured: req.body.devoured,
    date: req.body.date
  };

  burgers.add('burgers', ['burger_name', 'devoured', 'date'], burg, () => {
    // let hhsObj = {
    //   burger: data
    // };
    res.redirect('/');
  });
});

router.put('api/update', (req, res) =>{
  // TODO: Build burger object
  // This functionality will prove problematic later
  burgers.update('burgers', burgObj, cond, cb);
});

module.exports = router;
