import nodemailer from "nodemailer"

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
})

export async function sendContactEmail(email: string, idea: string) {
    return transporter.sendMail({
        from: `"jesuSando Portfolio 🚀" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `New Portfolio Contact from ${email}`,
        html: contactTemplate(email, idea),
    })
}

function contactTemplate(email: string, idea: string) {
    return `
  <div style="font-family: Arial, sans-serif; padding: 24px; background: #f9fafb;">
    <div style="max-width: 600px; margin: auto; background: white; padding: 24px; border-radius: 12px;">
      <h2 style="margin-bottom: 16px;">🚀 New Portfolio Contact</h2>
      
      <p style="margin: 8px 0;">
        <strong>From:</strong> ${email}
      </p>

      <div style="margin-top: 16px; padding: 16px; background: #f3f4f6; border-radius: 8px;">
        <p style="white-space: pre-line;">${idea}</p>
      </div>

      <hr style="margin: 24px 0;" />

      <p style="font-size: 12px; color: #6b7280;">
        Sent from jesuSando contact form
      </p>
    </div>
  </div>
  `
}