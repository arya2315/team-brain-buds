// backend/models/Member.js
const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name:            { type: String, required: true },
  role:            { type: String, required: true },
  email:           { type: String, required: true },
  contact:         { type: String, required: true },
  degree:          String,
  certificates:    String,
  year:            String,
  about:           String,
  registerNumber:  String,
  image:           { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Member', memberSchema);
