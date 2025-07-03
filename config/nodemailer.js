import nodemailer from 'nodemailer'
import { EMAIL_PASSWORD } from './env.js'
export const accountEmail="akshayguleria700@gmail.com"
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'akshayguleria700@gmail.com',
        pass:EMAIL_PASSWORD
    }
})
export default transporter
