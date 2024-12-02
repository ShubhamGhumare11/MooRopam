/* 
import nodemailer from 'nodemailer'

export const emailSenderService = () => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'hsupare212@gmail.com',
            pass: 'dev@apera@123',
        },
    });
    const mailOptions = {
        from: 'hsupare212@gmail.com',
        to: "hsupare313@gmail.com",
        subject: "test for auspicious numerology ",
        text: "hiii from auspicious numerology",
    };

    transporter.sendMail(mailOptions, (error, info) => {
        
        return { "message": 'Email sent: ' + info.response }
    });
} */