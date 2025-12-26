const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    projectName: { type: String, required: true },
    projectPhoto: { type: String, required: true },
    description: { type: String, required: true },
    github: { type: String, default: "" },
    website: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
