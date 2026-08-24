import { useParams, Link } from 'react-router-dom'
import { authUtils } from '../utils/authUtils'
import './ViewProfile.css'

function ViewProfile() {
  const { username } = useParams()
  let profile = null
  let notFound = false

  try {
    profile = authUtils.getUserByUsername(username)
  } catch (err) {
    notFound = true
  }

  if (notFound) {
    return (
      <div className="view-profile">
        <div className="profile-container">
          <div className="not-found">
            <h1>Profile Not Found</h1>
            <p>The biography you're looking for doesn't exist.</p>
            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const themeClass = `theme-${profile.profileTheme}`

  return (
    <div className="view-profile">
      <div className="profile-container">
        {/* Hero Section */}
        <section className={`profile-hero ${themeClass}`}>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <img src={profile.profileImage} alt={profile.name} className="profile-avatar" />
            <h1 className="profile-name">{profile.name}</h1>
            {profile.title && <p className="profile-title">{profile.title}</p>}
            {profile.location && <p className="profile-location">📍 {profile.location}</p>}
          </div>
        </section>

        {/* Main Content */}
        <div className="profile-main">
          {/* About Section */}
          {profile.bio && (
            <section className="profile-section">
              <h2 className="section-title">About</h2>
              <div className="section-content">
                <p className="bio-text">{profile.bio}</p>
              </div>
            </section>
          )}

          {/* Skills Section */}
          {profile.skills && profile.skills.length > 0 && (
            <section className="profile-section">
              <h2 className="section-title">Skills & Expertise</h2>
              <div className="skills-grid">
                {profile.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-icon">✓</span>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Social Links */}
          {(profile.socialLinks?.twitter || profile.socialLinks?.linkedin || profile.socialLinks?.github) && (
            <section className="profile-section">
              <h2 className="section-title">Connect</h2>
              <div className="social-links">
                {profile.socialLinks?.twitter && (
                  <a href={profile.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-link twitter">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/>
                    </svg>
                    Twitter
                  </a>
                )}
                {profile.socialLinks?.linkedin && (
                  <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
                    </svg>
                    LinkedIn
                  </a>
                )}
                {profile.socialLinks?.github && (
                  <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-link github">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
              </div>
            </section>
          )}

          {/* Profile Info Footer */}
          <div className="profile-footer">
            <p className="footer-text">
              Created on {new Date(profile.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            <Link to="/" className="btn btn-secondary">
              Create Your Own Biography
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewProfile
