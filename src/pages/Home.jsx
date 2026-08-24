import { Link } from 'react-router-dom'
import { Line } from 'react-chartjs-2'
import { useContext } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
} from 'chart.js'
import './Home.css'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
)

function Home() {
  // Chart data - easily replaceable with database data
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [30, 45, 35, 60, 55, 75],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 3,
        tension: 0.4,
        fill: true,
        pointBackgroundColor: 'rgb(59, 130, 246)',
        pointBorderColor: 'rgb(59, 130, 246)',
        pointRadius: 5,
        pointHoverRadius: 7,
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        padding: 12,
        titleColor: '#f1f5f9',
        bodyColor: '#f1f5f9',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1,
        displayColors: false,
        callbacks: {
          label: function(context) {
            return context.parsed.y + 'K events'
          }
        }
      }
    },
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    }
  }

  return (
    <div className="home">
      {/* Asymmetric Hero Section */}
      <section className="hero">
        <div className="hero-container">
          {/* Left Column: Copywriting & CTAs */}
          <div className="hero-left">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Create and share your professional biography
            </div>
            <h1 className="hero-title">
              Your digital <span className="title-accent">biography</span>, beautifully crafted
            </h1>
            <p className="hero-subtitle">
              Create stunning professional biographies in minutes. Showcase your skills, achievements, and story to the world.
              Connect with opportunities through an elegant, personalized profile.
            </p>
            <div className="hero-actions">
              <Link to="/register" className="btn btn-primary btn-large">
                <span>Create Your Bio</span>
                <svg className="btn-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/bio/demouser" className="btn btn-secondary btn-large">
                <svg className="btn-icon-left" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="10 8 16 12 10 16 10 8"/>
                </svg>
                <span>View Example</span>
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-value">10K+</div>
                <div className="stat-label">Biographies Created</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">98%</div>
                <div className="stat-label">User Satisfaction</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">50+</div>
                <div className="stat-label">Design Themes</div>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Preview matching Bio Page */}
          <div className="hero-right">
            <div className="profile-preview-card theme-blue">
              <div className="profile-preview-overlay"></div>
              <div className="profile-preview-content">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=demo"
                  alt="John Developer"
                  className="profile-preview-avatar"
                />
                <h2 className="profile-preview-name">John Developer</h2>
                <p className="profile-preview-title">Full Stack Engineer</p>
                <p className="profile-preview-location">📍 San Francisco, CA</p>

                <div className="profile-preview-bio">
                  "Passionate about building beautiful web experiences"
                </div>

                <div className="profile-preview-skills">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">Node.js</span>
                </div>

                <Link to="/bio/demouser" className="profile-preview-btn">
                  View Public Profile
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features Section */}
      <section className="features">
        <div className="features-container">
          <div className="section-header">
            <h2 className="section-title">Powerful features for your story</h2>
            <p className="section-subtitle">
              Everything you need to create an impressive professional biography
            </p>
          </div>

          <div className="bento-grid">
            {/* Card 1: Wide - Data Visualization */}
            <div className="bento-card card-wide">
              <div className="card-header">
                <h3>Your Biography Stats</h3>
                <span className="card-badge">Live</span>
              </div>
              <div className="analytics-chart">
                <Line data={chartData} options={chartOptions} />
              </div>
              <div className="analytics-stats">
                <div className="stat-mini">
                  <span className="stat-mini-value">2.4K</span>
                  <span className="stat-mini-label">Profile Views</span>
                </div>
                <div className="stat-mini">
                  <span className="stat-mini-value">847</span>
                  <span className="stat-mini-label">Shares</span>
                </div>
                <div className="stat-mini">
                  <span className="stat-mini-value">156</span>
                  <span className="stat-mini-label">Connections</span>
                </div>
              </div>
            </div>

            {/* Card 2: Square - Dynamic Settings */}
            <div className="bento-card card-square">
              <div className="card-header">
                <h3>Choose Your Theme</h3>
              </div>
              <div className="controls-container">
                <div className="control-item">
                  <span className="control-label">Theme Preview</span>
                  <div style={{display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap'}}>
                    <div style={{width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', cursor: 'pointer', border: '2px solid #3b82f6'}}></div>
                    <div style={{width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #10b981, #06b6d4)', cursor: 'pointer'}}></div>
                    <div style={{width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #f59e0b, #ef4444)', cursor: 'pointer'}}></div>
                    <div style={{width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #8b5cf6, #ec4899)', cursor: 'pointer'}}></div>
                    <div style={{width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #06b6d4, #14b8a6)', cursor: 'pointer'}}></div>
                    <div style={{width: '32px', height: '32px', borderRadius: '8px', background: '#64748b', cursor: 'pointer'}}></div>
                  </div>
                </div>
                <div className="control-item">
                  <span className="control-label">Public Profile</span>
                  <div className="toggle-switch active">
                    <div className="toggle-slider"></div>
                  </div>
                </div>
                <div className="control-item">
                  <span className="control-label">Featured Skills</span>
                  <div className="avatar-stack">
                    <div className="avatar" style={{background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)'}}>JS</div>
                    <div className="avatar" style={{background: 'linear-gradient(135deg, #10b981, #06b6d4)'}}>TS</div>
                    <div className="avatar" style={{background: 'linear-gradient(135deg, #f59e0b, #ef4444)'}}>UI</div>
                    <div className="avatar-more">+8</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Wide - Share Profile */}
            <div className="bento-card card-code">
              <div className="card-header">
                <h3>Share Your Biography</h3>
                <span className="copy-badge">Copy Link</span>
              </div>
              <div className="share-container">
                <div className="share-link-box">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                  <span className="share-url">biographweb.com/yourname</span>
                </div>
                <div className="share-buttons-grid">
                  <button className="share-btn share-copy">
                    📋 Copy
                  </button>
                  <button className="share-btn share-copy">
                    🔗 LinkedIn
                  </button>
                  <button className="share-btn share-copy">
                    𝕏 Twitter
                  </button>
                  <button className="share-btn share-copy">
                    📧 Email
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4: Small - Status Indicator */}
            <div className="bento-card card-small">
              <div className="status-card">
                <div className="status-ring">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="var(--border)" strokeWidth="8"/>
                    <circle cx="50" cy="50" r="45" fill="none" stroke="var(--accent-emerald)" strokeWidth="8"
                            strokeDasharray="283" strokeDashoffset="70" strokeLinecap="round"
                            style={{transform: 'rotate(-90deg)', transformOrigin: '50% 50%'}}/>
                  </svg>
                  <div className="status-number">75%</div>
                </div>
                <div className="status-label">Complete Your Profile</div>
                <div className="status-subtext">Add bio & photo</div>
              </div>
            </div>

            {/* Card 5: Square - Quick Start */}
            <div className="bento-card card-square">
              <h3 style={{margin: '0 0 0.75rem 0', fontSize: '1rem', fontWeight: '700'}}>Get Started</h3>
              <div style={{display: 'grid', gap: '0.5rem'}}>
                <div style={{paddingLeft: '1.5rem', position: 'relative', fontSize: '0.8125rem'}}>
                  <span style={{position: 'absolute', left: '0', top: '0', background: 'var(--accent)', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: '700'}}>1</span>
                  <strong>Create Account</strong>
                  <br/>
                  <span style={{color: 'var(--text-secondary)', fontSize: '0.75rem'}}>Sign up with email</span>
                </div>
                <div style={{paddingLeft: '1.5rem', position: 'relative', fontSize: '0.8125rem'}}>
                  <span style={{position: 'absolute', left: '0', top: '0', background: 'var(--accent)', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: '700'}}>2</span>
                  <strong>Fill Your Bio</strong>
                  <br/>
                  <span style={{color: 'var(--text-secondary)', fontSize: '0.75rem'}}>Add story & skills</span>
                </div>
                <div style={{paddingLeft: '1.5rem', position: 'relative', fontSize: '0.8125rem'}}>
                  <span style={{position: 'absolute', left: '0', top: '0', background: 'var(--accent)', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: '700'}}>3</span>
                  <strong>Share & Connect</strong>
                  <br/>
                  <span style={{color: 'var(--text-secondary)', fontSize: '0.75rem'}}>Go public</span>
                </div>
              </div>
            </div>

            {/* Card 6: Wide - Social Integration (2 columns wide) */}
            <div className="bento-card card-code" style={{gridColumn: 'span 2'}}>
              <div className="card-header">
                <h3>Connect Your Social Profiles</h3>
                <span className="copy-badge">Sync</span>
              </div>
              <div className="social-integration">
                <div className="social-connect-item">
                  <div className="social-icon linkedin">in</div>
                  <div className="social-info">
                    <h4>LinkedIn</h4>
                    <p>Import your professional network</p>
                  </div>
                  <button className="social-connect-btn">Connect</button>
                </div>
                <div className="social-connect-item">
                  <div className="social-icon github">⚙</div>
                  <div className="social-info">
                    <h4>GitHub</h4>
                    <p>Showcase your projects & contributions</p>
                  </div>
                  <button className="social-connect-btn">Connect</button>
                </div>
                <div className="social-connect-item">
                  <div className="social-icon twitter">𝕏</div>
                  <div className="social-info">
                    <h4>Twitter</h4>
                    <p>Link your social presence</p>
                  </div>
                  <button className="social-connect-btn">Connect</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: How It Works */}
      <section className="how-it-works">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">How BiographWeb Works</h2>
            <p className="section-subtitle">
              Create, customize, and share your professional biography in minutes
            </p>
          </div>
          <div className="how-it-works-grid">
            <div className="how-it-works-item">
              <div className="how-it-works-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3>1. Set Up in Minutes</h3>
              <p>Create your account and fill in your professional information. Our intuitive form makes it easy.</p>
            </div>
            <div className="how-it-works-item">
              <div className="how-it-works-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M9 11h6M9 15h6"/>
                </svg>
              </div>
              <h3>2. Customize Your Style</h3>
              <p>Choose from 50+ themes and customize every aspect to match your personal brand.</p>
            </div>
            <div className="how-it-works-item">
              <div className="how-it-works-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3>3. Share & Connect</h3>
              <p>Get a unique URL and share on social media. Start building professional connections today.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Features Highlight */}
      <section className="features-highlight">
        <div className="section-container">
          <div className="features-highlight-grid">
            <div className="feature-highlight-item">
              <div className="feature-highlight-content">
                <h3>Advanced Analytics</h3>
                <p>Track who views your profile, how long they stay, and which sections they explore most.</p>
                <ul className="feature-list">
                  <li>Real-time view counts</li>
                  <li>Engagement metrics</li>
                  <li>Profile completion score</li>
                  <li>Weekly reports</li>
                </ul>
              </div>
              <div className="feature-highlight-visual">
                <div className="visual-placeholder">
                  <div className="chart-bar"></div>
                  <div className="chart-bar"></div>
                  <div className="chart-bar"></div>
                </div>
              </div>
            </div>

            <div className="feature-highlight-item">
              <div className="feature-highlight-visual">
                <div className="visual-placeholder">
                  <div className="theme-circles">
                    <div className="circle blue"></div>
                    <div className="circle green"></div>
                    <div className="circle purple"></div>
                  </div>
                </div>
              </div>
              <div className="feature-highlight-content">
                <h3>50+ Premium Themes</h3>
                <p>Choose from our curated collection of beautiful, professional themes designed by experts.</p>
                <ul className="feature-list">
                  <li>Dark & light mode support</li>
                  <li>Fully customizable colors</li>
                  <li>Professional layouts</li>
                  <li>Mobile-optimized</li>
                </ul>
              </div>
            </div>

            <div className="feature-highlight-item">
              <div className="feature-highlight-content">
                <h3>Social Integration</h3>
                <p>Connect your LinkedIn, GitHub, Twitter and other platforms to showcase your work.</p>
                <ul className="feature-list">
                  <li>One-click integrations</li>
                  <li>Auto-sync achievements</li>
                  <li>Portfolio imports</li>
                  <li>Social media links</li>
                </ul>
              </div>
              <div className="feature-highlight-visual">
                <div className="visual-placeholder">
                  <div className="social-dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Success Stories */}
      <section className="success-stories">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle">
              See how professionals are leveraging BiographWeb to advance their careers
            </p>
          </div>
          <div className="stories-grid">
            <div className="story-card">
              <div className="story-header">
                <div className="story-avatar">SM</div>
                <div className="story-info">
                  <h4>Sarah Mitchell</h4>
                  <p>Product Designer at TechCorp</p>
                </div>
              </div>
              <p className="story-text">
                "BiographWeb helped me land my dream job. My portfolio is now beautifully presented, and recruiters love how easy it is to navigate."
              </p>
              <div className="story-stats">
                <span>↑ 5 Job Offers</span>
                <span>• 2.3K Profile Views</span>
              </div>
            </div>

            <div className="story-card">
              <div className="story-header">
                <div className="story-avatar">JC</div>
                <div className="story-info">
                  <h4>James Chen</h4>
                  <p>Freelance Developer</p>
                </div>
              </div>
              <p className="story-text">
                "I've doubled my freelance projects since launching my BiographWeb profile. The sharing features make it so easy to send to potential clients."
              </p>
              <div className="story-stats">
                <span>⬆ 3x Income</span>
                <span>• 50+ Leads</span>
              </div>
            </div>

            <div className="story-card">
              <div className="story-header">
                <div className="story-avatar">EW</div>
                <div className="story-info">
                  <h4>Emma Williams</h4>
                  <p>Marketing Director</p>
                </div>
              </div>
              <p className="story-text">
                "My professional presence has never been stronger. BiographWeb lets me showcase exactly who I am to the right audience."
              </p>
              <div className="story-stats">
                <span>✓ 100% Confident</span>
                <span>• 1.8K Connections</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="cta-title">Ready to tell your story?</h2>
              <p className="cta-description">
                Join thousands of professionals who've created stunning biographies on BiographWeb.
                Start building your digital presence today.
              </p>
            </div>
            <form className="cta-form">
              <div className="form-group">
                <input
                  type="email"
                  className="form-input"
                  placeholder="Enter your email"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Get Started
                  <svg className="btn-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
              <p className="form-note">Free forever. No credit card required.</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
