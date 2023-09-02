const Project = require("../models/Project");
/*con la importacion de este modelo ya se puede ejecutar consultas
de crear datos
*/

// Ver datos
const getProjects = async (req, res) => {
  try {
    // throw new Error("error get");
    const projects = await Project.findAll();
    //El findALL de todas las filas las recorre y forma un arreglo.

    console.log(projects);

    res.json(projects);
    /* en el res.json, dice que va a enviar un json y vas a mostrar este
        arreglo de proyectos. */
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Crear Datos
const createProject = async (req, res) => {
  try {
    console.log(req.body);
    const { name, priority, description } = req.body;
    const newProject = await Project.create({
      name: name,
      priority: priority,
      description: description,
    });
    console.log(newProject);
    res.json(newProject);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.getProjects = getProjects;
module.exports.createProject = createProject;
