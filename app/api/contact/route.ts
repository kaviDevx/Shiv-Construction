import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email content
    const emailContent = `
New Contact Form Submission from Shiv Construction Website

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}

---
This email was sent from the Shiv Construction contact form.
    `.trim();

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0369a1; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
        </div>
        <div style="margin: 20px 0;">
          <h3 style="color: #0369a1;">Message:</h3>
          <p style="white-space: pre-wrap; background-color: #ffffff; padding: 15px; border-left: 4px solid #0ea5e9; border-radius: 4px;">
            ${message.replace(/\n/g, "<br>")}
          </p>
        </div>
        <p style="color: #6b7280; font-size: 12px; margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 10px;">
          This email was sent from the Shiv Construction contact form.
        </p>
      </div>
    `;

    // If SMTP credentials are not configured, log the email instead
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.log("SMTP not configured. Email details:");
      console.log({
        to: "vapi@shivconstruction.info",
        subject: `New Contact Form Submission from ${name}`,
        text: emailContent,
        html: htmlContent,
      });

      // In development, return success even without sending
      // In production, make sure to configure SMTP
      return NextResponse.json(
        {
          message:
            "Email queued successfully (SMTP not configured - check console for details)",
        },
        { status: 200 }
      );
    }

    // Configure nodemailer transporter
    // You can use Gmail, custom SMTP, or other email services
    // For Gmail, you'll need to use an App Password: https://support.google.com/accounts/answer/185833

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASSWORD!,
      },
    });

    // Send email
    const info = await transporter.sendMail({
      from:
        process.env.SMTP_FROM || `Shiv Construction <${process.env.SMTP_USER}>`,
      to: "vapi@shivconstruction.info",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: emailContent,
      html: htmlContent,
    });

    console.log("Email sent successfully:", info.messageId);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
