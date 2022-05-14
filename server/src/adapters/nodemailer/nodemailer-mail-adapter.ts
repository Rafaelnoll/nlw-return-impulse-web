import nodemailer from "nodemailer";
import { mailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "5c5e36de526aea",
        pass: "ff4380b37ab578"
    }
});

export class NodemailerMailAdapter implements mailAdapter {



    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "Rafael Noll <nollzera2020@gmail.com>",
            subject,
            html: body,
        });
    }
}