const { Router } = require("express");
const path = require("path");
const fs = require('fs');
const multer = require("multer");

const imagemin = require("imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngquant = require("imagemin-pngquant");

const router = Router();

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./dist/images/"); // dist
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      path.extname(file.originalname) == ".jpg" ||
      path.extname(file.originalname) == ".png"
    ) {
      cb(null, true);
    } else {
      return cb(new Error("Permite solamente los formatos .jpg, .png"));
    }
  }
});

router.post("/importar", upload.array("file"), async (req, res) => {
  try {
    async function comprimir() {
      try {
        await imagemin(["./dist/images/*.{jpg,png}"], { //dist
          destination: "dist/build/images",
          plugins: [imageminMozjpeg(), imageminPngquant()]
        });
        
        //VER ACA - fs.unlink('./src/images');

        res.status(200).json("Las imagenes se comprimieron correctamente.");
      } catch (err) {
        res.status(400).json(err.message);
      }
    }
    comprimir();

  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
