**1.** npm init - y -->comando de node.js que nos permite crear un documento package.json, donde vamos a poder listar sentencia y algunos scripst.

```
{
  "name": "proyect_express_sequelize_postgres",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

**2.** Instalar modulos o dependencias de produccion.

- npm install express --save
- npm install morgan --save
- npm install --save sequelize
- npm install --save pg pg-hstore
- npm install bcrypt
- npm install nodemon
- npm install dotenv --save

**3.** Creamos el documento .env de variables de entorno dentro de la carpeta raiz.

**4.** Creamos el .gitignore, para no subir al repositorio remoto node_models y package-lock.json

**5.** Creamos una carpeta src y dentro index.js y app.js --> donde el index.js sera el encargado de arrancar la aplicacion y app.js tendra la configuracion de express

index.js

```
const server = require("../src/app");
require("dotenv").config();
const port = process.env.PORT;
server.listen(port, () => {
  console.log(`use port ${port}`);
});
```

app.js

```
const express = require("express");
const app = express();
module.exports = app;
```

viendo la terminal -->

```
[nodemon] restarting due to changes...
[nodemon] starting `node src/index.js`
use port 3000
```

**6**. Creamos una carpeta llamada database -->realizaremos la conseccion de sequelize.

**7.** Creamos una carpeta llamada routes --> donde guardaremos nuestras rutas del servidor. Es decir url que nuestros clientes van a poder pedir ejemplo un /products /categories en este caso vamos a crear dos rutas un /proyect y /ask.

**8.** Creamos una carpeta que se llama controllers --> que van a ser las fucniones que se guardaran en las rutas.

**9.** Creamos la carpeta models --> En esta carpeta van a quedar los datos que iremos guardando en nuestra base de datos. Es decir vamos a definir las tablas que se van a crear en la base de datos.

![alt text](./assets/img/imagen1.PNG)

**10.** Creamos un documento dentro de database con el mismo nombre database.js

```
const Sequelize = require("sequelize");

const sequelize = new Sequelize("proyectDB", "postgres", "Esteban2212", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
```

**11.** Nos dirigimos al index.js e importamos sequelize

```
const server = require("../src/app");

require("dotenv").config();
const sequelize = require("../src/database/database");
const port = process.env.PORT;

const main = async () => {
  try {
    await sequelize.authenticate();
    server.listen(port, () => {
      console.log(`use port ${port}`);
    });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

main();
```

Respuesta -->

```
[nodemon] starting `node src/index.js`
[nodemon] clean exit - waiting for changes before restart
[nodemon] restarting due to changes...
[nodemon] starting `node src/index.js`
Executing (default): SELECT 1+1 AS result
Connection has been established successfully.
use port 3000
```
