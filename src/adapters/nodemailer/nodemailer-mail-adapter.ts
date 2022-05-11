import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6e5c9f42af96e5",
    pass: "0f8fd9d6328338"
  }
});
export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
     await transport.sendMail({
    from: 'Equipe Eguu <eguu.it@gmail.com',
    to: 'Leandro <leandro.outi.baroni@gmail.com>',
    subject,
    html: body
  });    
  };
}