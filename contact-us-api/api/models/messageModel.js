const mongoose = require('mongoose');

const { Schema } = mongoose;
const MessageSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model('Message', MessageSchema);
