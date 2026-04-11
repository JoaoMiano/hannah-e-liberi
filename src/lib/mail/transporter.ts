import nodemailer from "nodemailer";

if (!process.env.SMTP_HOST) throw new Error("SMTP_HOST não configurado");
if (!process.env.SMTP_PORT) throw new Error("SMTP_PORT não configurado");
if (!process.env.SMTP_USER) throw new Error("SMTP_USER não configurado");
if (!process.env.SMTP_PASS) throw new Error("SMTP_PASS não configurado");

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
