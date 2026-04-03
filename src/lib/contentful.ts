import { createClient, Entry, EntrySkeletonType } from "contentful";

// Initialize Contentful client
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

// Preview client for draft content
const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN || "",
  host: "preview.contentful.com",
});

// Get the appropriate client based on preview mode
export const getClient = (preview = false) => (preview ? previewClient : client);

// Type definitions for Contentful content types
export interface BlogPostFields {
  title: string;
  slug: string;
  excerpt: string;
  content: any; // Rich text
  featuredImage?: {
    fields: {
      file: {
        url: string;
      };
      title: string;
    };
  };
  publishedDate: string;
  author?: string;
}

export interface MediaAppearanceFields {
  title: string;
  slug: string;
  source: string;
  excerpt: string;
  externalUrl?: string;
  content?: any; // Rich text
  publishedDate: string;
  featuredImage?: {
    fields: {
      file: {
        url: string;
      };
      title: string;
    };
  };
}

export interface FAQFields {
  question: string;
  answer: any; // Rich text
  order: number;
  category?: string;
}

export interface ResourceFields {
  name: string;
  trainer?: string;
  location?: string;
  link: string;
  description?: any; // Rich text
  category: "australia" | "overseas" | "tasmanian-legislation" | "end-of-life-training" | "end-of-life-tools";
  order: number;
}

// Fetch functions
export async function getBlogPosts(preview = false) {
  const client = getClient(preview);
  
  try {
    const entries = await client.getEntries({
      content_type: "blogPost",
      order: ["-fields.publishedDate"],
    });
    
    return entries.items.map((item) => ({
      ...item.fields,
      id: item.sys.id,
    })) as (BlogPostFields & { id: string })[];
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string, preview = false) {
  const client = getClient(preview);
  
  try {
    const entries = await client.getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
      limit: 1,
    });
    
    if (entries.items.length === 0) return null;
    
    const item = entries.items[0];
    return {
      ...item.fields,
      id: item.sys.id,
    } as BlogPostFields & { id: string };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export async function getMediaAppearances(preview = false) {
  const client = getClient(preview);
  
  try {
    const entries = await client.getEntries({
      content_type: "mediaAppearance",
      order: ["-fields.publishedDate"],
    });
    
    return entries.items.map((item) => ({
      ...item.fields,
      id: item.sys.id,
    })) as (MediaAppearanceFields & { id: string })[];
  } catch (error) {
    console.error("Error fetching media appearances:", error);
    return [];
  }
}

export async function getFAQs(preview = false) {
  const client = getClient(preview);
  
  try {
    const entries = await client.getEntries({
      content_type: "faq",
      order: ["fields.order"],
    });
    
    return entries.items.map((item) => ({
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
      order: ["fields.order"],
    });
    
    return entries.items.map((item) => ({
      ...item.fields,
      id: item.sys.id,
    })) as (ResourceFields & { id: string })[];
  } catch (error) {
    console.error("Error fetching resources:", error);
    return [];
  }
}

// Helper to render rich text (basic implementation)
export function renderRichText(document: any): string {
  if (!document || !document.content) return "";
  
  return document.content
    .map((node: any) => {
      if (node.nodeType === "paragraph") {
        return node.content
          .map((child: any) => {
            if (child.nodeType === "text") return child.value;
            if (child.nodeType === "hyperlink") {
              return `<a href="${child.data.uri}" class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">${child.content.map((c: any) => c.value).join("")}</a>`;
            }
            return "";
          })
          .join("");
      }
      if (node.nodeType === "unordered-list") {
        return `<ul class="list-disc pl-5 space-y-1">${node.content
          .map((li: any) => `<li>${li.content.map((p: any) => p.content.map((c: any) => c.value || "").join("")).join("")}</li>`)
          .join("")}</ul>`;
      }
      if (node.nodeType === "ordered-list") {
        return `<ol class="list-decimal pl-5 space-y-1">${node.content
          .map((li: any) => `<li>${li.content.map((p: any) => p.content.map((c: any) => c.value || "").join("")).join("")}</li>`)
          .join("")}</ol>`;
      }
      return "";
    })
    .join("<br/>");
}

// Check if Contentful is configured
export function isContentfulConfigured(): boolean {
  return !!(process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN);
}
