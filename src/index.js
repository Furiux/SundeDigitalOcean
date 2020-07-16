require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

// settings
const app = express();
const database = require("./database");

// middelwares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const wwwPath = path.join(__dirname, "www");
app.use("/", express.static(wwwPath));
app.use("/perfil", express.static(wwwPath));
app.use("/dashboard", express.static(wwwPath));
app.use("/dashboard-clientes", express.static(wwwPath));
app.use("/dashboard-productos", express.static(wwwPath));
app.use("/dashboard-imagenes", express.static(wwwPath));
app.use("/dashboard-rubros", express.static(wwwPath));

app.use("/api/filesClientes", require("./routes/uploadClientes"));
app.use("/api/filesProductos", require("./routes/uploadProductos"));
app.use("/api/filesRubros", require("./routes/uploadRubros"));
app.use("/api/imagenes", require("./routes/uploadImgProductos"));
app.use("/api/compresion", require("./routes/imagenes"));
app.use("/api/clientes", require("./routes/clientes"));
app.use("/api/productos", require("./routes/productos"));
app.use("/api/rubros", require("./routes/rubros"));
app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/favoritos", require("./routes/favoritos"));

// start server
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log("Server on PORT", app.get("port"));
});
