import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { InnerHero, PageShell } from "../components/site-chrome";
import keithPortrait from "../assets/keith-composer.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Keith | T4MH Music" },
    { name: "description", content: "Meet Keith, the lifelong multi-instrumentalist and independent composer behind T4MH Music." },
    { property: "og:title", content: "About the Composer | T4MH Music" },
    { property: "og:description", content: "A life shaped by instruments, composition, and the emotional language of sound." },
    { property: "og:type", content: "profile" },
    { property: "og:url", content: "/about" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/about" }] }),
  component: AboutPage,
});

function AboutPage() {
  return <PageShell>
    <InnerHero number="02" eyebrow="The composer" title="A lifetime" italic="in sound." lede="For Keith, composition is not an exercise in genre. It is a way of understanding what it means to be human." />
    <section className="composer-story">
      <figure><img src={keithPortrait} alt="Composer seated beside a piano" width={1408} height={1808}/><figcaption>Keith · Composer / Multi-instrumentalist</figcaption></figure>
      <div className="story-copy section-pad"><p className="eyebrow">The story</p><h2>Instinct first.<br/><em>Feeling always.</em></h2><p className="story-lead">Keith is a lifelong multi-instrumentalist whose work moves naturally between symphonic scale, cinematic atmosphere, the raw energy of rock, and the spontaneous language of jazz.</p><p>T4MH Music grew from a simple belief: the most meaningful music begins beyond explanation. It is shaped by curiosity, careful listening, and the courage to follow an idea wherever it leads.</p><p>Every work is written as an honest piece of emotional storytelling—independent of commercial formulas and open to listeners around the world.</p><div className="signature">Keith</div></div>
    </section>
    <section className="practice-section section-pad">
      <p className="eyebrow">The practice</p>
      <div className="practice-grid">
        {[['01','Composition','Original themes and complete works built around emotional narrative.'],['02','Arrangement','Instrumental and vocal arrangements with clarity, movement, and depth.'],['03','Sound for picture','Cinematic compositions shaped for film, television, and visual storytelling.'],['04','Cross-genre work','Symphonic, rock, jazz, vocal, and instrumental languages in conversation.']].map(([n,title,copy]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}
      </div>
      <div className="about-cta"><blockquote>Music is the part<br/>that <em>remains.</em></blockquote><Link className="primary-action" to="/music">Enter the listening room <ArrowUpRight size={15}/></Link></div>
    </section>
  </PageShell>;
}