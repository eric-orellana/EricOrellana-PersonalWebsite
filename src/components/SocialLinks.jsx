function SocialLinks({ links, location = 'footer' }) {
  return (
    <nav
      aria-label={location === 'header' ? 'Top social links' : 'Footer social links'}
      className={`social-links ${location}`}
    >
      {links.map((link) => (
        <a
          key={link.name}
          className="social-link"
          href={link.url}
          target="_blank"
          rel="noreferrer"
          aria-label={link.name}
          title={link.name}
        >
          <img className={`social-link-icon${link.name === 'Buy Me a Coffee' ? ' social-link-icon-bmc' : ''}`} src={link.icon} alt="" />
        </a>
      ))}
    </nav>
  );
}

export default SocialLinks;

