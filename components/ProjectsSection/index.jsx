import ProjectCard from '../ProjectCard/index.jsx';


const projectsData = [
  {
    title: "E-commerce de Tênis",
    description: "Plataforma de e-commerce completa com carrinho, checkout e painel admin.",
    imageUrl: "/images/projeto-ecommerce.jpg", // Coloque suas imagens em 'public/images/'
    tags: ["React", "Spring Boot", "PostgreSQL", "Auth0"],
    githubUrl: "[SEU_LINK_GITHUB]",
    demoUrl: "[SEU_LINK_DEMO]",
  },
  {
    title: "Sistema de Lixeira (Indicadores)",
    description: "Feature de 'soft-delete' para um sistema de BI, permitindo restaurar dados.",
    imageUrl: "/images/projeto-lixeira.jpg",
    tags: ["Java", "Spring", "React", "SQL Server"],
    githubUrl: "[SEU_LINK_GITHUB]",
    demoUrl: null, // Sem link de demo, o botão não vai aparecer
  },
  {
    title: "App de Paginação",
    description: "Componente de paginação de back-end otimizado para um grande volume de dados.",
    imageUrl: "/images/projeto-paginacao.jpg",
    tags: ["Java", "JPA", "Spring Data"],
    githubUrl: "[SEU_LINK_GITHUB]",
    demoUrl: "[SEU_LINK_DEMO]",
  },
];
// -------------------------------------


const ProjectsSection = () => {
  return (
    // A seção com o ID "projetos" para o link funcionar
    <section id="projetos" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Título da Seção */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Projetos em Destaque
        </h2>

        {/* Grid dos Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Mapeia os dados dos projetos e cria um Card para cada um */}
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;