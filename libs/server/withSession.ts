import { withIronSessionApiRoute } from "iron-session/next";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

const cookieOptions = {
  cookieName: "carrot_session",
  password: process.env.IRON_PASSWORD!,
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  // cookieOptions: {
  //   secure: process.env.NODE_ENV === "production",
  // },
};

// get Session
export function withApiSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOptions);
}

// SSR session
