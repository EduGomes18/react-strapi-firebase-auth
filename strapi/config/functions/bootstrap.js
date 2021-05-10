"use strict";

const admin = require("firebase-admin");
const serviceAccount = require("../teste-login.json");

module.exports = () => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://teste-login-d9f36-default-rtdb.firebaseio.com/",
  });
  strapi.firebase = admin;
};
