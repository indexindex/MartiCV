import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { senderEmail, subject, message } = req.body;

    const msg = {
      to: 'marti.fotograaf@gmail.com',
      from: {
        name: 'Portfolio Manager',
        email: 'andrisuvorov@gmail.com'
      },
      subject: subject,
      text: `From: ${senderEmail}\n\n${message}`,
    };

    try {
      await sendgrid.send(msg);
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}