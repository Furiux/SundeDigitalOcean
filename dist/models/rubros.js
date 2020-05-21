"use strict";

const {
  Schema,
  model
} = require("mongoose");

const RubrosSchema = new Schema({
  Foto: {
    type: String,
    lowercase: true
  },
  SubRubro: {
    type: String,
    required: true,
    lowercase: true
  }
});
module.exports = model("Rubros", RubrosSchema);