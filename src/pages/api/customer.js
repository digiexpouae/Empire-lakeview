import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const {
    fullname,
    email,
    phonenumber,
    property,
    propertyaddress,
    unitvillanumber,
    contractbookingnumber,
    categoryofcomplaint,
    severitylevel,
    dateofincident,
    detaileddescription,
    previouslycontactattempt,
    contactConsent,
  } = req.body;

  if (!email || contactConsent === false) {
    return res.status(400).json({ message: 'Email and consent are required.' });
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
      from: process.env.SMTP_FROM || `"Customer Complaint" <no-reply@yourdomain.com>`,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      subject: `Customer Complaint - ${fullname || email}`,
      text: `
Name: ${fullname || 'N/A'}
Email: ${email}
Phone: ${phonenumber || 'N/A'}
Property/Project: ${property || 'N/A'}
Property Address: ${propertyaddress || 'N/A'}
Unit/Villa Number: ${unitvillanumber || 'N/A'}
Contract/Booking Number: ${contractbookingnumber || 'N/A'}
Category of Complaint: ${categoryofcomplaint || 'N/A'}
Severity Level: ${severitylevel || 'N/A'}
Date of Incident: ${dateofincident || 'N/A'}
Detailed Description: ${detaileddescription || 'N/A'}
Previously Contact Attempt: ${previouslycontactattempt || 'N/A'}
Consent to Contact: ${contactConsent ? 'Yes' : 'No'}
      `,
      html: `
        <div style="max-width:520px;margin:0 auto;background:#fff;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.07);padding:32px 24px 24px 24px;font-family:sans-serif;">
          <div style="text-align:center;margin-bottom:24px;">
            <img src="https://yourdomain.com/assets/logo2.png" alt="Empire Logo" style="height:60px;margin-bottom:8px;" />
            <h2 style="margin:0;color:#CCAB64;font-size:24px;">New Customer Complaint</h2>
          </div>
          <table style="width:100%;border-collapse:collapse;font-size:16px;">
            <tr><td style="padding:8px 0;font-weight:bold;width:200px;">Name:</td><td>${fullname || 'N/A'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Email:</td><td>${email}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Phone:</td><td>${phonenumber || 'N/A'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Property/Project:</td><td>${property || 'N/A'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Property Address:</td><td>${propertyaddress || 'N/A'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Unit/Villa Number:</td><td>${unitvillanumber || 'N/A'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Contract/Booking Number:</td><td>${contractbookingnumber || 'N/A'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Category of Complaint:</td><td>${categoryofcomplaint || 'N/A'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Severity Level:</td><td>${severitylevel || 'N/A'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Date of Incident:</td><td>${dateofincident || 'N/A'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Detailed Description:</td><td>${detaileddescription || 'N/A'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Previously Contact Attempt:</td><td>${previouslycontactattempt || 'N/A'}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Consent to Contact:</td><td>${contactConsent ? 'Yes' : 'No'}</td></tr>
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
