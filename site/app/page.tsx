import { Bio } from "./components/bio";
import { siteConfig } from "./site-config";
import { notes } from "./notes/notes";
import { posts } from "./writing/posts";
export default function Home() {
  return (
    <main id="main" className="home-layout">
      <article className="home-copy">
        <h1 className="name">{siteConfig.name}</h1>
        <Bio />
        <section className="home-section" aria-labelledby="notes-heading">
          <h2 id="notes-heading">Notes</h2>
          <ul className="notes-list">
            {notes.map((note) => (
              <li key={note.slug}>
                <a href={`/notes/${note.slug}`}>{note.title}</a>
              </li>
            ))}
          </ul>
        </section>
        <section className="home-section" aria-labelledby="blogs-heading">
          <h2 id="blogs-heading">Blogs</h2>
          <div className="blog-list">
            {posts.map((post) => (
              <a
                className="blog-link"
                href={`/writing/${post.slug}`}
                key={post.slug}
              >
                <span>{post.title}</span>
                <time dateTime={post.date}>
                  {new Intl.DateTimeFormat("en", {
                    month: "long",
                    year: "numeric",
                    timeZone: "UTC",
                  }).format(new Date(post.date))}
                </time>
              </a>
            ))}
            <a className="blog-link" href="/projects/this-site">
              <span>Building this website</span>
              <time dateTime="2026-10-29">October 2026</time>
            </a>
          </div>
        </section>
        <footer className="home-footer">
          <p>The notes and first two essays are sample content.</p>
          <a href="/writing">All writing</a>
        </footer>
      </article>
      <aside className="artwork">
        <img
          src="/images/landscape.webp"
          width="1000"
          height="1500"
          fetchPriority="high"
          alt="A colorful illustration of an imaginary riverside city, blue skies, green hills, and a garden of red and pink flowers."
        />
      </aside>
    </main>
  );
}
