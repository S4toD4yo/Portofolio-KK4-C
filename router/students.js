const express = require("express");
const router = express.Router();

const studentController = require("../controllers/students");

router.get("/Students", studentController.index);

router.get("/Students/:id", studentController.show);

router.post("/Students", studentController.store);

router.put("/Students/:id", studentController.update);

router.delete("/Students/:id", studentController.delete);

module.exports = router;

//サトのプログラッム