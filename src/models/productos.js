const { Schema, model } = require('mongoose');

const ProductosSchema = new Schema({
    Foto: {
        type: String
    },
    Codigo: {
        type: String
    },
    Producto: {
        type: String
    },
    Detalle: {
        type: String
    },
    Precio: {
        type: String
    },
    Rubro: {
        type: String
    },
    SubRubro: {
        type: String
    }
});

module.exports = model('Productos', ProductosSchema);