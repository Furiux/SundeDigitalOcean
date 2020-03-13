"use strict";

const {
  Router
} = require('express');

const cors = require('cors');

const router = Router();

const Clientes = require("../models/clientes");

router.get('/all', cors(), async (req, res) => {
  try {
    const data = await Clientes.find({}, {
      __v: 0
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
});
module.exports = router;