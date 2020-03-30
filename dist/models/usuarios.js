"use strict";

const {
  Schema,
  model
} = require('mongoose');

const bcrypt = require('bcryptjs');

const UsuariosSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    lowercase: true
  },
  correo: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  clave: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    lowercase: true
  },
  rol: {
    type: String,
    lowercase: true
  },
  auditoria: {
    type: Date,
    required: true,
    default: Date.now
  }
});

UsuariosSchema.methods.encryptPass = async clave => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(clave, salt);
};

module.exports = model('Usuarios', UsuariosSchema);