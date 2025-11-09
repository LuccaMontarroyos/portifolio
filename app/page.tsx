"use client";

import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
// (Importe outros componentes aqui, como Navbar ou Footer, quando os tiver)

export default function Home() {
  return (
    // '<main>' é uma boa tag semântica para o conteúdo principal
    <main>
      <HeroSection />
      <ProjectsSection />
      {/* A seção de Contato virá aqui depois */}
      {/* <ContactSection /> */}
    </main>
  );
}