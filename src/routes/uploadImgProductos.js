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
    cb(null, "./dist/www/static/img/"); // dist
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
      path.extname(file.originalname) == ".jpeg" ||
      path.extname(file.originalname) == ".png"
    ) {
      cb(null, true);
    } else {
      return cb(new Error("Permite solamente los formatos .jpg, .jpeg .png"));
    }
  }
});

router.post("/importar", upload.array("file"), async (req, res) => {
  try {
    async function comprimir() {
      try {
        await imagemin(["./dist/www/static/img/*.{jpg,jpeg,png}"], { //dist
          destination: "dist/www/static/images/", //dist
          plugins: [imageminMozjpeg(), imageminPngquant()]
        });
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
