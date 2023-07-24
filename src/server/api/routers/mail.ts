import { env } from "~/env.mjs";
import getHtmlCode from "~/utils/mail/getHtmlCode";
import { contactInfoValidation } from "~/validation/contactInfo";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import nodemailer from 'nodemailer';
import previewEmail from "preview-email";
import bunyan from 'bunyan';

export const mailRouter = createTRPCRouter({
  send: publicProcedure
    .input(contactInfoValidation)
    .mutation(async ({ input }) => {
      const logger = bunyan.createLogger({
        name: "nodemailer"
      });

      // No password, throw
      if (env.GMAIL_AUTH_PASS == "") {
        logger.error("No password");
        throw new Error("No password");
      }
      
      const mailOptions = {
        from: env.GMAIL_AUTH_USER,
        to: env.GMAIL_AUTH_USER,
        subject: 'Formulario de contacto',
        html: getHtmlCode(input)
      };

      if (env.NODE_ENV != "production")
        previewEmail(mailOptions).then(e => logger.info(e)).catch(e => logger.error(e));

      if (env.NODE_ENV == "production") {
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true, // use SSL
          auth: {
            user: env.GMAIL_AUTH_USER,
            pass: env.GMAIL_AUTH_PASS
          }
        });

        try {
          const info = await transporter.sendMail(mailOptions);
          logger.info('Email sent: ' + info.response);
        } catch (error) {
          logger.error(error);
          throw error;
        }
      }

    }),
});
