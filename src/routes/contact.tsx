import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Send } from "lucide-react";
import { useState } from "react";
import { InnerHero, PageShell } from "../components/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Keith | T4MH Music" },
    { name: "description", content: "Contact T4MH Music about creative collaborations, original compositions, or music usage." },
    { property: "og:title", content: "Connect with T4MH Music" },
    { property: "og:description", content: "Start a conversation about music, collaboration, storytelling, or usage." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "/contact" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/contact" }] }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return <PageShell>
    <InnerHero number="04" eyebrow="Connect" title="Begin with" italic="a feeling." lede="For collaborations, creative inquiries, or thoughtful questions about the music, Keith would be glad to hear from you." />
    <section className="contact-page section-pad">
      <div className="contact-aside"><p className="eyebrow">Start a conversation</p><h2>What are you<br/><em>creating?</em></h2><p>Whether you are an independent filmmaker, fellow artist, listener, or creator exploring a new idea, share the story behind it.</p><div className="inquiry-types"><span>Film & television</span><span>Collaboration</span><span>Usage permission</span><span>Listener notes</span></div><Link className="text-action" to="/usage">Read the usage policy</Link></div>
      <form onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
        <div className="form-row"><label>Name<input required name="name" placeholder="Your name"/></label><label>Email<input required type="email" name="email" placeholder="you@example.com"/></label></div>
        <label>I’m reaching out about<select name="subject" defaultValue=""><option value="" disabled>Select an inquiry</option><option>Creative collaboration</option><option>Music usage</option><option>Film or television</option><option>A note for Keith</option></select></label>
        <label>Message<textarea required name="message" rows={6} placeholder="Tell Keith what you’re creating, feeling, or wondering..."/></label>
        <button type="submit" className="primary-action">{sent ? <><Check size={16}/> Message ready</> : <>Send inquiry <Send size={15}/></>}</button>
        {sent && <p className="form-note">Thank you. Your message has been prepared for Keith.</p>}
      </form>
    </section>
  </PageShell>;
}