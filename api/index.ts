import { VercelApiHandler } from "@vercel/node";

const handler: VercelApiHandler = async (_, res) => {
  res.status(200).send({
    endpoints: [
      "GET /api/:user/sponsors",
      "GET /api/:user/sponsorees",
      "GET /api/:user/sponsored/:by",
      "GET /api/:user/sponsoring/:who",
    ],
  });
};

export default handler;
