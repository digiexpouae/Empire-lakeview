import nodemailer from 'nodemailer';
import { useRouter } from 'next/router';
export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, propertyType, budget, message } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  // Configure your SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || email,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      subject: `Contact Form Submission from ${name || email}`,
      text: `Name: ${name || ''}\nEmail: ${email}\nPhone: ${phone || ''}\nProperty Type: ${propertyType || ''}\nBudget: ${budget || ''}\nMessage: ${message || ''}`,
      html: `
        <div style="max-width:520px;margin:0 auto;background:#fff;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.07);padding:32px 24px 24px 24px;font-family:sans-serif;">
          <div style="text-align:center;margin-bottom:24px;">
            <img src="/assets/logo2.png" alt="Empire Logo" style="height:60px;margin-bottom:8px;" />
            <h2 style="margin:0;color:#CCAB64;font-size:24px;">New Contact Form Submission</h2>
          </div>
          <table style="width:100%;border-collapse:collapse;font-size:16px;">
            <tr><td style="padding:8px 0;font-weight:bold;width:140px;">Name:</td><td>${name || ''}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Email:</td><td>${email}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Phone:</td><td>${phone || ''}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Property Type:</td><td>${propertyType || ''}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Budget:</td><td>${budget || ''}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;vertical-align:top;">Message:</td><td>${message || ''}</td></tr>
          </table>
          <div style="margin-top:32px;text-align:center;color:#888;font-size:13px;">Empire Lakeview &copy; ${new Date().getFullYear()}</div>
        </div>
      `
    });


    return res.status(200).json({ message: 'Email sent successfully.' });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
}
