const mongoose = require('mongoose');
const { Schema } = mongoose;

const fileSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    size: {
      type: String
    },
    creation_date: {
      type: String
    }
})

module.exports = mongoose.model('File', fileSchema);