function ProjectCard({ project }) {
  const image = (
    <img className="project-image" src={project.imageSrc} alt={project.imageAlt} loading="lazy" />
  );

  return (
    <article className="project-card">
      <div className="project-media">
        {project.imageLink ? (
          <a href={project.imageLink} target="_blank" rel="noreferrer" aria-label={`${project.title} link`}>
            {image}
          </a>
        ) : (
          image
        )}
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        {project.descriptionParagraphs.map((paragraph, index) => (
          <p key={`${project.id}-paragraph-${index}`}>{paragraph}</p>
        ))}

        {project.links?.length > 0 && (
          <div className="project-links">
            {project.links.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
