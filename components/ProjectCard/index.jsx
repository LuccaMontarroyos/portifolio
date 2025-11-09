// components/ProjectCard.js
import React from 'react';
import Image from 'next/image'; // Usaremos o Image do Next.js para otimização
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi'; // Ícone para "link externo"

// Este componente receberá 'props' com os dados do projeto
const ProjectCard = ({ title, description, imageUrl, tags, githubUrl, demoUrl }) => {
  return (
    // O Card
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      
      {/* 1. Imagem do Projeto */}
      {/* Usamos 'relative' e 'h-48' para ter um tamanho de imagem consistente */}
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={`Thumbnail do projeto ${title}`}
          layout="fill"
          objectFit="cover" // Garante que a imagem cubra o espaço
        />
      </div>

      {/* 2. Conteúdo do Card (Título, Descrição, Tags) */}
      <div className="p-6">
        {/* Tags de Tecnologia */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Título */}
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        
        {/* Descrição Curta */}
        <p className="text-gray-700 mb-6">{description}</p>

        {/* 3. Links (GitHub e Demo) */}
        <div className="flex justify-start gap-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Repositório no GitHub"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2"
          >
            <FaGithub size={24} />
            Código
          </a>
          
          {/* O link de Demo só aparece se 'demoUrl' for fornecido */}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Demo ao vivo do projeto"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center gap-2 font-semibold"
            >
              <FiExternalLink size={24} />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;