const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform with product listing, cart, checkout, and payment integration.",
      image: "https://cmsmart.net/images/community/8382/banner.jpg",
      tech: ["React", "Express", "MongoDB", "Tailwind"],
    },
    {
      title: "E Library System",
      description: "A library management system to manage books, users, and loans.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop&q=60",
      tech: ["React", "Express", "MongoDB", "Tailwind"],
    },
    {
      title: "Vistagram - Social Media Platform",
      description: "A modern social media platform with user profiles, posts, stories, and real-time messaging features.",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&auto=format&fit=crop&q=60",
      tech: ["React", "Express", "MongoDB", "Tailwind"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-emerald-500/50 transition-all">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-900 rounded-full text-sm text-emerald-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
