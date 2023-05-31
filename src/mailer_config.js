const nodemailer = require("nodemailer");
const { PENDING_WISHES } = require("./constants");

require("dotenv").config();

const TRANSPORTER = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

/**
 * Returns a Message header for the mail
 * 
 */
const createMessageHeader = (subject = "Pending Wishes!") => ({
  from: 'do_not_reply@northpole.com',
  to: 'santa@northpole.com',
  subject,
});

/**
 * Returns a Message text for the mail
 * 
 */
const createMessageText = () => {
  const strWishes = PENDING_WISHES.map(wish => Object.keys(wish).map(key => ` ${wish[key]}`).join(',')).join('\n');
  return `
  Dear Santa,

      You have following pending wishes to be granted! Hurry!

      ${strWishes}
  `;
}

module.exports = {
  TRANSPORTER,
  createMessageHeader,
  createMessageText
}
