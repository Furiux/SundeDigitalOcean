const { Schema, model } = require("mongoose");

const ClientesSchema = new Schema({
  Cuenta: {
    type: String,
    lowercase: true
  },
  RazonSocial: {
    type: String,
    required: true
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
  CondicionIVA: {
    type: String,
    lowercase: true
  },
  CUIT: {
    type: String,
    lowercase: true
  }
});

module.exports = model("Clientes", ClientesSchema);
