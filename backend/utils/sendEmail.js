import nodemailer from 'nodemailer';

const sendEmail = async (options) => {

    const transporter = nodemailer.createTransport({
        service: process.env.RP_SERVICE,
        secure: true,
        port: 465,
        auth: {
            user: process.env.RP_USER_MAIL,
            pass: process.env.RP_USER_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.USER_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message
    };

    await transporter.sendMail(mailOptions);

}

export default sendEmail;