const express = require('express'),
  router = express.Router(),
  restaQuery = require('../models/restaQuery');

router.get('/:id?', async (req, res) => {
  const { id } = req.params;
  let resta = [];

  if (!!id) {
    resta = await restaQuery.getById(id);
  } else {
    resta = await restaQuery.getAll();
  }

  res.render('template', {
    locals: {
      title: 'Restaurant Reviews',
      arrayOfData: resta
    },
    partials: {
      partial: 'partial-resta'
    }
  });
});

module.exports = router;
