const Project = require("../models/Project");

// ➕ CREATE
exports.createProject = async (req, res) => {
  try {
    const project = await Project.create({
      projectName: req.body.projectName,
      description: req.body.description,
      github: req.body.github,
      website: req.body.website,
      projectPhoto: `/uploads/projects/${req.file.filename}`
    });

    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


// 📄 READ ALL
exports.getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

// 📄 READ ONE
exports.getProjectById = async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    return res.status(404).json({ message: "Projet non trouvé" });
  }
  res.json(project);
};

// ✏️ UPDATE
exports.updateProject = async (req, res) => {
  const project = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(project);
};

// ❌ DELETE
exports.deleteProject = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Projet supprimé" });
};
