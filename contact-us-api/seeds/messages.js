const faker = require('faker');

const messages = [];

while (messages.length < 100) {
  messages.push({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    body: faker.lorem.sentence(),
    createdDate: Date.now(),
    updatedDate: Date.now(),
  });
}

module.exports = messages;
