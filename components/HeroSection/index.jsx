"use client";
  
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const baseTransition = "transition-all ease-out duration-1000";

  return (
    // 'relative' é a chave para o background
    <section className="relative min-h-screen grid place-items-center p-8 overflow-hidden">
      
      {/* 1. SEU NOVO FUNDO "TECH" */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center -z-20"
        style={{
          // Assim que tiver a imagem, coloque o nome do arquivo aqui:
          backgroundImage: "url('/tech.png')", 
        }}
      />
      
      {/* 2. O Overlay (Escurece o fundo) */}
      {/* Pode ser 'bg-black/70' ou um 'bg-indigo-950/70' se combinar */}
      <div className="absolute inset-0 w-full h-full bg-black/70 -z-10" />

      {/* 3. O Conteúdo (Animado com Tailwind) */}
      <div className="max-w-3xl text-center">

        {/* 1. Título (Como estava antes) */}
        <h1 className={`
            text-5xl md:text-7xl font-bold text-white mb-4
            ${baseTransition} 
            ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
            delay-100
          `}
        >
          Eu sou Lucca Barros
        </h1>

        {/* 2. Subtítulo (Como estava antes) */}
        <h2 className={`
            text-2xl md:text-3xl font-semibold text-blue-400 mb-6
            ${baseTransition} 
            ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
            delay-300
          `}
        >
          Desenvolvedor de Software
        </h2>

        {/* 3. Descrição (Como estava antes) */}
        <p className={`
            text-lg text-gray-200 mb-10 max-w-xl mx-auto
            ${baseTransition} 
            ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
            delay-500
          `}
        >
          Apaixonado por construir aplicações web robustas e escaláveis,
          com foco em Spring Boot para o backend e React para o frontend.
        </p>

        {/* 4. Botões de Ação (Como estava antes) */}
        <div className={`
            flex flex-col sm:flex-row justify-center gap-4 mb-10
            ${baseTransition} 
            ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
            delay-700
          `}
        >
          <a
            href="#projetos"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Meus Projetos
          </a>
          <a
            href="#contato"
            className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition duration-300 transform hover:scale-105"
          >
            Entrar em Contato
          </a>
        </div>

        {/* 5. Links Sociais (Como estava antes) */}
        <div className={`
            flex justify-center gap-6
            ${baseTransition} 
            ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
            delay-1000
          `}
        >
          <a 
            href="[Seu Link do GitHub]" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110"
          >
            <FaGithub size={32} />
          </a>
          <a 
            href="[Seu Link do LinkedIn]" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-blue-500 transition duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={32} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;