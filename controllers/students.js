const Student = require("../models/students");

module.exports = {
  index: async (req, res) => {
    try {
      const student = await Student.find();
      if (student.length > 0) {
        res.status(200).json({
          status: true,
          data: student,
          method: req.method,
          url: req.url,
          message: "success",
        });
      } else {
        res.json({
          status: false,
          message: "Data is still empty, please fill the data",
        });
      }
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },

  show: async (req, res) => {
    try {
      const student = await Student.find({ id: req.params.id });
      res.status(202).json({
        status: true,
        data: student,
        method: req.method,
        url: req.url,
        message: "Data obtained successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false });
    }
  },

  store: async (req, res) => {
    try {
      console.log(req.body);
      const student = await Student.create(req.body);
      res.status(201).json({
        status: true,
        data: student,
        method: req.method,
        url: req.url,
        message: "Data successfully added",
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false });
    }
  },

  update: async (req, res) => {
    try {
      const student = await Student.updateOne({ id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
      });
      res.status(202).json({
        status: true,
        data: student,
        method: req.method,
        url: req.url,
        message: "Data successfully changed",
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false });
    }
  },

  delete: async (req, res) => {
    try {
      await Student.deleteOne({ id: req.params.id });
      res.json({
        status: true,
        method: req.method,
        url: req.url,
        message: "Data successfully deleted",
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false });
    }
  },
};

//サトのプログラッム
