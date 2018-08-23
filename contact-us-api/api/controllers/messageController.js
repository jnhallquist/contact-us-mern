const mongoose = require('mongoose');
const sendEmailConfirmation = require('../sendEmail');

const Message = mongoose.model('Message');

exports.get_all_messages = (req, res) => {
  Message.find({}, (err, messages) => {
    if (err) res.send(err);
    res.json(messages);
  });
};

exports.create_message = (req, res) => {
  const newMessage = new Message(req.body);
  newMessage.save((err, message) => {
    if (err) {
      res.send(err);
    } else {
      sendEmailConfirmation(message);
      res.json(message);
    }
  });
};
