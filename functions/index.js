const { onSchedule } = require("firebase-functions/v2/scheduler");
const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Scheduled function 1 - runs at 11:00 every day
exports.sendEmailAt11 = onSchedule("every day 11:00", async (event) => {
  fetch(
    "https://nexus-v1-88001ab41484.herokuapp.com/sendScheduledEmail/sendEmail"
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      logger.log("Email sent successfully at 11:00 AM");
    })
    .catch((err) => {
      logger.log("Error in sending email at 11:00 AM", err);
    });
});

exports.sendEmailGSTR1 = onSchedule("0 4 1 * *", async (event) => {
  fetch("https://nexus-v1-88001ab41484.herokuapp.com/api/sendScheduledEmail/sendEmailfortesting_gstr01")
    .then((res) => res.json())
    .then((res) => {
      console.log("Email sent successfully at 6:10 PM:", res);
      logger.log("Email sent successfully at 6:10 PM");
    })
    .catch((err) => {
      console.error("Error in sending email at 6:10 PM:", err);
      logger.log("Error in sending email at 6:10 PM", err);
    });
});

exports.sendEmailGSTR3B = onSchedule("0 4 1 * *", async (event) => {
  fetch("https://nexus-v1-88001ab41484.herokuapp.com/api/sendScheduledEmail/sendEmailfortesting_gstr3b")
    .then((res) => res.json())
    .then((res) => {
      console.log("Email sent successfully at 6:10 PM:", res);
      logger.log("Email sent successfully at 6:10 PM");
    })
    .catch((err) => {
      console.error("Error in sending email at 6:10 PM:", err);
      logger.log("Error in sending email at 6:10 PM", err);
    });
});

exports.sendEmailCMP08 = onSchedule("0 4 1 * *", async (event) => {
  fetch("https://nexus-v1-88001ab41484.herokuapp.com/api/sendScheduledEmail/sendEmailfortesting_CMP08")
    .then((res) => res.json())
    .then((res) => {
      console.log("Email sent successfully at 6:10 PM:", res);
      logger.log("Email sent successfully at 6:10 PM");
    })
    .catch((err) => {
      console.error("Error in sending email at 6:10 PM:", err);
      logger.log("Error in sending email at 6:10 PM", err);
    });
});


exports.sendEmailtds = onSchedule("0 4 1 * *", async (event) => {
  fetch("https://nexus-v1-88001ab41484.herokuapp.com/api/sendScheduledEmail/sendEmailfortesting_tds")
    .then((res) => res.json())
    .then((res) => {
      console.log("Email sent successfully at 6:10 PM:", res);
      logger.log("Email sent successfully at 6:10 PM");
    })
    .catch((err) => {
      console.error("Error in sending email at 6:10 PM:", err);
      logger.log("Error in sending email at 6:10 PM", err);
    });
});

// Scheduled function 2 - runs at 06:00 every day
// exports.sendEmailAt6 = onSchedule("0 11 * * *", async (event) => {
//   // 10:50 AM UTC is 4:20 PM IST
//   fetch("https://nexus-v1-88001ab41484.herokuapp.com/api/department/delete/662b373e844770cf3f88a18a/65c77dee23bf7e8a98e68a17")
//     .then((res) => res.json())
//     .then((res) => {
//       console.log(res);
//       logger.log("Request sent successfully at 04:20 PM IST");
//     })
//     .catch((err) => {
//       logger.log("Error in sending request at 04:20 PM IST", err);
//     });
// });


// HTTP function to test the email sending logic manually
// exports.testSendEmail = onRequest(async (req, res) => {
//   console.log("Xumaise");
  
//   fetch("http://localhost:4500/api/sendScheduledEmail/sendEmailfortesting", {
//       method: "POST", // Specify the POST method
//       headers: {
//           "Content-Type": "application/json", // Set appropriate headers
//       },
//       body: JSON.stringify({ key: "value" }) // Optional: send any data in the request body
//   })
//   .then((res) => res.json())
//   .then((data) => {
//       console.log(data);
//       res.send("Email function executed successfully.");
//       logger.log("Email sent successfully via manual POST trigger");
//   })
//   .catch((err) => {
//       logger.log("Error in sending email via manual POST trigger", err);
//       res.status(500).send("Error in sending email.");
//   });
// });


// exports.testSendEmail = onRequest(async (req, res) => {
//   fetch("http://localhost:4500/api/sendScheduledEmail/sendEmailfortesting", {
//       method: "GET", // Specify the POST method
//       // headers: {
//       //     "Content-Type": "application/json", // Set appropriate headers
//       // },
//       // body: JSON.stringify({ key: "value" }) // Optional: send any data in the request body
//   })
//   .then((res) => res.json())
//   .then((data) => {
//       console.log(data);
//       res.send("Done");
//       logger.log("Done");
//   })
//   .catch((err) => {
//       logger.log("Error", err);
//       res.status(500).send("Error in sending email.");
//   });
// });