import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

// Validation schema
const contactFormSchema = z.object({ 
  name: z.string().min(5)
    .max(50),
  email: z.string().email()
    .max(100),
  message: z.string().min(10)
    .max(500)
    .trim()
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    
    // Validate the request body
    const result = contactFormSchema.safeParse(body)
    if (!result.success) {
      return Response.json({ 
        success: false, 
        error: result.error.issues 
      }, { status: 400 })
    }

    const {
      name,
      email,
      message
    } = result.data

    const htmlContent = `
      <!DOCTYPE html>
      <html dir="rtl" lang="fa">
        <head>
          <meta charset="UTF-8">
          <style>
            body {
              font-family: system-ui, -apple-system, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              border-bottom: 2px solid #eee;
              padding-bottom: 10px;
              margin-bottom: 20px;
            }
            .content {
              background: #f9f9f9;
              padding: 20px;
              border-radius: 8px;
            }
            .field {
              margin-bottom: 15px;
            }
            .label {
              font-weight: bold;
              color: #666;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>پیام جدید از فرم تماس</h2>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">نام:</span>
              <div>${name}</div>
            </div>
            <div class="field">
              <span class="label">ایمیل:</span>
              <div>${email}</div>
            </div>
            <div class="field">
              <span class="label">پیام:</span>
              <div>${message}</div>
            </div>
          </div>
        </body>
      </html>
    `

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "mehdimj0161@gmail.com",
      subject: `پیام جدید از ${name}`,
      html: htmlContent,
      text: `نام: ${name}\nایمیل: ${email}\nپیام: ${message}` // Fallback plain text
    })

    return Response.json({ success: true })
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.error("Email sending error:", error)
    return Response.json({ 
      success: false, 
      error: "Failed to send email" 
    }, { status: 500 })
  }
}