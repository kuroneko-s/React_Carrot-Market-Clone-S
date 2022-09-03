import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/client/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "GET") {
    const streams = await client.stream.findMany({
      take: 10,
      skip: 0, // 건너띄는 갯수
    });

    return res.json({
      ok: true,
      streams,
    });
  }

  if (req.method === "POST") {
    const {
      session: { user },
      body: { name, price, description },
    } = req;

    const {
      result: {
        uid,
        rtmps: { url, streamKey },
      },
    } = await (
      await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${process.env.CF_ID}/stream/live_inputs`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.STREAM_TOKEN}`,
          },
          body: `{"meta": {"name":"${name}"},"recording": { "mode": "automatic", "timeoutSeconds": 10 }}`,
        }
      )
    )
      .json()
      .catch((err) => console.error(err));

    const stream = await client.stream.create({
      data: {
        cloudflareId: uid,
        cloudflareUrl: url,
        cloudflareKey: streamKey,
        name,
        price: price,
        description,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });

    return res.json({
      ok: true,
      stream,
    });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);
