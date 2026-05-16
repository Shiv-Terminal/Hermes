import React from 'react';

interface SectionProps {
  title: React.ReactNode | string;
  children?: React.ReactNode;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, id }) => (
  <section id={id} className="py-20 px-6 md:px-20 border-b border-slate-800">
    <h2 className="text-4xl md:text-6xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-blue-400">
      {title}
    </h2>
    {children}
  </section>
);

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-14648010335H-f1f7da25713d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter mb-6 italic text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
            RESONANCE <br />
            <span className="text-rose-500">OF THE SOUL</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto mb-10 font-light italic drop-shadow-md">
            "The world was no longer a place of walls... but the residue of a dream remains."
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#plot" className="px-8 py-3 bg-rose-600 hover:bg-rose-700 transition-all rounded-full font-bold text-white uppercase tracking-widest shadow-xl">
              Explore the Story
            </a>
            <a href="#characters" className="px-8 py-3 bg-slate-700 hover:bg-slate-600 transition-all rounded-full font-bold text-white uppercase tracking-widest border border-slate-500 shadow-xl">
              Meet the Echoes
            </a>
          </div>
        </div>
      </div>

      {/* PLOT SECTION */}
      <Section title="The Legend Returns" id="plot">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              Centuries after the great sacrifice, Earth is a lush paradise of bioluminescent forests and floating isles. But beneath the peace lies a dormant echo.
            </p>
            <p>
              Luna, a girl haunted by fragments of a life she never lived, discovers a relic of a forgotten age—the red chassis of a FRANXX. Her touch awakens a resonance that spans a thousand years, calling back the souls of those who once loved beyond the stars.
            </p>
            <p className="text-rose-400 italic">
              As the "Void-Eaters" descend to return the world to a sterile stasis, a new generation of pilots must learn that a true connection is not about compatibility, but about destiny.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-slate-900 rounded-2xl p-4 border border-slate-800">
              <img src="https://images.unsplash.com/photo-1614850715962-8571b97eef3b?auto=format&fit=crop&q=80&w=800" alt="Symmetry" className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500" />
              <p className="mt-4 text-sm text-slate-500 text-center italic">"The Jian: Two halves of a singular entity."</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CHARACTERS SECTION */}
      <Section title="The Echoes" id="characters">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Luna', role: 'The Echo of Zero Two', desc: 'A Seeker with crimson hair and eyes of rose-pink, carrying the burden of a thousand-year-old love.', color: 'text-rose-500', img: 'https://images.unsplash.com/photo-1534528741775-276bb85e3912?auto=format&fit=crop&q=80&w=400' },
            { name: 'Haruto', role: 'The Echo of Hiro', desc: 'A silent observer from the North, possessing a deep resonance and a soul that recognizes its partner.', color: 'text-blue-400', img: 'https://images.unsplash.com/photo-1506790 laH-f1f7da25713d?auto=format&fit=crop&q=80&w=400' },
            { name: 'Kael', role: 'The Grounded Anchor', desc: 'The heart of Aethel, fighting to keep the new generation connected to the peace of the earth.', color: 'text-emerald-400', img: 'https://images.unsplash.com/photo-1507003211169-b1dd7054aae6?auto=format&fit=crop&q=80&w=400' }
          ].map((char, i) => (
            <div key={i} className="bg-slate-900/50 p-6 rounded-3xl border border-slate-800 hover:border-rose-600 transition-all group">
              <img src={char.img} className="w-full h-64 object-cover rounded-2xl mb-6 grayscale group-hover:grayscale-0 transition-all" alt={char.name} />
              <h3 className={`text-2xl font-bold ${char.color} mb-2`}>{char.name}</h3>
              <p className="text-slate-400 font-medium mb-3">{char.role}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{char.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT / CALL TO ACTION */}
      <Section title="Join the Resonance" id="contact">
        <div className="max-w-3xl mx-auto bg-slate-900 p-10 rounded-3xl border border-slate-800 text-center">
          <p className="text-xl text-slate-300 mb-8">
            Stay updated on the release of <strong className="text-rose-500">Resonance of the Soul</strong>.
          </p>
          <form className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-3 rounded-full bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-rose-500 transition-all"
            />
            <button className="px-10 py-3 bg-rose-600 hover:bg-rose-700 rounded-full font-bold text-white transition-all uppercase tracking-widest">
              Subscribe
            </button>
          </form>
          <p className="mt-6 text-xs text-slate-600">
            The resonance is calling. Will you answer?
          </p>
        </div>
      </Section>

      <footer className="py-10 text-center text-slate-600 text-sm border-t border-slate-900">
        © 2026 DARLING in the FRANXX: Season 2 Project. All rights reserved.
      </footer>
    </main>
  );
}
