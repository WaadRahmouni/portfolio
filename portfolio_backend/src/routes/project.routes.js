const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");

const {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject
} = require("../controllers/project.controller");

// PUBLIC
router.get("/", getProjects);
router.get("/:id", getProjectById);
const upload = require("../middleware/upload");

router.post(
  "/",
  authMiddleware,
  upload.single("projectPhoto"),
  createProject
);
// PROTÉGÉ (JWT)
router.post("/", authMiddleware, createProject);
router.put("/:id", authMiddleware, updateProject);
router.delete("/:id", authMiddleware, deleteProject);

module.exports = router;
