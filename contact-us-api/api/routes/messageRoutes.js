module.exports = (app) => {
  const messageController = require('../controllers/messageController');

  app.route('/messages')
    .get(messageController.get_all_messages)
    .post(messageController.create_message);
};
