import twilio from "twilio";
import mail from "@sendgrid/mail";
import client from "@libs/client/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { EmailAddress } from "@sendgrid/helpers/classes";

const twilioClient = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH_TOKEN
);

mail.setApiKey(process.env.SENDGRID_API_KEY!);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email, phone } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;

  if (!user) return res.status(400).json({ ok: false });

  const payload = Math.floor(100000 + Math.random() * 999999) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });

  if (phone) {
    /* const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MESSAGE_SID,
      to: "+82" + process.env.MY_PHONE!,
      body: `Your login token is ${payload}.`,
    });

    console.log(message); */
    console.log("send message ", phone);
  } else if (email) {
    /* const email = await mail.send({
      to: "kuroneko2@naver.com",
      from: "drivespublic@gmail.com",
      subject: "carrot market varification Email",
      text: `You token is ${payload}`,
      html: `<strong>${payload}</strong>`,
    });

    console.log(email); */
    console.log("send email ", email);
  }

  return res.json({
    ok: true,
  });
}

export default withHandler("POST", handler);
