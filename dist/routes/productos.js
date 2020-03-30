"use strict";

const {
  Router
} = require("express");

const router = Router();

const Productos = require("../models/productos");

router.post("/new", async (req, res) => {
  const {
    nombre,
    usuario
  } = req.body;

  try {
    const newProd = new Productos({
      nombre,
      usuario
    });
    const newProducto = await newProd.save();
    res.status(201).json({
      _id: newProducto._id,
      nombre: newProducto.nombre
    });
  } catch (err) {
    res.status(400).json(err.message);
  }
});
router.get("/all", async (req, res) => {
  try {
    const data = await Productos.find({}, {
      __v: 0
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
});
module.exports = router;