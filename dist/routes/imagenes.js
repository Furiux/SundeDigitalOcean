"use strict";

const {
  Router
} = require("express");

const router = Router();

const path = require("path");

const imagemin = require('imagemin');

const imageminMozjpeg = require('imagemin-mozjpeg');

const imageminPngquant = require('imagemin-pngquant');

router.post("/compresion", async (req, res) => {
  try {
    (async () => {
      const files = await imagemin(['images/*.{jpg,png}'], {
        destination: 'build/images',
        plugins: [imageminMozjpeg(), imageminPngquant()]
      });
      console.log(files); //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
    })();

    res.status(200).json("OK");
  } catch (err) {
    res.status(500).json(err.message);
  }
});
module.exports = router;