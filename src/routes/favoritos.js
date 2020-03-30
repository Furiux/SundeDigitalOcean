const { Router } = require('express');
const router = Router();

const Favoritos = require('../models/favoritos');

// Register Usuario
router.post('/new', async (req, res) => {

    const { usuario, producto } = req.body;

    try {

        // Preparo la insersecion
        const newFav = new Favoritos({ usuario, producto });
        
        // Inserto un nuevo usuario
        const newFavorito = await newFav.save();

        // return
        res.status(201).json({ _id: newFavorito._id, usuario: newFavorito.usuario, producto: newFavorito.producto });

    } catch (err) {
        res.status(400).json(err.message);
    }

});

router.get("/all", async (req, res) => {
    try {
      const data = await Favoritos.find({}, { __v: 0 });
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err.message);
    }
});

module.exports = router;