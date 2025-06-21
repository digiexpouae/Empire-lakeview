import nodemailer from 'nodemailer';

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
        <p><strong>Name:</strong> ${name || ''}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || ''}</p>
        <p><strong>Property Type:</strong> ${propertyType || ''}</p>
        <p><strong>Budget:</strong> ${budget || ''}</p>
        <p><strong>Message:</strong> ${message || ''}</p>
      `
    });
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
}
