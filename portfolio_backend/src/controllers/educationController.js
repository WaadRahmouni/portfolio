const Education = require("../models/Education");

// ➕ CREATE
exports.createEducation = async (req, res) => {
  try {
    const education = await Education.create(req.body);
    res.status(201).json(education);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// 📄 READ ALL
exports.getEducations = async (req, res) => {
  try {
    const educations = await Education.find().sort({ year: -1 });
    res.json(educations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 📄 READ ONE
exports.getEducationById = async (req, res) => {
  const education = await Education.findById(req.params.id);
  if (!education) {
    return res.status(404).json({ message: "Formation non trouvée" });
  }
  res.json(education);
};

// ✏️ UPDATE
exports.updateEducation = async (req, res) => {
  const education = await Education.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(education);
};

exports.deleteEducation = async (req, res) => {
  await Education.findByIdAndDelete(req.params.id);
  res.json({ message: "Formation supprimée" });
};
