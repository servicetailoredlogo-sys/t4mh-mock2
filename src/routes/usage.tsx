import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, X } from "lucide-react";
import { InnerHero, PageShell } from "../components/site-chrome";

export const Route = createFileRoute("/usage")({
  head: () => ({ meta: [
    { title: "Usage Policy | T4MH Music" },
    { name: "description", content: "Understand how T4MH Music compositions may be used freely in non-commercial creative contexts." },
    { property: "og:title", content: "Free for Non-Commercial Use | T4MH Music" },
    { property: "og:description", content: "Clear guidance for listening, sharing, attribution, and respectful non-commercial use." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "/usage" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/usage" }] }),
  component: UsagePage,
});

function UsagePage() {
  return <PageShell>
    <InnerHero number="03" eyebrow="Usage policy" title="Made to move." italic="Shared with care." lede="T4MH Music welcomes listening, sharing, and non-commercial creative use while protecting the rights behind every original composition." />
    <section className="policy-intro section-pad"><p className="eyebrow">The simple version</p><blockquote>Free to feel.<br/>Free to share.<br/><em>Never to exploit.</em></blockquote><p>All original compositions are available for non-commercial use. If no money is being made, the music is credited, and the work is treated with respect, the answer is usually yes.</p></section>
    <section className="policy-grid section-pad">
      <article className="policy-card allowed"><span><Check/></span><p className="eyebrow">You may</p><h2>Use with<br/><em>respect.</em></h2><ul><li>Listen and share links to the original music</li><li>Use tracks in personal, educational, or non-commercial creative projects</li><li>Include the music in independent work that is not monetized</li><li>Introduce others to T4MH Music with clear attribution</li></ul></article>
      <article className="policy-card restricted"><span><X/></span><p className="eyebrow">You may not</p><h2>Turn art into<br/><em>inventory.</em></h2><ul><li>Monetize a video, film, stream, podcast, or project using the music</li><li>Resell, redistribute, sample, or claim a composition as your own</li><li>Use the work in advertising, paid promotion, or commercial productions</li><li>Upload the music to royalty, stock, or streaming libraries</li></ul></article>
    </section>
    <section className="credit-section section-pad"><div><p className="eyebrow">Attribution</p><h2>Give the music<br/><em>its name.</em></h2></div><div><p>Wherever practical, include the composition title and credit the artist clearly.</p><pre>“[Track Title]” by Keith<br/>T4MH Music</pre><p>If your project earns revenue, promotes a business, or falls outside these guidelines, ask first.</p><Link className="primary-action" to="/contact">Ask about your project <ArrowUpRight size={15}/></Link></div></section>
  </PageShell>;
}