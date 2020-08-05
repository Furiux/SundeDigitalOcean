"use strict";

const {
  Router
} = require("express");

const router = Router();

const Rubros = require("../models/rubros");

router.get("/all", async (req, res) => {
  try {
    const data = await Rubros.find({}, {
      __v: 0
    }).sort({
      SubRubro: 'asc'
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
});
module.exports = router;