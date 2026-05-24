const projects = [
  {
    title: "Portfolio Website",
    desc: "Modern portfolio built with Next.js",
  },
  {
    title: "E-commerce App",
    desc: "Shopping platform using React",
  },
  {
    title: "Dashboard UI",
    desc: "Analytics dashboard design",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}