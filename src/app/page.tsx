"use client";
import Hero from "@/components/sections/Hero";
import InvestorHub from "@/components/sections/InvestorHub";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-jde-black selection:bg-jde-orange selection:text-white">
      {/* Header Industrial */}
      <header className="fixed top-0 w-full z-50 bg-jde-black/90 backdrop-blur-md border-b border-white/5 h-24 flex items-center">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-3xl font-headline tracking-tighter text-white leading-none">JDE PACHECO</span>
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-jde-orange">Engineering & Tech</span>
          </div>
          
          <nav className="hidden lg:flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Infraestrutura</a>
            <a href="#" className="hover:text-white transition-colors">Portfólio</a>
            <a href="#" className="hover:text-white transition-colors">Licitações</a>
            <a href="#" className="text-jde-orange">Investor Hub</a>
          </nav>
          
          <button className="text-[10px] font-black uppercase tracking-widest px-8 py-4 border-2 border-jde-orange text-jde-orange hover:bg-jde-orange hover:text-white transition-all duration-500">
            Acesso Restrito
          </button>
        </div>
      </header>

      <div className="space-y-0">
        <Hero />
        <InvestorHub />

        {/* Seção de Contato e CTA Final */}
        <section className="py-40 bg-jde-black border-t border-white/5 relative">
           <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24">
              <div>
                 <h2 className="text-6xl md:text-[100px] font-headline text-white leading-none mb-8">CONSTRUA <br/> O FUTURO.</h2>
                 <p className="text-xl text-zinc-500 font-light mb-12 leading-relaxed">
                   Seu próximo grande projeto exige a solidez da JDE Pacheco. Estamos prontos para projetar a soberania da sua marca no Sudoeste.
                 </p>
                 <div className="space-y-6">
                    <div className="flex items-center gap-6">
                       <MapPin className="text-jde-orange w-6 h-6" />
                       <span className="text-sm font-bold text-zinc-300 uppercase tracking-widest">Rio Verde, GO - Distrito Industrial</span>
                    </div>
                    <div className="flex items-center gap-6">
                       <Phone className="text-jde-orange w-6 h-6" />
                       <span className="text-sm font-bold text-zinc-300 uppercase tracking-widest">(64) 3612-XXXX</span>
                    </div>
                 </div>
              </div>
              
              <div className="industrial-card border-none bg-zinc-900/50">
                 <h3 className="text-3xl font-headline text-white mb-8 tracking-widest uppercase">Iniciar Análise B2B</h3>
                 <form className="space-y-6">
                    <input type="text" placeholder="NOME DA EMPRESA" className="w-full bg-white/5 border border-white/10 p-5 text-sm outline-none focus:border-jde-orange transition-all text-white font-bold" />
                    <input type="email" placeholder="E-MAIL CORPORATIVO" className="w-full bg-white/5 border border-white/10 p-5 text-sm outline-none focus:border-jde-orange transition-all text-white font-bold" />
                    <textarea placeholder="DESCREVA O PROJETO..." rows={4} className="w-full bg-white/5 border border-white/10 p-5 text-sm outline-none focus:border-jde-orange transition-all text-white font-bold"></textarea>
                    <button className="btn-safety w-full flex items-center justify-center gap-4">
                       ATIVAR CONSULTORIA <ArrowRight className="w-5 h-5" />
                    </button>
                 </form>
              </div>
           </div>
        </section>
      </div>

      <footer className="py-20 bg-jde-black text-center border-t border-white/5">
         <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em]">
           © 2026 JDE PACHECO CONSTRUTORA • Sudoeste Goiano • Powered by Diamante-OS
         </p>
      </footer>
    </main>
  );
}
