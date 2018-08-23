const sgMail = require('@sendgrid/mail');
const getSecret = require('./../../secrets');

sgMail.setApiKey(getSecret('sgKey'));

module.exports = (data) => {
  const emailDetails = {
    to: data.email,
    from: 'jnhallquist.dev@gmail.com',
    subject: 'Message Received!',
    text: `Hello ${data.firstName} ${data.lastName}! Thank you for contacting us. We will respond to your message ASAP!`,
  };

  sgMail.send(emailDetails);
};
