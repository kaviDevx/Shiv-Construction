declare module "nodemailer" {
  export interface Transporter {
    sendMail(mailOptions: MailOptions): Promise<SentMessageInfo>;
  }

  export interface MailOptions {
    from?: string;
    to: string | string[];
    subject: string;
    text?: string;
    html?: string;
    replyTo?: string;
  }

  export interface SentMessageInfo {
    messageId: string;
    accepted?: string[];
    rejected?: string[];
    pending?: string[];
    response?: string;
  }

  export interface TransportOptions {
    host?: string;
    port?: number;
    secure?: boolean;
    auth?: {
      user: string;
      pass: string;
    };
  }

  export function createTransport(options: TransportOptions): Transporter;
}
