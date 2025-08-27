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
            <img src="data:image/png;base64,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" alt="Empire Logo" style="height:60px;margin-bottom:8px;" />
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
