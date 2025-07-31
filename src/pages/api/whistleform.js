import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const {
    categoryofconcern,
    descriptionofincident,
    location,
    dateofincident,
    witnessifany,
    fullname,
    email,
    phone
  } = req.body;
console.log(fullname)
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"Anonymous Whistleblower" <no-reply@yourdomain.com>`,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      subject: `Whistleblower Report - ${fullname || email}`,
      text: `
Name: ${fullname || 'N/A'}
Email: ${email}
Phone: ${phone || 'N/A'}
Category of Concern: ${categoryofconcern || 'N/A'}
Description of Incident: ${descriptionofincident || 'N/A'}
Location: ${location || 'N/A'}
Date of Incident: ${dateofincident || 'N/A'}
Witness (if any): ${witnessifany || 'N/A'}
      `,
      html: `
        <div style="max-width:520px;margin:0 auto;background:#fff;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.07);padding:32px 24px 24px 24px;font-family:sans-serif;">
          <div style="text-align:center;margin-bottom:24px;">
            <img src="https://yourdomain.com/assets/logo2.png" alt="Empire Logo" style="height:60px;margin-bottom:8px;" />
            <h2 style="margin:0;color:#CCAB64;font-size:24px;">New Whistleblower Submission</h2>
          </div>
          <table style="width:100%;border-collapse:collapse;font-size:16px;">
            <tr><td style="padding:8px 0;font-weight:bold;width:180px;">Name:</td><td>${fullname || 'N/A'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Email:</td><td>${email}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Phone:</td><td>${phone || 'N/A'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Category of Concern:</td><td>${categoryofconcern || 'N/A'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Description of Incident:</td><td>${descriptionofincident || 'N/A'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Location:</td><td>${location || 'N/A'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Date of Incident:</td><td>${dateofincident || 'N/A'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Witness (if any):</td><td>${witnessifany || 'N/A'}</td></tr>
          </table>
          <div style="margin-top:32px;text-align:center;color:#888;font-size:13px;">Empire Lakeview &copy; ${new Date().getFullYear()}</div>
        </div>
      `
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending failed:', error);
    return res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
}
