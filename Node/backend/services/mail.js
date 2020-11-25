const nodemailer = require("nodemailer");

const send = async ({
  mail,
  subject = "Gracias por registrarte",
  message: html,
}) => {
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const info = {
      from: process.env.MAIL_USER,
      to: mail,
      subject,
      html,
    };
    const { messageId } = await transporter.sendMail(info);
    return messageId;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { send };
