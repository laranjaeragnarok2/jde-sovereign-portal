"use client";
import { motion } from "framer-motion";
import { Lock, Eye, BarChart, FileText, LayoutDashboard, Database } from "lucide-react";

export default function InvestorHub() {
  return (
    <section className="section-padding bg-jde-black relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
           <div>
              <span className="label-red mb-6 inline-block bg-white text-black px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em]">Institutional Hub</span>
              <h2 className="text-6xl md:text-9xl font-headline text-white mb-8 tracking-tighter leading-none">O PORTAL DO <br/> <span className="text-jde-orange">CONTRATANTE.</span></h2>
              <p className="text-xl text-zinc-500 font-light leading-relaxed mb-12">
                Inspirado na transparência dos maiores grupos de engenharia globais. Oferecemos acesso total ao ciclo de vida da obra, garantindo conformidade técnica e financeira absoluta.
              </p>

              <div className="space-y-8">
                 {[
                   { icon: <Activity className="w-6 h-6" />, title: "Relatórios de Avanço", desc: "Acompanhamento fotográfico e métrico semanal do canteiro." },
                   { icon: <Database className="w-6 h-6" />, title: "Data Room Técnico", desc: "Acesso centralizado a projetos, ARTs e laudos de ensaio." },
                   { icon: <Lock className="w-6 h-6" />, title: "Segurança de Dados", desc: "Interface criptografada para gestão de ativos B2B." }
                 ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start group">
                       <div className="mt-1 text-jde-orange group-hover:scale-110 transition-transform">{item.icon}</div>
                       <div>
                          <h4 className="font-bold text-lg text-white uppercase tracking-tighter mb-1">{item.title}</h4>
                          <p className="text-sm text-zinc-500 font-light">{item.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="relative"
           >
              <div className="industrial-card bg-jde-carbon border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
                 <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-6">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 bg-jde-orange/10 flex items-center justify-center border border-jde-orange/20">
                          <LayoutDashboard className="text-jde-orange w-5 h-5" />
                       </div>
                       <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Restricted Interface</span>
                    </div>
                    <div className="flex gap-2">
                       <div className="w-2 h-2 rounded-full bg-zinc-800" />
                       <div className="w-2 h-2 rounded-full bg-zinc-800" />
                       <div className="w-2 h-2 rounded-full bg-jde-orange animate-pulse" />
                    </div>
                 </div>
                 
                 <div className="space-y-6 mb-12">
                    <div className="h-4 bg-white/5 w-3/4 animate-pulse" />
                    <div className="h-4 bg-white/5 w-1/2 animate-pulse" />
                    <div className="h-20 bg-white/5 w-full animate-pulse" />
                 </div>

                 <button className="w-full py-5 bg-white text-black font-black text-xs uppercase tracking-[0.4em] hover:bg-jde-orange hover:text-white transition-all">
                    Acessar Painel de Controle
                 </button>
              </div>
              
              {/* Badge de Conformidade */}
              <div className="absolute -bottom-8 -right-8 bg-jde-orange text-white p-6 shadow-2xl rotate-3">
                 <p className="text-[10px] font-black uppercase tracking-widest leading-tight">Project Status</p>
                 <p className="text-2xl font-headline tracking-tighter uppercase">99.8% Technical Accuracy</p>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}

import { Activity } from "lucide-react";
