# Extending project presentations on Gqobonco

Gqobonco is the public presentation index for projects across the connected repositories. Each catalog entry is served at:

`https://daemon22.github.io/Gqobonco/projects/<slug>`

## Connect a repository

1. Keep implementation details and release status in the project's own repository.
2. Add or update the project's record in `client/src/data/catalog.ts`, including its stable `slug`, public name, summary, category, status, tags, and `sourceUrl` for the owning repository.
3. Use a clean brand mark for `logoImage` and a scenic/banner asset for `presentationImage`, when the Brand Kit provides both. Put shared presentation assets under `client/public/assets/brandkit/`.
4. Do not create a substitute logo when none is supplied. Set `identityNote` so the page says no mark was provided. Identify concept-only artwork as concept artwork.
5. Add a `projectPortals` entry when the owning repository has approved public information for the full “why / how / development path” sections. Keep evidence limits and maturity clear.
6. Open a pull request to Gqobonco. Its project list, search, detail routes, and research links read from the shared catalog.

The catalog reflects the Founder’s Brand Kit and Master Registry snapshot dated 1 October 2026. Its maturity labels are a dated presentation baseline. Project maintainers should update them when newer public status information is approved; private and sealed work should remain summarized at the level authorized for public display.

The LATTICE identifier-card artwork is a non-issued concept, not a logo or credential. Production Sentinel’s banner is excluded because the Brand Kit flags a typo and sample dashboard values; the clean mark is used instead.


## Linking a project to its live site

Keep `sourceUrl` pointed at the owning repository or public record. Set optional `projectUrl` only when an official repository or project-owned documentation identifies the destination and the page loads as that named project. The project detail then offers both the official project page and its source.

As of 18 October 2026, two catalog entries have verified standalone project pages. [Production Sentinel](https://production-sentinel.netlify.app) is explicitly labeled research-stage and describes its prototype as future work; its URL is recorded in the [Gqobonco catalog](https://github.com/Daemon22/Gqobonco/blob/main/client/src/data/catalog.ts). [HAEL Studio](https://hael-studio-ruby.vercel.app) is the live workspace declared by its [official repository metadata](https://api.github.com/repos/Daemon22/hael-studio). SmartWater Guardian is presented on the Production Sentinel site as its proposed first implementation, not as a separate live site.

The HAEL Foundation GitHub Pages address currently returns generic placeholder text, so both its project detail and ecosystem card point to the [official repository](https://github.com/Daemon22/haelfoundation) instead. The checked repositories for [Lizwi HCIP](https://github.com/Daemon22/Lizwi---HCIP), [xNLP](https://github.com/Daemon22/xnlp), [Craft Engine](https://github.com/Daemon22/craft-engine), and [Manya OS](https://github.com/Daemon22/Manya-OS) do not declare a separate public site; their repository links remain the source paths.
