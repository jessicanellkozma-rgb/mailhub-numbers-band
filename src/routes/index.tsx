import { createFileRoute } from "@tanstack/react-router";
import { NumbersBand, type NumbersBandStat } from "@/components/NumbersBand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mailhub — Multi-carrier shipping software for B2B ecommerce" },
      {
        name: "description",
        content:
          "Mailhub connects 4 carriers and 9 integrations behind one API call, with MCP-ready tooling for AI agents.",
      },
      { property: "og:title", content: "Mailhub — Shipping software for B2B ecommerce" },
      {
        property: "og:description",
        content: "One API call, all carriers. MCP-ready shipping automation for modern commerce teams.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const homepageStats: NumbersBandStat[] = [
  { value: "4", label: "Carriers" },
  { value: "9", label: "Integrations" },
  { value: "1 API call", label: "All carriers" },
  { value: "MCP-ready", label: "AI agents" },
];

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Shipping infrastructure for B2B ecommerce
        </h1>
        <p className="font-body mt-4 max-w-xl text-base text-muted-foreground">
          Mailhub is the quietly dependable layer between your store and every carrier you ship with.
        </p>
      </section>

      <NumbersBand stats={homepageStats} />
    </main>
  );
}
