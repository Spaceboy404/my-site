import React, { useState } from "react";
import { motion } from "framer-motion";
import LogoMark from "./LogoMark";
import {
  ArrowRight,
  Mail,
  Shield,
  Leaf,
  FlaskConical,
  Factory,
  ChevronRight,
  Sparkles,
  Phone
} from "lucide-react";

// NOTE: Eurostile is a licensed font and not hosted by default. If you own it,
// add a @font-face in your app or include your kit. We set a sensible fallback stack.
// Montserrat is pulled from Google Fonts below for body text.

export default function ThermweaveLanding() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with your real email. This uses a simple mailto fallback.
    const target = "hello@thermweave.co"; // ← change me
    const subject = `Thermweave Inquiry — ${form.company || form.name || "Website"}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`;
    const mailto = `mailto:${encodeURIComponent(target)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  const navItems = [
    { href: "#technology", label: "Technology" },
    { href: "#applications", label: "Applications" },
    { href: "#performance", label: "Performance" },
    { href: "#sustainability", label: "Sustainability" },
    { href: "#partners", label: "Partners" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Head */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <style>{`
        :root { --tw-brand: 72 119 255; }
        .font-display { font-family: 'Eurostile', 'Eurostile Extended', 'Microgramma', system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif; }
        .font-body { font-family: 'Montserrat', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif; }
        .glass { backdrop-filter: blur(10px); background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03)); border: 1px solid rgba(255,255,255,0.08); }
        .gradient-ring-top { background: radial-gradient(1200px 600px at 10% -10%, rgba(56,189,248,0.12), transparent 50%), radial-gradient(1000px 600px at 90% 10%, rgba(99,102,241,0.12), transparent 40%); }
        .gradient-ring-bottom { background: radial-gradient(1200px 600px at 10% 110%, rgba(56,189,248,0.12), transparent 50%), radial-gradient(1000px 600px at 90% 110%, rgba(99,102,241,0.12), transparent 40%); }

      `}</style>

      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 glass">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-1 group">
              <LogoMark className="h-12 w-12" />
              <span className="font-display text-lg tracking-wide group-hover:opacity-90">THERMWEAVE</span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-sky-400/10 px-4 py-2 text-sm text-sky-300 ring-1 ring-sky-500/30 hover:bg-sky-400/20">
                <Mail className="h-4 w-4" /> Get in touch
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden gradient-ring-top">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-sky-300">
                <Sparkles className="h-3.5 w-3.5" /> New: Thermally conductive textiles (not heating)
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
                Engineered cooling—
                <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">without electronics</span>
              </h1>
              <p className="font-body mt-5 max-w-xl text-slate-300">
                Thermweave develops breathable fabrics enhanced with a durable, wash‑resistant
                dip‑coated layer that conducts heat away from the body. Designed for high‑performance
                apparel, bedding, and mission‑ready gear.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl bg-sky-500 px-5 py-3 font-medium text-slate-950 hover:bg-sky-400">
                  Talk to us <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#technology" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 text-slate-200 hover:bg-white/5">
                  Learn more <ChevronRight className="h-4 w-4" />
                </a>
              </div>
              <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
                {[
                  { label: "Wash durability", value: "Target: <20% loss @100 cycles" },
                  { label: "Manufacturing", value: "Scalable dip‑coat process" },
                  { label: "Status", value: "In development w/ UNB" },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl border border-white/10 p-4">
                    <dt className="text-xs text-slate-400">{s.label}</dt>
                    <dd className="mt-1 text-sm text-slate-100">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-sky-400/20 via-cyan-300/10 to-indigo-400/20 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-slate-900 p-8 shadow-2xl">
                <div className="mb-3 flex items-center gap-3">
                  <LogoMark className="h-20 w-20" />
                  <div>
                    <p className="font-display text-lg tracking-wide">THERMWEAVE</p>
                    <p className="text-xs text-slate-400">Engineered to Move Heat</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-3"><Shield className="mt-0.5 h-4 w-4 text-emerald-300" /> Skin‑safe chemistry; lab‑validated.
                  </li>
                  <li className="flex items-start gap-3"><Leaf className="mt-0.5 h-4 w-4 text-lime-300" /> Breathable base fabrics; comfort‑first design.</li>
                  <li className="flex items-start gap-3"><Factory className="mt-0.5 h-4 w-4 text-sky-300" /> Process designed for roll‑to‑roll scale.</li>
                  <li className="flex items-start gap-3"><FlaskConical className="mt-0.5 h-4 w-4 text-fuchsia-300" /> Built with university research partners.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section id="technology" className="relative py-20 gradient-ring-bottom">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl">Technology</h2>
              <p className="font-body mt-2 max-w-2xl text-slate-300">
                A thin, conformal coating anchors conductive carbon architectures to fibers, creating
                continuous thermal pathways while preserving drape and airflow. Our surface chemistry is
                optimized for durability and low added weight.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Dip‑coat platform",
                desc: "Uniform coverage across complex weaves with tunable loading for performance vs. handfeel.",
              },
              {
                title: "Fiber‑bonding",
                desc: "Covalent/physical anchoring strategies to resist wash‑off and abrasion.",
              },
              {
                title: "Thermal networks",
                desc: "Graphitized carbon structures form lateral heat‑spreading pathways.",
              },
            ].map((card, i) => (
              <motion.div key={card.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="glass rounded-2xl p-6">
                <h3 className="font-display text-lg">{card.title}</h3>
                <p className="font-body mt-2 text-sm text-slate-300">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section id="applications" className="relative py-20 gradient-ring-top">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl">Applications</h2>
            <p className="font-body mt-2 text-slate-300">
              Early focus on high‑value niches, with a roadmap to broad consumer adoption.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                tag: "Performance apparel",
                blurb: "Long‑haul comfort for athletes and workers under heat stress.",
              },
              {
                tag: "Bedding & mattresses",
                blurb: "Night‑long thermal regulation without active cooling.",
              },
              {
                tag: "Tactical & moto gear",
                blurb: "Heat‑spreading layers for protective garments.",
              },
            ].map(({ tag, blurb }) => (
              <div key={tag} className="rounded-2xl border border-white/10 p-6">
                <span className="text-xs text-sky-300">{tag}</span>
                <p className="mt-2 text-sm text-slate-200">{blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance */}
      <section id="performance" className="relative py-20 gradient-ring-bottom">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl">Performance & Roadmap</h2>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-sky-400" /> Laboratory program underway with UNB partners.</li>
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" /> Targeting <em>roll‑to‑roll</em> process transfer and pilot in 12–18 months.</li>
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-300" /> Wash‑durability goal: &lt; 20% thermal loss after 100 gentle cycles.</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl bg-sky-500 px-5 py-3 font-medium text-slate-950 hover:bg-sky-400">
                  Request the deck <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#partners" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 text-slate-200 hover:bg-white/5">
                  Explore a pilot <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-cyan-400/20 via-sky-300/10 to-indigo-400/20 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-slate-900 p-6">
                <MockSpecCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="relative py-20 gradient-ring-top">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl">Sustainability</h2>
              <p className="font-body mt-2 text-slate-300">
                Cooling comfort without batteries. We prioritize safe chemistries, efficient use of high‑
                performance carbons, and compatibility with existing textile recycling streams.
              </p>
              <ul className="mt-6 space-y-3 text-slate-300">
                <li className="flex items-start gap-3"><Leaf className="mt-0.5 h-4 w-4 text-lime-300" /> Breathability and comfort preserved.</li>
                <li className="flex items-start gap-3"><Shield className="mt-0.5 h-4 w-4 text-emerald-300" /> Testing plan for skin contact & wash effluent.</li>
                <li className="flex items-start gap-3"><Factory className="mt-0.5 h-4 w-4 text-sky-300" /> Retrofits to standard coating lines.</li>
              </ul>
            </div>
            <div className="glass rounded-3xl p-6">
              <h3 className="font-display text-xl">ESG Alignment</h3>
              <p className="font-body mt-2 text-slate-300">
                Thermweave aligns with sustainable manufacturing and circular design principles. We engage with suppliers committed to responsible sourcing of carbon materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="relative py-20 gradient-ring-bottom">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-display text-3xl sm:text-4xl">Partners & Collaboration</h2>
            <p className="font-body mt-2 max-w-2xl text-slate-300">
              We collaborate with the University of New Brunswick and industry groups on testing and scale‑up. We welcome inquiries from apparel, bedding, and technical textile brands.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 p-6">
              <p className="text-sm text-slate-300">Academic research partnership</p>
              <p className="mt-1 font-display text-lg">Applied Nanotechnology Lab (UNB)</p>
            </div>
            {/*<div className="rounded-2xl border border-white/10 p-6">
              <p className="text-sm text-slate-300">Thermal testing</p>
              <p className="mt-1 font-display text-lg">Instruments by Thermtest</p>
            </div>*/}
            <div className="rounded-2xl border border-white/10 p-6">
              <p className="text-sm text-slate-300">Pilot & manufacturing</p>
              <p className="mt-1 font-display text-lg">Seeking partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-24 gradient-ring-top">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl">Let’s build something cool together</h2>
              <p className="font-body mt-2 max-w-xl text-slate-300">
                Interested in pilots, licensing, or co‑development? Send us a note and we’ll get back to you.
              </p>
              <div className="mt-6 rounded-2xl border border-white/10 p-6">
                <p className="text-sm text-slate-300"><Mail className="mr-2 inline h-4 w-4" /> isaac@thermweave.com</p>
                <p className="mt-2 text-sm text-slate-300"><Phone className="mr-2 inline h-4 w-4" /> +1 (506) 333‑4523</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="glass rounded-3xl p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs text-slate-400">Name</label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    placeholder="jane@company.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs text-slate-400">Company</label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    placeholder="Acme Textiles"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs text-slate-400">Message</label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    placeholder="Tell us about your application or partnership idea..."
                  />
                </div>
              </div>
              <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-sky-500 px-5 py-3 font-medium text-slate-950 hover:bg-sky-400">
                Send message <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <a href="#" className="flex items-center gap-3">
              <LogoMark className="h-14 w-14" />
              <span className="font-display text-sm tracking-wide">THERMWEAVE</span>
            </a>
            <p className="text-xs text-slate-500">© {new Date().getFullYear()} Thermweave. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


function MockSpecCard() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-xl border border-white/10 p-4">
        <p className="text-xs text-slate-400">Base fabrics</p>
        <p className="mt-1 text-sm">Polyester, nylon, cotton blends</p>
      </div>
      <div className="rounded-xl border border-white/10 p-4">
        <p className="text-xs text-slate-400">Coating method</p>
        <p className="mt-1 text-sm">Dip‑coat (roll‑to‑roll ready)</p>
      </div>
      <div className="rounded-xl border border-white/10 p-4">
        <p className="text-xs text-slate-400">Key property</p>
        <p className="mt-1 text-sm">Lateral heat spreading</p>
      </div>
      <div className="rounded-xl border border-white/10 p-4">
        <p className="text-xs text-slate-400">Durability goal</p>
        <p className="mt-1 text-sm">&lt; 20% loss @100 gentle cycles</p>
      </div>
    </div>
  );
}
