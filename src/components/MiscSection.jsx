function MiscSection({ title, items }) {
  return (
    <section className="section-block" aria-labelledby="misc-title">
      <h2 id="misc-title">{title}</h2>
      <div className="misc-grid">
        {items.map((item) => (
          <article key={item.id} className="misc-card">
            <div className="misc-header">
              <h3>{item.title}</h3>
              {/* <span className="status-chip">{item.status}</span> */}
            </div>
            <p>{item.description}</p>
            {item.link ? (
              <a href={item.link.url} target="_blank" rel="noreferrer">
                {item.link.label}
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

export default MiscSection;
