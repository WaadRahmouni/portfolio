const express = require("express");
const router = express.Router();
const educationController = require("../controllers/educationController");

// Public (lecture)
router.get("/", educationController.getEducations);
router.get("/:id", educationController.getEducationById);

// Admin (CRUD)
router.post("/", educationController.createEducation);
router.put("/:id", educationController.updateEducation);
router.delete("/:id", educationController.deleteEducation);

module.exports = router;
