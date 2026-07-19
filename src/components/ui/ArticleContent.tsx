type ArticleContentProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ArticleContent({
  children,
  className = "",
}: ArticleContentProps) {
  return (
    <article
      className={`
        prose prose-lg max-w-none
        prose-headings:text-solace-ink
        prose-headings:font-semibold
        prose-p:text-slate-600
        prose-p:leading-relaxed
        prose-a:text-solace-700
        prose-a:decoration-solace-300
        prose-a:underline-offset-4
        hover:prose-a:text-solace-800
        prose-li:text-slate-600
        prose-strong:text-solace-ink
        prose-blockquote:rounded-r-xl
        prose-blockquote:border-solace-600
        prose-blockquote:bg-solace-100
        prose-blockquote:px-6
        prose-blockquote:py-4
        prose-blockquote:text-slate-700
        ${className}
      `}
    >
      {children}
    </article>
  );
}
