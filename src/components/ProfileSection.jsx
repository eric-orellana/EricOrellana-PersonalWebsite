function ProfileSection({ profile }) {
  return (
    <section className="profile-section" aria-labelledby="profile-title">
      <img className="avatar" src={profile.imageSrc} alt={profile.imageAlt} />

      <div className="profile-words">
        <div className="profile-top">
          <h1 id="profile-title">{profile.name}</h1>
        </div>

        <div className="profile-bio">
          {profile.bioParagraphs.map((paragraph, index) => (
            <p key={`${profile.name}-bio-${index}`}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
