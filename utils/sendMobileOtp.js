const twilio = require('twilio');
require('dotenv').config(); 

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

const client = new twilio(accountSid, authToken);

const sendOtp = async (mobile, otp) => {
    try {
        await client.messages.create({
            body: `Your OTP: ${otp}`,
            to: mobile,
            from: twilioPhoneNumber,
        });

        console.log('OTP sent successfully via SMS');
    } catch (error) {
        console.error('Error sending OTP via SMS:', error);
        throw new Error('Failed to send OTP');
    }
};

module.exports = sendOtp;