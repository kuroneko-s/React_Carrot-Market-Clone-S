import { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await client.user.create({
    data: {
      email: "choiddh@test2.com",
      name: "hi",
    },
  });

  res.status(201);

  res.json({
    ok: true,
    data: "created",
  });
}
