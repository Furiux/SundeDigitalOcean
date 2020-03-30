"use strict";

const {
  Schema,
  model
} = require('mongoose');

const FavoritosSchema = new Schema({
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuarios'
  },
  producto: {
    type: Schema.Types.ObjectId,
    ref: 'Productos'
  },
  auditoria: {
    type: Date,
    required: true,
    default: Date.now
  }
});
module.exports = model('Favoritos', FavoritosSchema);