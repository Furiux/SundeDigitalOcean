"use strict";

const {
  Schema,
  model
} = require('mongoose');

const ProductosSchema = new Schema({
  Indice: {
    type: String,
    lowercase: true
  },
  Orden: {
    type: String,
    lowercase: true
  },
  Foto: {
    type: String,
    lowercase: true
  },
  Codigo: {
    type: String,
    lowercase: true
  },
  Producto: {
    type: String,
    lowercase: true
  },
  Detalle: {
    type: String,
    lowercase: true
  },
  Oferta: {
    type: String,
    lowercase: true
  },
  Rubro: {
    type: String,
    lowercase: true
  },
  SubRubro: {
    type: String,
    lowercase: true
  }
});
module.exports = model('Productos', ProductosSchema);