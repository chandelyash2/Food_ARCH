import nodemailer from 'nodemailer'
import { signupTemplate } from '../templates/signupTemplate'
import { isEmailSend } from '../errors'
const sendSignupEmail = async (email: string, otp: string) => {
  try {
    //step1
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'yash.codedrill@gmail.com',
        pass: 'bafiakfljuikrlcz',
      },
    })

    //step2
    const mailOptions = {
      from: 'yash.codedrill@gmail.com',
      to: email,
      subject: 'OTP Verification',
      html: signupTemplate(otp).toString(),
    }
    //step3
    const sendEmail = await transporter.sendMail(mailOptions)
    console.log(sendEmail, 'sendEmal')
    const isSend = isEmailSend(sendEmail)
    return isSend
  } catch (error) {
    return error
  }
}
export default sendSignupEmail
