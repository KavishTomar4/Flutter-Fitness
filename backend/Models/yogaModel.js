let mongoose = require('mongoose');

let schema = new mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("servers", schema);