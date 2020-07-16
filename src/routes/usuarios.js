require('dotenv').config();

const { Router } = require('express');
const router = Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const _ = require('underscore');

const Usuarios = require('../models/usuarios');

// Todos los usuarios
router.get("/all", async (req, res) => {
    try {
        const data = await Usuarios.find({}, { __v: 0 });
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

// Login Usuario
router.post('/login', async (req, res) => {

    const { correo, clave } = req.body;
    const user = new Usuarios({ correo, clave });

    try {

        // verify correo
        const usuario = await Usuarios.findOne( {correo: user.correo}, {auditoria:0} );
        if (!usuario) return res.status(200).json('La cuenta ingresada no esta registrada en nuestro sistema.');

        // verify status
        if (usuario.estado === 'solicitud') return res.status(200).send('La cuenta no fue aprobada, intente mas tarde.');

        // verify clave
        bcrypt.compare(user.clave, usuario.clave, (err, isMatch) => {
            if (!isMatch) {
                // return
                return res.status(200).send('La contraseña ingresada es incorrecta');
            } else {
                // token
                const token = jwt.sign({_id: user._id}, process.env.SECRET_TOKEN || 'tokentest');
                // return
                res.status(201).header('auth-token', token).json({ _id: usuario._id, nombre: usuario.nombre, estado: usuario.estado });
            }
        })

    } catch (err) {
        res.status(400).json(err.message);
    }

});

// Register Usuario
router.post('/register', async (req, res) => {

    const { nombre, comercio, direccion, ciudad, telefono, provincia, radio1, radio2, correo, clave, estado, rol } = req.body;

    try {

        // verify correo
        const usuario = await Usuarios.findOne( {correo: correo}, {auditoria:0} );
        if (usuario) return res.status(200).json('El correo ingresado ya existe en nuestra base de datos.');


        // Preparo la insersecion
        const newUser = new Usuarios({ nombre, comercio, direccion, ciudad, telefono, provincia, radio1, radio2, correo, clave, estado, rol });

        // Encripto la clave
        newUser.clave = await newUser.encryptPass(newUser.clave);

        // Inserto un nuevo usuario
        const newUsuario = await newUser.save();

        // token
        const token = jwt.sign({_id: newUsuario._id}, process.env.SECRET_TOKEN || 'tokentest');

        // return
        res.status(201).header('auth-token', token).json({ _id: newUser._id, nombre: newUser.nombre, correo: newUser.correo, estado: newUser.estado, rol: newUser.rol });

    } catch (err) {
        res.status(400).json(err.message);
    }

});

// Listar Perfil
router.post('/me:id', async (req, res) => {

    let id = req.params.id;

});

// Actualizar Datos
router.patch('/:id', async (req, res) => {

    let id = req.params.id;
    const body = _.pick(req.body,['nombre', 'correo', 'rol', 'estado']);
    
    await Usuarios.findByIdAndUpdate(id, body, {new: true, runValidators: true }, (err, colaboradorDB) => {

        if (err) {
            return res.status(500).json(err.message);
        }

        return res.status(201).json(colaboradorDB);

    });

});

// Actualizar Password
router.patch('/change/:id', async (req, res) => {

    let id = req.params.id;
    const body = _.pick(req.body,['clave']);

    // Encripto la clave
    const salt = await bcrypt.genSalt(10);
    body.clave = await bcrypt.hash(body.clave, salt);

    await Usuarios.findByIdAndUpdate(id, body, {new: true, runValidators: true }, (err, colaboradorDB) => {

        if (err) {
            return res.status(500).json(err.message);
        }

        return res.status(201).json(colaboradorDB);

    });

});

// Recuperar Password
router.patch('/recupero/:correo', async (req, res) => {

    let correo = req.params.correo;
    const body = _.pick(req.body,['clave']);

    const nobcrypt = body.clave; 

    // Encripto la clave
    const salt = await bcrypt.genSalt(10);
    body.clave = await bcrypt.hash(body.clave, salt);

    await Usuarios.updateOne({correo: correo}, {$set: { clave: body.clave }});

    /*
    var from_email = new helper.Email('soporte@furiux.com');
    var to_email = new helper.Email(correo);
    var subject = 'Recuperación de Contraseña Furiux';
    var content = new helper.Content('text/plain', 'Su nueva contraseña es: '+nobcrypt+'');
    var mail = new helper.Mail(from_email, subject, to_email, content);

    var request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON(),
    });

    sg.API(request, function(error, response) {
        
        if (error) {
            return res.status(400).json("No fue posible enviar la contraseña, por favor intentelo más tarde.");
        }

        console.log(response.statusCode);
        console.log(response.body);
        console.log(response.headers);

        return res.status(200).json("La contraseña fue enviada correctamente al correo electrónico ingresado");
    });*/

    return res.status(200).json("La contraseña fue enviada correctamente al correo electrónico ingresado");

});

module.exports = router;