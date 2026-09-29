import { createFileRoute, Link } from "@tanstack/react-router";
import { Pause, Play } from "lucide-react";
import { useState } from "react";
import { InnerHero, PageShell } from "../components/site-chrome";

export const Route = createFileRoute("/music")({
  head: () => ({ meta: [
    { title: "Music | T4MH Music" },
    { name: "description", content: "Enter the T4MH Music listening room for original symphonic, cinematic, rock, jazz, and vocal compositions." },
    { property: "og:title", content: "The Listening Room | T4MH Music" },
    { property: "og:description", content: "Original compositions by Keith, moving freely between sound, story, and emotion." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "/music" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/music" }] }),
  component: MusicPage,
});

const catalogue = [
  { title: "Book of Spells", genre: "Cinematic · Symphonic", duration: "04:36", description: "A dark orchestral passage through mystery, wonder, and the unknown.", bars: [26,43,31,66,48,78,39,59,35,72,49,84,53,68,40,57,33,51,28,42] },
  { title: "Haunted", genre: "Atmospheric · Vocal", duration: "05:12", description: "An intimate meditation on memory and the places that remain within us.", bars: [20,32,48,37,63,46,81,55,38,70,44,76,51,66,36,58,41,50,29,24] },
  { title: "The Crossing", genre: "Orchestral · Instrumental", duration: "06:04", description: "A patient ascent from solitude into a vast and luminous horizon.", bars: [18,28,36,52,42,61,48,69,55,78,62,86,67,73,50,64,44,55,37,28] },
  { title: "After Midnight", genre: "Jazz · Noir", duration: "03:48", description: "Muted brass, restless keys, and the quiet pulse of a city after dark.", bars: [31,51,34,60,42,69,37,57,46,72,39,63,48,81,44,67,38,55,33,46] },
];

function MusicPage() {
  const [active, setActive] = useState<number | null>(null);
  const [filter, setFilter] = useState("All works");
  const filters = ["All works", "Symphonic", "Cinematic", "Jazz", "Vocal"];
  const shown = filter === "All works" ? catalogue : catalogue.filter((track) => track.genre.includes(filter));
  return <PageShell>
    <InnerHero number="01" eyebrow="The listening room" title="Sound without" italic="boundaries." lede="Original work composed for the space between image and feeling. Choose a piece, close your eyes, and listen." />
    <section className="catalogue section-pad">
      <div className="catalogue-tools"><p>{shown.length.toString().padStart(2, "0")} compositions</p><div>{filters.map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}</button>)}</div></div>
      <div className="catalogue-list">
        {shown.map((track) => {
          const index = catalogue.indexOf(track);
          const playing = active === index;
          return <article className="catalogue-track" key={track.title}>
            <span className="track-number">{(index + 1).toString().padStart(2,"0")}</span>
            <button className="play-button" onClick={() => setActive(playing ? null : index)} aria-label={`${playing ? "Pause" : "Play"} ${track.title}`}>{playing ? <Pause size={18} fill="currentColor"/> : <Play size={18} fill="currentColor"/>}</button>
            <div className="catalogue-title"><p>{track.genre}</p><h2>{track.title}</h2><span>{track.description}</span></div>
            <div className={`wide-wave ${playing ? "is-playing" : ""}`}>{track.bars.map((bar,i) => <i key={i} style={{ height: `${bar}%`, animationDelay: `${i*50}ms` }}/>)}</div>
            <time>{track.duration}</time>
          </article>;
        })}
      </div>
      <div className="music-note"><span>𝄞</span><p>More original compositions are being prepared for the listening room.</p><Link className="text-action" to="/contact">Connect with Keith</Link></div>
    </section>
  </PageShell>;
}