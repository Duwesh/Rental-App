const mongoose = require("mongoose");

const ResidentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    gender: {type: String, required: true},
    age: {type:Number, required: true},
    flat_id: {type: mongoose.Schema.Types.ObjectId, ref: "flat", required: true}
})

const Resident  = mongoose.model("ResidentData", ResidentSchema)
module.exports = Resident