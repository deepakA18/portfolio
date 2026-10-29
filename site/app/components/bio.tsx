import { siteConfig } from "../site-config";
export function Bio() {
  return (
    <section className="bio" aria-label="Biography">
      <div className="bio-toolbar">
        <span>Bio</span>
      </div>
      <div id="bio-copy" className="bio-copy">
        {siteConfig.bio.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  );
}
