import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Check, Pause, Play, Send, X } from "lucide-react";

import keithPortrait from "../assets/keith-composer.jpg";
import { PageShell } from "../components/site-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "T4MH Music | Original Compositions by Keith" },
      { name: "description", content: "Original symphonic, cinematic, rock, jazz, and vocal compositions by Keith at T4MH Music." },
      { property: "og:title", content: "T4MH Music | Music Beyond Words" },
      { property: "og:description", content: "An independent listening room for original music composed for emotion, story, and connection." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const tracks = [
  { title: "Book of Spells", type: "Cinematic · Symphonic", note: "A dark orchestral passage through mystery, wonder, and the unknown.", duration: "04:36", bars: [24,42,31,58,46,71,34,63,48,78,53,67,39,72,44,61,33,50,27,43,24,36] },
  { title: "Haunted", type: "Atmospheric · Vocal", note: "An intimate meditation on memory and the places that remain within us.", duration: "05:12", bars: [20,28,46,35,60,43,75,54,40,68,47,83,57,70,38,62,45,52,31,42,25,19] },
];

function Waveform({ active }: { active: boolean }) {
  return <div className={`waveform ${active ? "is-playing" : ""}`} aria-hidden="true">
    {[22,36,50,30,64,42,78,55,34,69,46,86,58,72,39,62,49,76,45,61,33,52,28,40,24,34].map((height, index) => (
      <span key={index} style={{ height: `${height}%`, animationDelay: `${index * 45}ms` }} />
    ))}
  </div>;
}

function Player({ track, index, active, onToggle }: { track: typeof tracks[number]; index: number; active: boolean; onToggle: () => void }) {
  return <article className="track-row">
    <span className="track-number">0{index + 1}</span>
    <button className="play-button" onClick={onToggle} aria-label={`${active ? "Pause" : "Play"} ${track.title}`}>
      {active ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
    </button>
    <div className="track-copy">
      <p>{track.type}</p>
      <h3>{track.title}</h3>
      <span>{track.note}</span>
    </div>
    <Waveform active={active} />
    <time>{track.duration}</time>
  </article>;
}

function Index() {
  const [playing, setPlaying] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = mainRef.current?.querySelectorAll(".reveal");
    if (!sections) return;
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("revealed");
    }), { threshold: 0.12 });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return <PageShell>
    <section id="home" className="hero">
      <div className="staff staff-one"><i/><i/><i/><i/><i/></div>
      <div className="staff staff-two"><i/><i/><i/><i/><i/></div>
      <div className="hero-note" aria-hidden="true">𝄞</div>
      <div className="hero-content">
        <p className="eyebrow">Original compositions by Keith</p>
        <h1>Music<br/><em>Beyond</em> Words</h1>
        <p className="hero-lede">Symphonic, cinematic, instrumental, and vocal works composed for emotion, story, and human connection.</p>
        <div className="hero-actions">
          <Link className="primary-action" to="/music"><Play size={15} fill="currentColor" /> Enter the listening room</Link>
          <Link className="text-action" to="/about">Discover the story <ArrowDown size={15}/></Link>
        </div>
      </div>
      <div className="hero-footer"><span>T4MH / Independent music studio</span><span>Scroll to listen</span></div>
    </section>

    <section id="music" className="music-section section-pad reveal">
      <div className="section-intro">
        <div><p className="eyebrow">Selected works · 01</p><h2>Featured<br/><em>compositions</em></h2></div>
        <p>Music that moves between genres, guided by feeling rather than formula. Press play and step inside.</p>
      </div>
      <div className="tracks">
        {tracks.map((track,index) => <Player key={track.title} track={track} index={index} active={playing === index} onToggle={() => setPlaying(playing === index ? null : index)} />)}
      </div>
      <div className="genre-line"><span>Symphonic</span><i/><span>Cinematic</span><i/><span>Rock</span><i/><span>Jazz</span><i/><span>Vocal</span></div>
    </section>

    <section id="about" className="about-section reveal">
      <figure className="portrait-wrap"><img src={keithPortrait} alt="Composer seated beside a piano" loading="lazy" width={1408} height={1808}/><figcaption>Keith · Founder & composer</figcaption></figure>
      <div className="about-copy section-pad">
        <p className="eyebrow">The composer · 02</p>
        <h2>A lifetime<br/>in <em>sound.</em></h2>
        <p className="drop-copy">Keith is a lifelong multi-instrumentalist and composer creating original symphonic, rock, jazz, and cinematic works that communicate human emotion beyond commercial constraints.</p>
        <p>T4MH Music is a space for artistic freedom—where every arrangement begins with a feeling, and every note serves the story.</p>
        <div className="signature">Keith</div>
      </div>
    </section>

    <section id="philosophy" className="philosophy-section section-pad reveal">
      <p className="eyebrow">The philosophy · 03</p>
      <blockquote>“Where words end,<br/><em>music begins.</em>”</blockquote>
      <div className="philosophy-grid">
        <p>Not made to chase trends.<br/>Not confined by genre.<br/>Not measured by commerce.</p>
        <p>T4MH Music exists to explore what can only be expressed in sound: memory, tension, wonder, loss, hope—and everything between.</p>
      </div>
      <div className="score-rule"><span>𝄞</span></div>
    </section>

    <section id="usage" className="usage-section section-pad reveal">
      <div className="usage-heading"><p className="eyebrow">An open invitation · 04</p><h2>Free for<br/><em>non-commercial use.</em></h2></div>
      <div className="usage-content">
        <p>The music is here to be heard, shared, and lived with. Listeners and independent creators are welcome to use original T4MH compositions in non-commercial creative work.</p>
        <ul>
          <li><Check size={16}/> Listen and share freely</li>
          <li><Check size={16}/> Use in non-commercial creative projects</li>
          <li><Check size={16}/> Credit T4MH Music and respect the artist</li>
          <li className="restricted"><X size={16}/> No monetization, resale, or commercial exploitation</li>
        </ul>
        <Link className="text-action" to="/contact">Ask about usage <ArrowUpRight size={15}/></Link>
      </div>
    </section>

    <section id="contact" className="contact-section section-pad reveal">
      <div className="contact-copy"><p className="eyebrow">Connect · 05</p><h2>Let’s make<br/>something <em>felt.</em></h2><p>For creative inquiries, collaborations, or questions about music usage, get in touch.</p></div>
      <form onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
        <label>Name<input name="name" required placeholder="Your name"/></label>
        <label>Email<input name="email" type="email" required placeholder="you@example.com"/></label>
        <label>Message<textarea name="message" required rows={4} placeholder="Tell me what you're creating..."/></label>
        <button className="primary-action" type="submit">{sent ? <><Check size={16}/> Message ready</> : <>Send inquiry <Send size={15}/></>}</button>
        {sent && <p className="form-note">Thank you. Your message has been prepared for Keith.</p>}
      </form>
    </section>

  </PageShell>;
}