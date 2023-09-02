const express = require("express");

const projectsRoutes = require("./routes/projects.routes");

const app = express();

app.use(projectsRoutes);

module.exports = app;
