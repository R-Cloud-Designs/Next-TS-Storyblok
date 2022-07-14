import { NextApiRequest, NextApiResponse } from "next";

export default async function StoryblokDraftView(req: NextApiRequest, res: NextApiResponse) {
  const params = req.url!.split("?");
  const { slug } = req.query;

  if (req.query.secret !== process.env.PREVIEW_ACCESS_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  res.setPreviewData({});

  const cookies = res.getHeader("Set-Cookie") as string[];

  res.setHeader(
    "Set-Cookie",
    cookies.map((cookie) => cookie.replace("SameSite=Lax", "SameSite=None;Secure"))
  );

  res.redirect(`/${slug}?${params[1]}`);
}
