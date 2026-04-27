import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;
const ALLOWED_FILE_TYPES = new Set([
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function escapeHtml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function getRequiredEnv(name: string) {
    const value = process.env[name];

    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }

    return value;
}

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        const name = String(formData.get("name") ?? "").trim();
        const email = String(formData.get("email") ?? "").trim();
        const phone = String(formData.get("phone") ?? "").trim();
        const role = String(formData.get("role") ?? "").trim();
        const resume = formData.get("resume");

        if (!name || !email || !phone || !role || !(resume instanceof File)) {
            return NextResponse.json(
                { message: "Please complete all required fields." },
                { status: 400 },
            );
        }

        if (resume.size === 0) {
            return NextResponse.json(
                { message: "Please upload your resume." },
                { status: 400 },
            );
        }

        if (resume.size > MAX_FILE_SIZE_BYTES) {
            return NextResponse.json(
                { message: "Resume file must be 5 MB or smaller." },
                { status: 400 },
            );
        }

        if (resume.type && !ALLOWED_FILE_TYPES.has(resume.type)) {
            return NextResponse.json(
                { message: "Resume must be a PDF, DOC, or DOCX file." },
                { status: 400 },
            );
        }

        const smtpHost = getRequiredEnv("SMTP_HOST");
        const smtpPort = Number(process.env.SMTP_PORT ?? "587");
        const smtpUser = getRequiredEnv("SMTP_USER");
        const smtpPass = getRequiredEnv("SMTP_PASS");
        const careersInbox = process.env.CAREERS_INBOX ?? "hr@recollectix.com";
        const smtpFrom = process.env.SMTP_FROM ?? smtpUser;
        const escapedName = escapeHtml(name);
        const escapedEmail = escapeHtml(email);
        const escapedPhone = escapeHtml(phone);
        const escapedRole = escapeHtml(role);

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        });

        const resumeBuffer = Buffer.from(await resume.arrayBuffer());

        await transporter.sendMail({
            from: smtpFrom,
            to: careersInbox,
            replyTo: email,
            subject: `New Career Application - ${role}`,
            text: [
                "A new application has been submitted via the careers page.",
                "",
                `Name: ${name}`,
                `Email: ${email}`,
                `Phone: ${phone}`,
                `Role: ${role}`,
            ].join("\n"),
            html: `
                <div style="font-family: Arial, Helvetica, sans-serif; color: #1c1917; line-height: 1.6;">
                    <h2 style="margin: 0 0 16px;">New Career Application</h2>
                    <p style="margin: 0 0 16px;">A new application has been submitted via the careers page.</p>
                    <table style="border-collapse: collapse;">
                        <tr><td style="padding: 6px 12px 6px 0;"><strong>Name:</strong></td><td style="padding: 6px 0;">${escapedName}</td></tr>
                        <tr><td style="padding: 6px 12px 6px 0;"><strong>Email:</strong></td><td style="padding: 6px 0;">${escapedEmail}</td></tr>
                        <tr><td style="padding: 6px 12px 6px 0;"><strong>Phone:</strong></td><td style="padding: 6px 0;">${escapedPhone}</td></tr>
                        <tr><td style="padding: 6px 12px 6px 0;"><strong>Role:</strong></td><td style="padding: 6px 0;">${escapedRole}</td></tr>
                    </table>
                </div>
            `,
            attachments: [
                {
                    filename: resume.name,
                    content: resumeBuffer,
                    contentType: resume.type || undefined,
                },
            ],
        });

        return NextResponse.json(
            { message: "Application submitted successfully." },
            { status: 200 },
        );
    } catch (error) {
        console.error("Career application submission failed:", error);

        return NextResponse.json(
            { message: "We could not submit your application right now. Please try again." },
            { status: 500 },
        );
    }
}
