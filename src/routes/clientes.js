const { Router } = require('express');

const router = Router();

const Clientes = require("../models/clientes");

router.get('/all', async (req, res) => {
    
    try {

        const data = await Clientes.find({}, {__v: 0});
        res.status(200).json(data);

    } catch (err) {
        res.status(500).json(err.message);
    }

});

router.get('/find:find', async (req, res) => {

    let find = req.params.find;

    console.log(find)

    try {

        const clienteResultado = await Clientes.findOne({ $or: [{RazonSocial:find}, {Domicilio: find}] }, { __v:0 });
        res.status(200).json(clienteResultado);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }

});


module.exports = router;