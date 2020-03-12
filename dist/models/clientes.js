"use strict";

const {
  Schema,
  model
} = require("mongoose");

const ClientesSchema = new Schema({
  Cta: {
    type: String
  },
  RazonSocial: {
    type: String,
    required: true
  },
  Domicilio: {
    type: String
  },
  CodigoPostal: {
    type: String
  },
  Localidad: {
    type: String
  },
  Provincia: {
    type: String
  },
  Telefono: {
    type: String
  },
  CUIT: {
    type: String
  },
  IIBB: {
    type: String
  }
});
module.exports = model("Clientes", ClientesSchema);