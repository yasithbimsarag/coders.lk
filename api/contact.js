import { Resend } from 'resend';

const allowOrigin = process.env.ALLOW_ORIGIN ?? '*';
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 5;

// In-memory limiter for serverless instance. Good basic protection.
const requestLog = new Map();

function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', allowOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function sanitize(value, max = 5000) {
  return String(value ?? '').trim().slice(0, max);
}

function getClientIp(req) {
  const xfwd = req.headers['x-forwarded-for'];
  if (typeof xfwd === 'string' && xfwd.length > 0) {
    return xfwd.split(',')[0].trim();
  }
  return req.socket?.remoteAddress ?? 'unknown';
}

function checkRateLimit(ip) {
  const now = Date.now();
  const start = now - RATE_LIMIT_WINDOW_MS;
  const existing = requestLog.get(ip) ?? [];
  const recent = existing.filter((timestamp) => timestamp > start);

  if (recent.length >= RATE_LIMIT_MAX) {
    requestLog.set(ip, recent);
    return false;
  }

  recent.push(now);
  requestLog.set(ip, recent);
  return true;
}

export default async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const ip = getClientIp(req);
  if (!checkRateLimit(ip)) {
    return res.status(429).json({ success: false, message: 'Too many requests. Please try again in a minute.' });
  }

  const {
    name,
    email,
    phone,
    company,
    service,
    message,
    website, // Honeypot: must stay empty.
  } = req.body ?? {};

  if (website) {
    return res.status(200).json({ success: true });
  }

  const cleanName = sanitize(name, 120);
  const cleanEmail = sanitize(email, 180);
  const cleanPhone = sanitize(phone, 60);
  const cleanCompany = sanitize(company, 160);
  const cleanService = sanitize(service, 120);
  const cleanMessage = sanitize(message, 5000);

  if (!cleanName || !cleanEmail || !cleanMessage) {
    return res.status(400).json({ success: false, message: 'Please fill name, email and message.' });
  }

  if (!isValidEmail(cleanEmail)) {
    return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL ?? 'hello@coders.lk';
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? 'website@coders.lk';

  if (!apiKey) {
    return res.status(500).json({ success: false, message: 'Email service not configured on server.' });
  }

  try {
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      cc: [
        'abdullahfwzath123@gmail.com',
        'yasithbimsara723@gmail.com',
        'ayanawickramarathna22@gmail.com',
      ],
      replyTo: cleanEmail,
      subject: `New Contact Request - Coders.lk`,
      text: `New Contact Request - Coders.lk\n\nName: ${cleanName}\nEmail: ${cleanEmail}\nPhone: ${cleanPhone || 'Not provided'}\nCompany: ${cleanCompany || 'Not provided'}\nService: ${cleanService || 'Not provided'}\n\nMessage:\n${cleanMessage}`,
      html: `
        <h2>New Contact Request - Coders.lk</h2>
        <p><strong>Name:</strong> ${cleanName}</p>
        <p><strong>Email:</strong> ${cleanEmail}</p>
        <p><strong>Phone:</strong> ${cleanPhone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${cleanCompany || 'Not provided'}</p>
        <p><strong>Service:</strong> ${cleanService || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${cleanMessage.replace(/\n/g, '<br/>')}</p>
      `,
    });

    await resend.emails.send({
      from: fromEmail,
      to: [cleanEmail],
      subject: 'We received your message - Coders.lk',
      text: `Hi ${cleanName},\n\nThank you for contacting Coders.lk.\n\nWe've received your message and our team will get back to you shortly.\n\n- Coders.lk\nBuilding digital products for ambitious businesses.`,
      html: `
        <p>Hi ${cleanName},</p>
        <p>Thank you for contacting Coders.lk.</p>
        <p>We've received your message and our team will get back to you shortly.</p>
        <p>- Coders.lk<br/>Building digital products for ambitious businesses.</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to send message';
    return res.status(500).json({ success: false, message });
  }
}
