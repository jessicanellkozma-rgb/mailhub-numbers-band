# Mailhub Numbers Band

Build a single reusable React component called NumbersBand for Mailhub, a B2B ecommerce shipping software platform. Used on Homepage and Automation & AI page templates as a credibility-at-a-glance stat display.

BRAND CONTEXT (Mailhub brand guide):

- Egyptian Blue #38369A (primary)

- Cornflower Blue #768FEC (accent)

- Carbon Black #282520 (text)

- White Smoke #F4F4F2 (backgrounds)

Structured, dependable, quietly confident, never decorative.

SEAN'S WIREFRAME SPEC:

Four bold stat numbers on a dark band, centered, large numbers with small labels beneath, typography only, no card containers. Values are managed in one global CMS setting so they update everywhere at once (this is a content/data detail, not something to build data-fetching for now, just structure the component to accept the values as props).

REAL COPY TO TEST WITH (Homepage variant):

4 / Carriers

9 / Integrations

1 API call / All carriers

MCP-ready / AI agents

(For the AI page's market-context variant, per Sean's doc this same component style shows different stats: "+393% AI retail traffic YoY", "+37% revenue per AI visit", "3 platforms shipped agentic tools", these need source citations shown inline, small and subtle, since Sean's doc requires every stat here be sourced. Build the component to optionally accept a `source` string per stat.)

TYPOGRAPHY (exact classes from brand guide):

- Number: Libre Franklin Bold, display-1 or heading h1 class (44px), large and bold, the dominant visual element

- Label: Mulish Regular, text-sm or caption class (12-14px), muted beneath the number

- Source citation (AI page variant only): Mulish Regular, micro/overline class (11px), very muted, small enough not to compete with the label

STRUCTURE:

1. Full-width dark band (Carbon Black #282520, consistent with CTA band and Hero shell darks)

2. 4 stats in a row, evenly spaced, centered as a group

3. Each stat: large number/value on top, small label beneath, optional tiny source citation beneath the label (AI variant only)

4. No card containers, no borders around each stat, pure typography as Sean's spec states

COLOR:

Numbers in White or White Smoke #F4F4F2 (high contrast against dark band). Consider using Cornflower Blue #768FEC for just the numbers (not labels) to tie this into the established accent-color system, test both plain white and Cornflower Blue for the numbers and use whichever reads stronger without looking gaudy against the dark background.

PROPS / REUSABILITY:

Accept a `stats` array of {value, label, source (optional)} objects, so the same component works with 3 or 4 stats and with or without source citations depending on the page.

RESPONSIVE:

4 columns on desktop, 2x2 grid on tablet, stack to single column on mobile.

WHAT TO AVOID:

No gradients, shadows, or glow effects. No card/border containers per Sean's explicit "typography only" spec, don't add boxes even if it seems like it would look more finished, the spec deliberately wants this bare.

Show me the Homepage variant (4 Carriers / 9 Integrations / 1 API call / MCP-ready) first, then I'll test the AI page variant with sourced stats separately.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/39942fca-1247-4bb0-8c63-60cb7e97a70e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
