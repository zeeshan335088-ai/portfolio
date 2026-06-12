const Skills = () => {
  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚀" },
    { name: "MongoDB", icon: "🍃" },
    { name: "JavaScript", icon: "📜" },
    { name: "HTML/CSS", icon: "🌐" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Git/GitHub", icon: "🔧" },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build web applications
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center hover:border-emerald-500/50 transition-all">
              <div className="text-4xl mb-3">{skill.icon}</div>
              <h3 className="font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
