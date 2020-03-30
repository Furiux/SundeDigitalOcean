"use strict";

const {
  Schema,
  model
} = require("mongoose");

const ClientesSchema = new Schema({
  Cta: {
    type: String,
    lowercase: true
  },
  RazonSocial: {
    type: String,
    required: true,
    lowercase: true
  },
  Domicilio: {
    type: String,
    lowercase: true
  },
  CodigoPostal: {
    type: String,
    lowercase: true
  },
  Localidad: {
    type: String,
    lowercase: true
  },
  Provincia: {
    type: String,
    lowercase: true
  },
  Telefono: {
    type: String,
    lowercase: true
  },
  CUIT: {
    type: String,
    lowercase: true
  },
  IIBB: {
    type: String,
    lowercase: true
  }
});
module.exports = model("Clientes", ClientesSchema);