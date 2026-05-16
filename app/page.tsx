
import React from 'react';

interface SectionProps {
  title: React.ReactNode | string;
  children?: React.ReactNode;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, id }) => (
  <section id={id} className="py-24 px-6 md:px-20 border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm">
    <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-white to-blue-400 drop-shadow-lg">
      {title}
    </h2>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-rose-500/30">
      {/* HERO SECTION */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-14648010335H-f1f7da25713d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-6 italic text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            RESONANCE <br />
            <span className="text-rose-500 drop-shadow-[0_0_20px_rgba(225,29,72,0.6)]">OF THE SOUL</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-100 max-w-3xl mx-auto mb-12 font-light italic leading-relaxed drop-shadow-md">
            "The world was no longer a place of walls... <br className="hidden md:block" /> but the residue of a dream remains."
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#plot" className="px-10 py-4 bg-rose-600 hover:bg-rose-500 transition-all rounded-full font-bold text-white uppercase tracking-widest shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:scale-105 active:scale-95">
              Explore the Story
            </a>
            <a href="#characters" className="px-10 py-4 bg-transparent hover:bg-slate-100 hover:text-slate-950 transition-all rounded-full font-bold text-white uppercase tracking-widest border-2 border-white shadow-sm hover:scale-105 active:scale-95">
              Meet the Echoes
            </a>
          </div>
        </div>
      </div>

      {/* PLOT SECTION */}
      <Section title="The Legend Returns" id="plot">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-xl text-slate-100 leading-relaxed font-light">
            <p className="bg-slate-900/40 p-6 rounded-2xl border-l-4 border-rose-500">
              Centuries after the great sacrifice, Earth is a lush paradise of bioluminescent forests and floating isles. But beneath the peace lies a dormant echo.
            </p>
            <p>
              Luna, a girl haunted by fragments of a life she never lived, discovers a relic of a forgotten age—the red chassis of a FRANXX. Her touch awakens a resonance that spans a thousand years, calling back the souls of those who once loved beyond the stars.
            </p>
            <p className="text-rose-400 font-medium italic text-2xl">
              As the "Void-Eaters" descend to return the world to a sterile stasis, a new generation of pilots must learn that a true connection is not about compatibility, but about destiny.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-rose-500 to-blue-500 rounded-3xl blur-lg opacity-50 group-hover:opacity-80 transition duration-1000"></div>
            <div className="relative bg-slate-900 rounded-3xl p-3 border border-slate-700 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1614850715962-8571b97eef3b?auto=format&fit=crop&q=80&w=800" alt="Symmetry" className="rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700" />
              <p className="mt-4 mb-2 text-lg text-slate-200 text-center font-medium">"The Jian: Two halves of a singular entity."</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CHARACTERS SECTION */}
      <Section title="The Echoes" id="characters">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { name: 'Luna', role: 'The Echo of Zero Two', desc: 'A Seeker with crimson hair and eyes of rose-pink, carrying the burden of a thousand-year-old love.', color: 'text-rose-500', border: 'border-rose-500/50', img: 'https://images.unsplash.com/photo-1534528741775-276bb85e3912?auto=format&fit=crop&q=80&w=400' },
            { name: 'Haruto', role: 'The Echo of Hiro', desc: 'A silent observer from the North, possessing a deep resonance and a soul that recognizes its partner.', color: 'text-blue-400', border: 'border-blue-500/50', img: 'https://images.unsplash.com/photo-1506790153644-7b6d7e7d577d?auto=format&fit=crop&q=80&w=400' },
            { name: 'Kael', role: 'The Grounded Anchor', desc: 'The heart of Aethel, fighting to keep the new generation connected to the peace of the earth.', color: 'text-emerald-400', border: 'border-emerald-500/50', img: 'https://images.unsplash.com/photo-1507003211169-b1dd7054aae6?auto=format&fit=crop&q=80&w=400' }
          ].map((char, i) => (
            <div key={i} className={`bg-slate-900 p-8 rounded-3xl border-2 ${char.border} hover:border-white transition-all group shadow-xl hover:scale-105`}>
              <img src={char.img} className="w-full h-72 object-cover rounded-2xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500" alt={char.name} />
              <h3 className={`text-3xl font-bold ${char.color} mb-2 drop-shadow-md`}>{char.name}</h3>
              <p className="text-slate-100 font-semibold mb-3 text-lg">{char.role}</p>
              <p className="text-slate-300 text-base leading-relaxed font-light">{char.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT / CALL TO ACTION */}
      <Section title="Join the Resonance" id="contact">
        <div className="max-w-4xl mx-auto bg-slate-900 p-12 rounded-3xl border border-slate-700 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 via-white to-blue-500"></div>
          <p className="text-2xl text-slate-100 mb-10">
            Stay updated on the release of <strong className="text-rose-500 font-bold">Resonance of the Soul</strong>.
          </p>
          <form className="flex flex-col md:flex-row gap-6 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 max-w-md px-6 py-4 rounded-full bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-rose-500 transition-all shadow-inner"
            />
            <button className="px-12 py-4 bg-rose-600 hover:bg-rose-500 rounded-full font-bold text-white transition-all uppercase tracking-widest shadow-lg hover:scale-105 active:scale-95">
              Subscribe
            </button>
          </form>
          <p className="mt-8 text-sm text-slate-400 italic">
            The resonance is calling. Will you answer?
          </p>
        </div>
      </Section>

      <footer className="py-12 text-center text-slate-400 text-sm border-t border-slate-900 bg-slate-950">
        © 2026 DARLING in the FRANXX: Season 2 Project. All rights reserved.
      </footer>
    </main>
  );
}
