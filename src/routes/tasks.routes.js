const express = require("express");
const router = express.Router();

//Importamos los controllers

const { getTasks, createTask } = require("../controllers/tasks.controller");

//Definimos las rutas

router.get("/tasks", getTasks);
router.post("/tasks", createTask);
router.put("/tasks/:id");
router.delete("/tasks/:id");
router.get("/tasks/:id");

module.exports = router;
