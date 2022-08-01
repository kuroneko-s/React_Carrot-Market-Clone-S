import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/client/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(401).end();
  }
  console.log(req.body.email);

  // res.json({ ok: true });
  res.status(200).end();
}
