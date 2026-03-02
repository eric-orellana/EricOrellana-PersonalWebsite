import ProjectCard from './ProjectCard';

function ProjectSection({ title, projects }) {
  return (
    <section className="section-block" aria-labelledby="projects-title">
      <h2 id="projects-title">{title}</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
