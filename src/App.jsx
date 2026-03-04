import MiscSection from './components/MiscSection';
import ProfileSection from './components/ProfileSection';
import ProjectSection from './components/ProjectSection';
import SocialLinks from './components/SocialLinks';
import { miscItems, profile, projects, socialLinks } from './data/siteContent';

function App() {
  return (
    <div className="site-shell">
      <SocialLinks links={socialLinks} location="header" />

      <main className="main-content">
        
        <ProfileSection profile={profile} />
        <ProjectSection title="What I'm Building & Doing" projects={projects} />
        <MiscSection title="Miscellaneous / In Progress" items={miscItems} />
        <SocialLinks links={socialLinks} location="footer" />
      </main>
    </div>
  );
}

export default App;
