import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "emmitt.schuppe@ethereal.email",
    pass: "SBqJBMmEBRQ81e9CFM",
  },
});

export const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) {
      return console.log(err);
    }
    console.log("Email sent: ", info);
  });
};
