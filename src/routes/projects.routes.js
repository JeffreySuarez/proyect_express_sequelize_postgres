const Router = require("express");

const router = Router();

//definimos las rutas

router.get("/projects"); //obtener
router.post("/projects"); //crear
router.put("/projects/:id"); //actualizar un solo proyecto
router.delete("/projects/:id"); //eliminar un solo proyecto
router.get("/projects/:id"); // obtener un solo proyecto

module.exports = router;
