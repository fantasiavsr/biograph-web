import { useState } from 'react'
import { authUtils } from '../utils/authUtils'
import './Dashboard.css'

function Dashboard({ user, onUpdateUser }) {
  const [activeTab, setActiveTab] = useState('view')
  const [bioData, setBioData] = useState({
    name: user?.name || '',
    title: user?.title || '',
    bio: user?.bio || '',
    skills: (user?.skills && Array.isArray(user.skills) ? user.skills.join(', ') : ''),
    location: user?.location || '',
    twitter: user?.socialLinks?.twitter || '',
    linkedin: user?.socialLinks?.linkedin || '',
    github: user?.socialLinks?.github || '',
    profileTheme: user?.profileTheme || 'blue'
  })
  const [saved, setSaved] = useState(false)

  const handleBioChange = (e) => {
    const { name, value } = e.target
    setBioData(prev => ({
      ...prev,
      [name]: value
    }))
    setSaved(false)
  }

  const handleSaveBio = () => {
    const updatedUser = {
      ...user,
      name: bioData.name,
      title: bioData.title,
      bio: bioData.bio,
      skills: bioData.skills.split(',').map(s => s.trim()).filter(s => s),
      location: bioData.location,
      socialLinks: {
        twitter: bioData.twitter,
        linkedin: bioData.linkedin,
        github: bioData.github
      },
      profileTheme: bioData.profileTheme
    }

    // Save to mock storage
    authUtils.updateUserBio(user.id, updatedUser)
    onUpdateUser(updatedUser)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const copyToClipboard = () => {
    const url = `${window.location.origin}/bio/${user.username}`
    navigator.clipboard.writeText(url)
    alert('Profile URL copied to clipboard!')
  }

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div className="header-content">
            <div className="header-avatar">
              <img src={user.profileImage} alt={user.name} />
            </div>
            <div className="header-info">
              <h1 className="header-name">{user.name}</h1>
              <p className="header-title">{user.title || 'No title yet'}</p>
              <p className="header-username">@{user.username}</p>
            </div>
          </div>
        </div>

        <div className="dashboard-content">
          <aside className="dashboard-sidebar">
            <nav className="sidebar-nav">
              <button
                className={`nav-item ${activeTab === 'view' ? 'active' : ''}`}
                onClick={() => setActiveTab('view')}
              >
                View Biography
              </button>
              <button
                className={`nav-item ${activeTab === 'edit' ? 'active' : ''}`}
                onClick={() => setActiveTab('edit')}
              >
                Edit Biography
              </button>
              <button
                className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
                onClick={() => setActiveTab('settings')}
              >
                Settings
              </button>
            </nav>
          </aside>

          <main className="dashboard-main">
            {/* View Biography Tab */}
            {activeTab === 'view' && (
              <div className="tab-content">
                <h2 className="tab-title">Your Biography</h2>
                <div className="bio-preview-card">
                  <div className="preview-header">
                    <img src={user.profileImage} alt={user.name} className="preview-avatar" />
                    <div className="preview-info">
                      <h3>{user.name}</h3>
                      <p className="preview-title">{user.title}</p>
                    </div>
                  </div>

                  {user.bio && <p className="preview-bio">{user.bio}</p>}

                  {user.skills && user.skills.length > 0 && (
                    <div className="preview-section">
                      <h4>Skills</h4>
                      <div className="skills-list">
                        {user.skills.map((skill, i) => (
                          <span key={i} className="skill-badge">{skill}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {user.location && (
                    <div className="preview-section">
                      <h4>Location</h4>
                      <p>{user.location}</p>
                    </div>
                  )}

                  <div className="share-section">
                    <h4>Share Your Profile</h4>
                    <div className="share-url">
                      <input
                        type="text"
                        value={`${window.location.origin}/bio/${user.username}`}
                        readOnly
                        className="share-input"
                      />
                      <button onClick={copyToClipboard} className="btn btn-primary">
                        Copy Link
                      </button>
                    </div>
                  </div>

                  <a href={`/bio/${user.username}`} className="btn btn-secondary btn-block" target="_blank" rel="noopener noreferrer">
                    View Public Profile
                  </a>
                </div>
              </div>
            )}

            {/* Edit Biography Tab */}
            {activeTab === 'edit' && (
              <div className="tab-content">
                <h2 className="tab-title">Edit Your Biography</h2>
                <form className="edit-form">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={bioData.name}
                      onChange={handleBioChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Professional Title</label>
                    <input
                      type="text"
                      name="title"
                      placeholder="e.g., Product Designer, Software Engineer"
                      value={bioData.title}
                      onChange={handleBioChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Biography</label>
                    <textarea
                      name="bio"
                      placeholder="Tell us about yourself..."
                      value={bioData.bio}
                      onChange={handleBioChange}
                      className="form-input form-textarea"
                      rows="5"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Skills (comma-separated)</label>
                    <input
                      type="text"
                      name="skills"
                      placeholder="React, UI Design, TypeScript, Figma"
                      value={bioData.skills}
                      onChange={handleBioChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Location</label>
                    <input
                      type="text"
                      name="location"
                      placeholder="San Francisco, CA"
                      value={bioData.location}
                      onChange={handleBioChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-section">
                    <h3 className="form-section-title">Social Links</h3>

                    <div className="form-group">
                      <label className="form-label">Twitter URL</label>
                      <input
                        type="url"
                        name="twitter"
                        placeholder="https://twitter.com/yourhandle"
                        value={bioData.twitter}
                        onChange={handleBioChange}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">LinkedIn URL</label>
                      <input
                        type="url"
                        name="linkedin"
                        placeholder="https://linkedin.com/in/yourprofile"
                        value={bioData.linkedin}
                        onChange={handleBioChange}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">GitHub URL</label>
                      <input
                        type="url"
                        name="github"
                        placeholder="https://github.com/yourprofile"
                        value={bioData.github}
                        onChange={handleBioChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Profile Theme Color</label>
                    <select
                      name="profileTheme"
                      value={bioData.profileTheme}
                      onChange={handleBioChange}
                      className="form-input"
                    >
                      <option value="blue">Blue</option>
                      <option value="emerald">Emerald</option>
                      <option value="purple">Purple</option>
                      <option value="orange">Orange</option>
                    </select>
                  </div>

                  <div className="form-actions">
                    <button
                      type="button"
                      onClick={handleSaveBio}
                      className="btn btn-primary btn-large"
                    >
                      Save Changes
                    </button>
                    {saved && <span className="save-success">✓ Changes saved!</span>}
                  </div>
                </form>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="tab-content">
                <h2 className="tab-title">Account Settings</h2>
                <div className="settings-card">
                  <h3 className="settings-subtitle">Account Information</h3>
                  <div className="settings-item">
                    <span className="settings-label">Email:</span>
                    <span className="settings-value">{user.email}</span>
                  </div>
                  <div className="settings-item">
                    <span className="settings-label">Username:</span>
                    <span className="settings-value">{user.username}</span>
                  </div>
                  <div className="settings-item">
                    <span className="settings-label">Member Since:</span>
                    <span className="settings-value">{new Date(user.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="settings-card">
                  <h3 className="settings-subtitle">Privacy</h3>
                  <div className="settings-item">
                    <div>
                      <p className="settings-label">Public Profile</p>
                      <p className="settings-hint">Your biography is visible to everyone at your public URL</p>
                    </div>
                    <input type="checkbox" defaultChecked className="form-checkbox" />
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
