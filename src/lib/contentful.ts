import { createClient } from "contentful";

// Main delivery client
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

// Lazy preview client so local dev does not explode if preview token is missing
export const getClient = (preview = false) => {
  if (preview) {
    if (!process.env.CONTENTFUL_PREVIEW_TOKEN) {
      throw new Error("Missing CONTENTFUL_PREVIEW_TOKEN");
    }

    return createClient({
      space: process.env.CONTENTFUL_SPACE_ID || "",
      accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
      host: "preview.contentful.com",
    });
  }

  return client;
};

export type ContentfulAsset = {
  fields?: {
    title?: string;
    file?: {
      url?: string;
      contentType?: string;
      fileName?: string;
      details?: {
        image?: {
          width?: number;
          height?: number;
        };
      };
    };
  };
};

export interface BlogPostFields {
  title: string;
  slug: string;
  excerpt: string;
  content: any;
  featuredImages?: ContentfulAsset[];
  publishedDate: string;
}

export interface MediaAppearanceFields {
  title: string;
  source: string;
  content: any;
  externalUrl?: string;
  publishedDate: string;
  mediaFile?: ContentfulAsset;
}

export interface FAQFields {
  question: string;
  answer: any;
  order: number;
  category?: string;
}

export interface ResourceFields {
  name: string;
  trainer?: string;
  location?: string;
  link?: string;
  description?: any;
  category:
    | "australia"
    | "overseas"
    | "tasmanian-legislation"
    | "end-of-life-training"
    | "end-of-life-tools";
  file?: {
    fields: {
      file: {
        url: string;
        fileName?: string;
        contentType?: string;
      };
      title?: string;
    };
  };
}

export interface PricingComponentFields {
  name: string;
  price: number;
  order: number;
  active: boolean;
}

export interface PricingPackageFields {
  name: string;
  price: number;
  description: any;
  order: number;
  active: boolean;
}

export type PricingComponentEntry = PricingComponentFields & {
  id: string;
};

export type PricingPackageEntry = PricingPackageFields & {
  id: string;
};

export async function getBlogPosts(preview = false) {
  const client = getClient(preview);

  try {
    const entries = await client.getEntries({
      content_type: "blogPost",
      order: ["-fields.publishedDate"],
      include: 2,
    });

    return entries.items.map((item: any) => ({
      ...item.fields,
      id: item.sys.id,
    })) as (BlogPostFields & { id: string })[];
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function getPaginatedBlogPosts(
  preview = false,
  skip = 0,
  limit = 6,
) {
  const client = getClient(preview);

  try {
    const entries = await client.getEntries({
      content_type: "blogPost",
      order: ["-fields.publishedDate"],
      include: 2,
      skip,
      limit,
    });

    return {
      items: entries.items.map((item: any) => ({
        ...item.fields,
        id: item.sys.id,
      })) as (BlogPostFields & { id: string })[],
      total: entries.total,
    };
  } catch (error) {
    console.error("Error fetching paginated blog posts:", error);
    return {
      items: [],
      total: 0,
    };
  }
}

export async function getBlogPostBySlug(slug: string, preview = false) {
  const client = getClient(preview);

  try {
    const entries = await client.getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
      limit: 1,
      include: 2,
    });

    if (entries.items.length === 0) return null;

    const item: any = entries.items[0];

    return {
      ...item.fields,
      id: item.sys.id,
    } as BlogPostFields & { id: string };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export async function getMediaAppearances(
  preview = false,
  skip = 0,
  limit = 6,
) {
  const client = getClient(preview);

  try {
    const entries = await client.getEntries({
      content_type: "mediaAppearance",
      order: ["-fields.publishedDate"],
      include: 2,
      skip,
      limit,
    });

    return {
      items: entries.items.map((item: any) => ({
        ...item.fields,
        id: item.sys.id,
      })) as (MediaAppearanceFields & { id: string })[],
      total: entries.total,
    };
  } catch (error) {
    console.error("Error fetching media appearances:", error);
    return {
      items: [],
      total: 0,
    };
  }
}

export async function getFAQs(preview = false) {
  const client = getClient(preview);

  try {
    const entries = await client.getEntries({
      content_type: "faq",
      order: ["fields.order"],
      include: 2,
    });

    return entries.items.map((item: any) => ({
      ...item.fields,
      id: item.sys.id,
    })) as (FAQFields & { id: string })[];
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return [];
  }
}

export async function getResources(preview = false) {
  const client = getClient(preview);

  try {
    const entries = await client.getEntries({
      content_type: "resource",
      order: ["fields.name"],
      include: 2,
    });

    return entries.items.map((item: any) => ({
      ...item.fields,
      id: item.sys.id,
    })) as (ResourceFields & { id: string })[];
  } catch (error) {
    console.error("Error fetching resources:", error);
    return [];
  }
}

export function isContentfulConfigured(): boolean {
  return !!(
    process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN
  );
}

export async function getPricingComponents(
  preview = false,
): Promise<PricingComponentEntry[]> {
  const contentfulClient = getClient(preview);

  try {
    const entries = await contentfulClient.getEntries({
      content_type: "pricingComponent",
      order: ["fields.order"],
      limit: 100,
    });

    return entries.items
      .map((item: any) => ({
        ...item.fields,
        id: item.sys.id,
      }))
      .filter(
        (item: PricingComponentEntry) => item.active !== false,
      ) as PricingComponentEntry[];
  } catch (error) {
    console.error("Error fetching pricing components:", error);
    return [];
  }
}

export async function getPricingPackages(
  preview = false,
): Promise<PricingPackageEntry[]> {
  const contentfulClient = getClient(preview);

  try {
    const entries = await contentfulClient.getEntries({
      content_type: "pricingPackage",
      order: ["fields.order"],
      include: 2,
      limit: 100,
    });

    return entries.items
      .map((item: any) => ({
        ...item.fields,
        id: item.sys.id,
      }))
      .filter(
        (item: PricingPackageEntry) => item.active !== false,
      ) as PricingPackageEntry[];
  } catch (error) {
    console.error("Error fetching pricing packages:", error);
    return [];
  }
}
