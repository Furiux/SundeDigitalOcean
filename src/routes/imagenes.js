const { Router } = require("express");
const router = Router();
const path = require("path");

const imagemin = require('imagemin');
const imageminMozjpeg  = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');


router.post("/", async (req, res) => {
  try {
    async function comprimir() {
      try {
        await imagemin([path.resolve(__dirname,"./images/*.{jpg,jpeg,png}")], {
          destination: (path.resolve(__dirname,"./buid/images")),
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
