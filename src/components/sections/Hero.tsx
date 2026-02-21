"use client";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Ruler, ShieldCheck, Milestone, MapPin, HardHat, Construction, Activity } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-jde-black">
      {/* Grade de Engenharia em Background */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(var(--color-jde-gray) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8"
        >
          <div className="flex items-center gap-4 mb-10">
            <span className="h-px w-12 bg-jde-orange" />
            <span className="text-jde-orange text-xs font-black tracking-[0.4em] uppercase">
              Established 2012 • Infrastructure Leaders
            </span>
          </div>
          
          <h1 className="text-6xl md:text-[140px] font-headline text-white leading-[0.8] mb-8 tracking-tighter uppercase">
            PROJETANDO <br />
            A <span className="text-outline">SOBERANIA</span> <br />
            DO SUDOESTE.
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-500 font-light mb-12 max-w-2xl leading-relaxed">
            A **JDE Pacheco** une solidez técnica e inovação de engenharia para entregar obras monumentais. De pavimentação industrial a megaprojetos de infraestrutura.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <button className="btn-safety flex items-center gap-3 group">
              Solicitar Análise de Projeto
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 border-2 border-white/10 text-white font-bold hover:bg-white hover:text-jde-black transition-all duration-500 uppercase text-xs tracking-widest">
              Consultar Portfólio B2B
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="lg:col-span-4 relative hidden lg:block"
        >
          <div className="industrial-card border-l-4 border-jde-orange bg-zinc-900/50 backdrop-blur-xl">
             <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-jde-orange flex items-center justify-center">
                   <Activity className="text-white w-6 h-6" />
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase text-zinc-500 tracking-widest leading-none">Status de Operação</p>
                   <p className="text-sm font-bold text-jde-orange">46 PROJETOS EM MONITORAMENTO</p>
                </div>
             </div>
             
             <div className="space-y-6">
                {[
                  { label: "Precisão de Prazo", val: "100%" },
                  { label: "Fidelidade Técnica", val: "99.8%" },
                  { label: "Domínio Regional", val: "200KM" }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[10px] font-black uppercase mb-2">
                       <span className="text-zinc-500">{stat.label}</span>
                       <span className="text-jde-orange">{stat.val}</span>
                    </div>
                    <div className="h-1 bg-white/5 w-full">
                       <motion.div 
                         initial={{ width: 0 }}
                         animate={{ width: stat.val }}
                         transition={{ delay: 1, duration: 1.5 }}
                         className="h-full bg-jde-orange" 
                       />
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
