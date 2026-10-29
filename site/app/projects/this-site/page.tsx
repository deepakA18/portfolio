import { siteConfig } from "../../site-config";
export const metadata = { title: "Building this website" };
export default function ThisSite() {
  return (
    <main id="main" className="reading-layout">
      <a href="/" className="back-link">
        ← {siteConfig.name}
      </a>
      <article>
        <h1>Building this website</h1>
        <p className="article-meta">October 29, 2026</p>
        <div className="article-body">
          <p>
            This website takes its visual direction from{" "}
            <a href="https://leerob.com" target="_blank" rel="noreferrer">
              Lee Robinson’s personal site
            </a>
            : serif typography, a simple biography, lists of notes and essays,
            and a large illustration alongside the text.
          </p>
          <h2>A place to read</h2>
          <p>
            The homepage keeps the content in a comfortable reading column.
            Short notes and longer essays have their own pages. The biography
            keeps the introduction short and easy to read.
          </p>
          <h2>A little color</h2>
          <p>
            The illustration was created for this site. Its imaginary city,
            river, and garden bring color to an otherwise simple page.
          </p>
          <h2>Room to grow</h2>
          <p>
            The notes and first two essays are starter content. They show how
            the site will feel as personal writing and projects are added.
          </p>
        </div>
      </article>
      <footer className="reading-footer">
        <a href="/">Back home</a>
      </footer>
    </main>
  );
}
