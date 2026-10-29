import { posts } from "./posts";
import { siteConfig } from "../site-config";
export const metadata = { title: "Writing" };
export default function Writing() {
  return (
    <main id="main" className="reading-layout">
      <a className="back-link" href="/">
        ← {siteConfig.name}
      </a>
      <h1>Writing</h1>
      <div className="writing-list">
        {posts.map((post) => (
          <a
            className="writing-link"
            href={`/writing/${post.slug}`}
            key={post.slug}
          >
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <span className="article-meta">
              {post.readingTime} read · Sample essay
            </span>
          </a>
        ))}
      </div>
      <footer className="reading-footer">
        Starter essays, ready to be replaced with personal writing.
      </footer>
    </main>
  );
}
