const mongoose = require("mongoose");

const FlatSchema = new mongoose.Schema({
    id: {
        type: Number, required: true
    },
    type:{type: String, required: true},
    block: {type: String, required: true},
    num: {type:String, required: true}
},{
    versionKey: false,
    timestamps: true
})

const Flat = mongoose.model("FlatData", FlatSchema);

module.exports = Flat