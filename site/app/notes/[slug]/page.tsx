import { notFound } from "next/navigation";
import { siteConfig } from "../../site-config";
import { notes } from "../notes";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return { title: notes.find((n) => n.slug === slug)?.title ?? "Not found" };
}
export default async function Note({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);
  if (!note) notFound();
  return (
    <main id="main" className="reading-layout">
      <a className="back-link" href="/">
        ← {siteConfig.name}
      </a>
      <article>
        <h1>{note.title}</h1>
        <p className="article-meta">Sample note</p>
        <div className="article-body">
          {note.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </article>
      <footer className="reading-footer">
        <a href="/">Back to all notes</a>
      </footer>
    </main>
  );
}
