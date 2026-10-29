import { notFound } from "next/navigation";
import { siteConfig } from "../../site-config";
import { posts } from "../posts";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return { title: post?.title ?? "Not found", description: post?.description };
}
export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  return (
    <main id="main" className="reading-layout">
      <a href="/" className="back-link">
        ← {siteConfig.name}
      </a>
      <article>
        <h1>{post.title}</h1>
        <p className="article-meta">
          {new Intl.DateTimeFormat("en", {
            dateStyle: "long",
            timeZone: "UTC",
          }).format(new Date(post.date))}{" "}
          · {post.readingTime} read · Sample essay
        </p>
        <div className="article-body">
          {post.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>
      <footer className="reading-footer">
        <a href="/writing">All writing</a>
      </footer>
    </main>
  );
}
