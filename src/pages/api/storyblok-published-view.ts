import { NextApiRequest, NextApiResponse } from "next";

export default async function StoryblokPublishedView(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  res.clearPreviewData();

  const cookies = res.getHeader("Set-Cookie") as string[];

  res.setHeader(
    "Set-Cookie",
    cookies?.map((cookie) => cookie.replace("SameSite=Lax", "SameSite=None;Secure"))
  );

  res.redirect(`/${slug}`);
}
