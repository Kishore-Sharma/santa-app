const { TRANSPORTER, createMessageHeader, createMessageText } = require('../mailer_config');
const TIME_INTERVAL = 15000;

const sendMail = () => {
    try {
        const messageHeader = createMessageHeader();
        const text = createMessageText();
        TRANSPORTER.sendMail({...messageHeader, text})
    } catch(e) {
        console.log(e);
    }
}

const sendMailInInterval = () => {
    setInterval(() => sendMail(), TIME_INTERVAL);
}

module.exports = {
    sendMail,
    sendMailInInterval
}
