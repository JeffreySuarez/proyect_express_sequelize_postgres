const Task = require("../models/Task");

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const { name, done, projectID } = req.body;

    const newTask = await Task.create({
      name: name,
      done: done,
      projectID: projectID,
      /*
      con projectID es para relacionar a que id vamos a asignar esta
      tarea en particular.
      */
    });
    res.json(newTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.getTasks = getTasks;
module.exports.createTask = createTask;
