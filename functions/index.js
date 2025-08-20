const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// 🔐 Gmail credentials (use environment variables or hardcoded for testing only)
const gmailEmail = "ehlewafa0@gmail.com";
const gmailPassword = "osgd fzcd ntzg yyyf"; // Not your normal password — use Gmail App Passwords!

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.sendContactEmail = functions.firestore
  .document("contacts/{docId}")
  .onCreate((snap, context) => {
    const data = snap.data();

    const mailOptions = {
      from: gmailEmail,
      to: gmailEmail, // Send to yourself
      subject: "New Contact Form Submission",
      html: `
        <h2>📩 New Message</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong><br/>${data.message}</p>
        <p><em>Sent on: ${new Date(data.timestamp).toLocaleString()}</em></p>
      `,
    };

    return transporter.sendMail(mailOptions)
      .then(() => console.log("📧 Email sent successfully"))
      .catch(error => console.error("❌ Email sending error:", error));
  });
