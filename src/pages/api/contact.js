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
      subject: `📩 Contact Form Submission from ${name || email}`,
      text: `Name: ${name || ''}\nEmail: ${email}\nPhone: ${phone || ''}\nProperty Type: ${propertyType || ''}\nBudget: ${budget || ''}\nMessage: ${message || ''}`,
      html: `
        <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.08);padding:40px 30px;font-family:Arial, Helvetica, sans-serif;line-height:1.6;">
          
          <!-- Header -->
          <div style="text-align:center;margin-bottom:28px;">
            <img src="https://empire-lakeview.vercel.app/_next/image?url=%2Fassets%2Flogo%20(2).png&w=640&q=75" alt="Empire Logo" style="height:60px;margin-bottom:16px;" />
            <h2 style="margin:0;color:#CCAB64;font-size:26px;font-weight:600;">New Contact Form Submission</h2>
          </div>
    
          <!-- Content Table -->
          <table style="width:100%;border-collapse:collapse;font-size:15px;color:#333;">
            <tr>
              <td style="padding:10px 0;font-weight:600;width:150px;color:#555;">Name:</td>
              <td style="padding:10px 0;">${name || ''}</td>
            </tr>
            <tr style="background:#fafafa;">
              <td style="padding:10px 0;font-weight:600;color:#555;">Email:</td>
              <td style="padding:10px 0;">${email}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;font-weight:600;color:#555;">Phone:</td>
              <td style="padding:10px 0;">${phone || ''}</td>
            </tr>
            <tr style="background:#fafafa;">
              <td style="padding:10px 0;font-weight:600;color:#555;">Property Type:</td>
              <td style="padding:10px 0;">${propertyType || ''}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;font-weight:600;color:#555;">Budget:</td>
              <td style="padding:10px 0;">${budget || ''}</td>
            </tr>
            <tr style="background:#fafafa;">
              <td style="padding:10px 0;font-weight:600;color:#555;vertical-align:top;">Message:</td>
              <td style="padding:10px 0;">${message || ''}</td>
            </tr>
          </table>
    
          <!-- Footer -->
          <div style="margin-top:40px;text-align:center;color:#999;font-size:13px;border-top:1px solid #eee;padding-top:16px;">
            © ${new Date().getFullYear()} Empire Lakeview. All rights reserved.
          </div>
        </div>
      `
    });
    


    return res.status(200).json({ message: 'Email sent successfully.' });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
}
