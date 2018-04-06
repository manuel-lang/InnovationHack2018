const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  date: Date,
  location: String,
  comment: String,
  interests: [{
    type: String
  }]
}, { timestamps: true });

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;
