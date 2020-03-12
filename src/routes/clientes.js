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

module.exports = router;