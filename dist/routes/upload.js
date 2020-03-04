"use strict";

const {
  Router
} = require('express');

const path = require('path');

const multer = require("multer");

const XLSX = require('xlsx');

const router = Router();

const Clientes = require("../models/clientes");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './src/files/');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (path.extname(file.originalname) == ".xlsx" || path.extname(file.originalname) == ".xls" || path.extname(file.originalname) == ".csv") {
      cb(null, true);
    } else {
      return cb(new Error('Permite solamente los formatos .xls, .csv y .xlsx'));
    }
  }
});
router.post('/upload', upload.single('file'), async (req, res) => {
  //const urlFiles = ('../files/'+req.file.filename);
  var filePath = path.resolve(__dirname, '../files/' + req.file.filename);
  var workbook = XLSX.readFile(filePath);
  var sheet_name_list = workbook.SheetNames;
  const jsonString = JSON.stringify(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]));
  const meetings = JSON.parse(jsonString);

  async function loadMeetings() {
    try {
      await Clientes.insertMany(meetings);
      res.status(200).json("Los datos se incorporaron correctamente");
    } catch (err) {
      res.status(400).json(err.message);
    }
  }

  ;
  loadMeetings();
});
module.exports = router;