/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onSchedule} = require("firebase-functions/v2/scheduler");
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.sendEmail = onSchedule("every day 11:00", async (event) => {

    fetch("https://nexus-v1-88001ab41484.herokuapp.com/sendScheduledEmail/sendEmail")
    .then(
      (res) => res.json()
    )
    .then(
      (res) => {
        console.log(res);
        logger.log("Email sent successfully");
      }
    ).catch(err => {
        logger.log("Error in sending email");
    });    
  });
