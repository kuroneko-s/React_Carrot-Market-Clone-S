import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const response = await (
    await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.IMAGES_ID}/images/v1/direct_upload`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.IMAGES_TOKEN}`,
        },
      }
    )
  )
    .json()
    .catch((err) => console.error(err));

  console.log(response.result);
  res.json({
    ok: true,
    ...response.result,
  });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
