### Introduction
This is a sample MERN stack application.

Users may submit the Contact Us form and receive a confirmation email upon successful submission.
Users may also view the Message History table and use the provided sorting/filtering options.

### Dependencies
* MongoDB
* Node >= 10.0.0

### Setup
1. Clone repo
2. `cd` into cloned repo
3. Install packages in root, api, and client directories using following commands:
    * `npm install`
    * `npm run post:install`
4. Sendgrid setup
    * Create a free [Sendgrid](https://sendgrid.com/) account
    * Generate an API key
    * Copy-paste your key into `secretsCopy.js` and rename file to `secrets.js`
5. Make sure MongoDb service is running
6. `npm run db:seed` (optional)
7. `npm run start:dev`
