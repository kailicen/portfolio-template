import type { NextApiRequest, NextApiResponse } from "next";
import { getPaginatedBlogPosts } from "@/lib/contentful";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const page = Number(req.query.page || 1);
  const limit = Number(req.query.limit || 10);

  const safePage = Number.isNaN(page) || page < 1 ? 1 : page;
  const safeLimit = Number.isNaN(limit) || limit < 1 ? 10 : limit;

  const skip = (safePage - 1) * safeLimit;

  const result = await getPaginatedBlogPosts(false, skip, safeLimit);

  res.status(200).json({
    items: result.items,
    total: result.total,
    page: safePage,
    limit: safeLimit,
    totalPages: Math.ceil(result.total / safeLimit),
  });
}
