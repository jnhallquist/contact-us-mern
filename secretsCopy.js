const secrets = {
  sgKey: 'YOUR_SENDGRID_API_KEY',
};

module.exports = key => secrets[key];
