import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Name, email, phone and message are required." },
        { status: 400 }
      );
    }

    // create transporter using env vars: SMTP_HOST, SMTP_PORT, SMTP_SECURE (true/false), SMTP_USER, SMTP_PASS, SMTP_FROM(optional)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: "info@savileservices.ca",
      subject: `Website contact from ${name} — Savile Services`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Message:</strong><br/>${message
               .replace(/</g, "&lt;")
               .replace(/>/g, "&gt;")
               .replace(/\n/g, "<br/>")}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ ok: true, message: "Email sent." });
  } catch (err) {
    console.error(`Contact API error: \`${process.env.SMTP_HOST} ${process.env.SMTP_PORT} ${process.env.SMTP_USER} ${process.env.SMTP_PASS} ${process.env.SMTP_SECURE} ${process.env.SMTP_FROM} ${err}\``);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}