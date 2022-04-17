const express = require("express");
const Flat = require("../modules/flats.module")

const router = express.Router()


router.post("", async (req, res) => {
    try {
        const flat = await Flat.create(req.body)
        return res.status(201).send(flat)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

router.get("", async (req, res) => {
    try {
        const flat = await Flat.find().lean().exec()
        return res.status(201).send(flat)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

module.exports = router