import { serve } from 'std/http/server.ts';
import { Resend } from 'npm:resend@4.6.0';

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  try {
    const { email, name, jobTitle } = await req.json();

    await resend.emails.send({
      from: 'Tracer <hello@tracer.cloud>',
      to: [email],
      subject: 'Thanks for your enquiry',
      html: `
        <p>${name ? `Hi ${name},` : 'Hi!'}</p>
        <p>Thanks for your interest in Tracer! You can book a call with our team <a href="https://calendly.com/tracerlaura/meeting-with-laura">here</a>, or we’ll be in touch shortly to arrange a time that suits you.</p>
        <p>In the meantime, feel free to explore our <a href="https://tracer.cloud">website</a> for more information about how we can offer full visibility into your computational pipelines.</p>
        <p>The Tracer Team</p>

       <div style="margin-top: 30px; border-top: 1px solid #ddd; padding-top: 20px; font-family: Arial, sans-serif; font-size: 14px; color: #555; display: flex; align-items: center; gap: 15px;">
  <img src="https://tracer.cloud/shared/tracer-logo-black.png" alt="Tracer Logo" style="width: 120px; height: auto; display: block;" />

  <div style="line-height: 1.5;">
    <p style="margin: 0;">
      <a href="mailto:hello@tracer.cloud" style="text-decoration: none;">hello@tracer.cloud</a> | 
      +32 472 817175 | 
      <a href="https://www.linkedin.com/company/tracercloud" target="_blank" rel="noopener" style="text-decoration: none;">LinkedIn</a>
    </p>
    <p style="margin: 5px 0 0 0; font-style: italic;">
      Visit our <a href="https://tracer.cloud" target="_blank" rel="noopener" style="text-decoration: none;">website</a>
    </p>
    <p style="margin: 5px 0 0 0;">
      Tracer, Argyle House, London, NW1 2SD, UK
    </p>
  </div>
</div>
      `,
    });

    await resend.emails.send({
      from: 'Tracer <hello@tracer.cloud>',
      to: ['laura@tracer.bio', 'portia@tracer.cloud'],
      subject: 'New demo enquiry received',
      html: `
        <h3>New demo enquiry received</h3>
        <p><strong>Name:</strong> ${name || '—'}</p>
        <p><strong>Email:</strong> ${email || '—'}</p>
        <p><strong>Job title:</strong> ${jobTitle || '—'}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</p>
      `,
    });

    return new Response('Emails sent', {
      status: 200,
      headers: corsHeaders,
    });
  } catch (err) {
    console.error('Email error:', err);
    return new Response('Error sending email', {
      status: 500,
      headers: corsHeaders,
    });
  }
});



