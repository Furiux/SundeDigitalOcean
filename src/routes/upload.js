const { Router } = require('express');
const path = require('path');
const multer = require("multer");
//const XLSX = require('xlsx');

const router = Router();

//const Clientes = require("../models/clientes");

let storage = multer.diskStorage({
   destination:(req, file, cb) => {
      cb(null, './src/files/')
   },
   filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
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

   var filePath = path.resolve(__dirname, req.file.fieldname);

   return filePath;

   /*
   try {

      var workbook = XLSX.readFile(filePath);
      var sheet_name_list = workbook.SheetNames;

      const jsonString = JSON.stringify(
            XLSX.utils.sheet_to_json(
               workbook.Sheets[sheet_name_list[0]]
            )
      )

      const meetings = JSON.parse(jsonString);

      async function loadMeetings() {
         try {
            await Clientes.insertMany(meetings);
            res.status(200).json("Los datos se incorporaron correctamente");
            process.exit();
         } catch(err) {
            res.status(400).json(err.message);
            process.exit();
         }
      };

      loadMeetings();

   } catch (err) {
      res.status(500).json({ message: err.message });
   }
   */

});

module.exports = router;
