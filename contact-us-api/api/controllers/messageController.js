const mongoose = require('mongoose');
const sendEmailConfirmation = require('../sendEmail');

const Message = mongoose.model('Message');

const ERR_MSG = 'Woops! Something went wrong';

exports.get_all_messages = (req, res) => {
  Message.find({}, (err, messages) => {
    if (err) res.send(ERR_MSG);
    res.json(messages);
  });
};

exports.create_message = (req, res) => {
  const newMessage = new Message(req.body);
  newMessage.save((err, message) => {
    if (err) {
      res.send(ERR_MSG);
    } else {
      sendEmailConfirmation(message);
      res.json(message);
    }
  });
};
