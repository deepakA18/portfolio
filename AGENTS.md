# Portfolio project

## Product direction

Build a personal portfolio closely following https://leerob.com. The user explicitly dropped the guestbook and rejected the centered shud.in-like layout. Match Lee's current serif typography, a single left biography with no Default/Long controls, Notes and Blogs lists, and large right-side illustration. Do not add a guestbook. Preserve this reference direction over conflicting skill defaults. Do not invent biography, employment history, or projects; identify sample content clearly.

## Repository structure

The portfolio root is the user's primary Git repository. Track `site/` as ordinary source files, never as an embedded Git repository or gitlink. Do not initialize another repository inside `site/`. If the Sites publishing workflow needs its own repository, use a separate checkout outside this repository and synchronize the application source there. Deployment archives and `.git-backups/` are local-only and ignored.

## Requested frontend resources

The user explicitly requested these resources. Read and apply their relevant instructions when resuming design, implementation, and verification. User instructions and the chosen reference sites take precedence over conflicting skill defaults.

- **Taste Skill**: `~/.codex/skills/design-taste-frontend/SKILL.md`. Source: https://github.com/Leonxlnx/taste-skill/tree/main/skills/taste-skill. Use for typography, spacing, layout, and visual review.
- **Web-design guidelines**: `~/.codex/skills/web-design-guidelines/SKILL.md`. Source: https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines. Use for accessibility and interface review; retrieve its current guidelines when reviewing.
- **Awesome Design MD**: `.design-references/awesome-design-md/README.md` and `.design-references/awesome-design-md/design-md/*/DESIGN.md`. Source: https://github.com/VoltAgent/awesome-design-md. This is a design reference library, not an upstream installable skill. Consult relevant documents without replacing the user's visual direction with another brand.
- **Image to Code**: `~/.codex/skills/image-to-code/SKILL.md`. Source: https://github.com/Leonxlnx/imagegen-skills/tree/main/skills/image-to-code. Use its visual-reference and design-to-code workflow, keeping references consistent with the requested minimal portfolio.
- **Playwright CLI**: `~/.codex/skills/playwright-cli/SKILL.md`. Source: https://github.com/microsoft/playwright-cli/tree/main/skills/playwright-cli. Use for responsive browser checks, navigation, keyboard interactions, and guestbook behavior. The skill is installed; check CLI availability before running browser verification.

The reference library is a sparse checkout containing its README, license, and design documents. Keep it out of application bundles and deployment archives.
