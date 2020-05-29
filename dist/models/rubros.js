"use strict";

const {
  Schema,
  model
} = require("mongoose");

const RubrosSchema = new Schema({
  Foto: {
    type: String
  },
  SubRubro: {
    type: String,
    required: true
  }
});
module.exports = model("Rubros", RubrosSchema);