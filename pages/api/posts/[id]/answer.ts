import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/client/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    session: { user },
    body: { answer: answerData },
  } = req;
  const queryId = id ? +id.toString() : -1;

  const post = await client.post.findFirst({
    where: {
      id: queryId,
    },
    select: {
      id: true,
    },
  });

  if (!post) res.status(404).end();

  const answer = await client.answer.create({
    data: {
      user: {
        connect: {
          id: user?.id,
        },
      },
      post: {
        connect: {
          id: queryId,
        },
      },
      answer: answerData,
    },
  });

  console.log(answer);

  res.json({
    ok: true,
    answer,
  });
}

export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
  })
);
