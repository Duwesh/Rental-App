const { Router } = require("express");
const express = require("express");
const Resident = require("../models/resident.module");
const router = express.Router();

//Get request for resident
router.get("", async (req, res) => {
  try {
    const flat = await Resident.find().populate("flat_id").lean().exec();
    return res.status(201).send(flat);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

//Post request for Resident
router.post("", async (req, res) => {
  try {
    const resident = await Resident.create(req.body);
    return res.status(201).send(resident);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = router;
