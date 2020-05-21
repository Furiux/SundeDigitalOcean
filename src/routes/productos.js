const { Router } = require("express");
const router = Router();

const Productos = require("../models/productos");

router.post("/new", async (req, res) => {
  const { nombre, usuario } = req.body;
  try {
    const newProd = new Productos({ nombre, usuario });
    const newProducto = await newProd.save();
    res.status(201).json({ _id: newProducto._id, nombre: newProducto.nombre });
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.get("/all", async (req, res) => {
  try {
    const data = await Productos.find({}, { __v: 0 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get("/find/:data", async (req, res) => {
  
  let busqueda = req.params.data;

    try {
      
      const data = await Productos.aggregate([
        {$match: { Producto: { $regex: busqueda.toLowerCase() } }},
        {$group: { _id: { Producto: "$Producto", Foto: "$Foto"} }},
      ]);

      if(data.length === 0){
        const rubro = await Productos.aggregate([
          {$match: { SubRubro: { $regex: busqueda.toLowerCase() } }},
          {$group: { _id: { Producto: "$Producto", Foto: "$Foto", SubRubro: "$SubRubro" } }},
        ]);
        res.status(200).json(rubro);
      }else{
        res.status(200).json(data);
      }

    } catch (err) {
      res.status(500).json(err.message);
    }

});

router.get("/subrubro", async (req, res) => {
  try {
    const data = await Productos.aggregate([
      {$group: { _id: { SubRubro: "$SubRubro" } }},
    ])
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get("/producto/:data", async (req, res) => {
  let busqueda = req.params.data;
  try {
    
    // Si viene por el buscador
    const data = await Productos.aggregate([
      {$match: { Producto: { $regex: busqueda.toLowerCase() } }},
      {$group: { _id: { Producto: "$Producto", Foto: "$Foto"} }},
    ]);
    
    if(data.length === 0){
      // Si viene con un subrubro seleccionado
      const rubro = await Productos.aggregate([
        {$match: { SubRubro: { $regex: busqueda.toLowerCase() } }},
        {$group: { _id: { Producto: "$Producto", Foto: "$Foto", SubRubro: "$SubRubro" } }},
      ]);
      res.status(200).json(rubro);
    }else{
      res.status(200).json(data);
    }

  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get("/global/:data", async (req, res) => {
  let busqueda = req.params.data;
  try {
    const data = await Productos.aggregate([
      {$match: { Producto: busqueda.toLowerCase() } },
      {$group: { _id: { Producto: "$Producto", Foto: "$Foto", Rubro: "$Rubro", SubRubro: "$SubRubro" } }},
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get("/detalle/:data", async (req, res) => {
  let busqueda = req.params.data;
  try {
    const data = await Productos.find({ Producto: busqueda.toLowerCase() });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
