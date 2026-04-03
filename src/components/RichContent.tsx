import Image from "next/image";
import { ReactNode } from "react";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, Document } from "@contentful/rich-text-types";

type RichContentProps = {
  content: string | Document | null | undefined;
  className?: string;
  variant?: "article" | "compact";
};

const getRichTextOptions = (variant: "article" | "compact"): Options => {
  const paragraphClass =
    variant === "compact"
      ? "text-gray-600 leading-relaxed mb-4"
      : "text-gray-600 leading-relaxed mb-5";

  const listClass =
    variant === "compact"
      ? "pl-6 space-y-2 mb-4 text-gray-600"
      : "pl-6 space-y-2 mb-6 text-gray-600";

  return {
    renderNode: {
      [BLOCKS.HEADING_2]: (_node, children: ReactNode) => (
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-10 mb-4">
          {children}
        </h2>
      ),
      [BLOCKS.HEADING_3]: (_node, children: ReactNode) => (
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-8 mb-4">
          {children}
        </h3>
      ),
      [BLOCKS.PARAGRAPH]: (_node, children: ReactNode) => (
        <p className={paragraphClass}>{children}</p>
      ),
      [BLOCKS.UL_LIST]: (_node, children: ReactNode) => (
        <ul className={`list-disc ${listClass}`}>{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (_node, children: ReactNode) => (
        <ol className={`list-decimal ${listClass}`}>{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (_node, children: ReactNode) => <li>{children}</li>,
      [BLOCKS.QUOTE]: (_node, children: ReactNode) => (
        <blockquote className="border-l-4 border-emerald-600 pl-6 py-2 my-6 italic text-gray-700 bg-gray-50 rounded-r-lg">
          {children}
        </blockquote>
      ),
      [INLINES.HYPERLINK]: (node: any, children: ReactNode) => (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 hover:underline"
        >
          {children}
        </a>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const file = node?.data?.target?.fields?.file;
        const title = node?.data?.target?.fields?.title || "Embedded image";

        if (!file?.url) return null;

        return (
          <div className="my-8">
            <Image
              src={`https:${file.url}`}
              alt={title}
              width={file?.details?.image?.width || 1200}
              height={file?.details?.image?.height || 700}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        );
      },
    },
  };
};

export default function RichContent({
  content,
  className = "",
  variant = "article",
}: RichContentProps) {
  if (!content) return null;

  if (typeof content === "string") {
    return (
      <div
        className={`prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-emerald-600 ${className}`.trim()}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  return (
    <div className={className}>
      {documentToReactComponents(content, getRichTextOptions(variant))}
    </div>
  );
}
