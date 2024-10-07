import mongoose from "mongoose"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server.js"
import crypto from "crypto"
import sgMail from "@sendgrid/mail"
import User from "../../../models/user.js"
import db from "../../../config/db.js"




export async function POST(request) {
    await db()
    const { email, password, addhar, gst_no,company,address } = await request.json()
    const API_KEY = process.env.SG_API_KEY
    sgMail.setApiKey(API_KEY)
    const hashedPass = await bcrypt.hash(password, 10)
    const token = crypto.randomBytes(32).toString('hex')

    const manufature_details = {
        addhar: addhar,
        gst_no: gst_no,
        company: company,
        address: address
    }

    const user = await User.create({ email: email, password: hashedPass, verification_token: token, manufature_details: manufature_details });

    const verification_link = `http://localhost:3000/verify/${token}`
    const message = {
        to: email,
        from: process.env.FROM,
        subject: "Qcheck Account Verification!",
        text: `Verify your account here (paste link on browser if not clickable)\n \n ${verification_link}`
    }
    await sgMail
        .send(message)
        .then((response) => console.log("Email sent!"))
        .catch((error) => console.log(error.message))

    return NextResponse.json({
        success: true,
        message: "Account Created! Please verify your email."
    })

}

