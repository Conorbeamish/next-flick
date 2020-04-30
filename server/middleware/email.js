const nodemailer = require("nodemailer");
require("dotenv").config({path: "../.env"});

exports.transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
})

exports.resetPasswordURL = (user, token) => {
    // Set URL below
    return ``
}

exports.resetPasswordTemplate = (user, url) => {
    const from = process.env.EMAIL_USERNAME
    const to = user.email
    const subject = "Password Reset"
    const html = `
    <p>Hello ${user.username},<p>
    <p>You have requested a password reset, click the link below to choose a new password</p>
    <a href = ${url}> ${url} </a>
    `
    return {from, to, subject, html}
}