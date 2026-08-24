import { Link } from 'react-router-dom'
import { Line } from 'react-chartjs-2'
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
              New: Release v2.0 is live
            </div>
            <h1 className="hero-title">
              Automate your workflow with <span className="title-accent">precision</span>
            </h1>
            <p className="hero-subtitle">
              Build, deploy, and scale modern applications with our cutting-edge platform.
              Experience unmatched performance and developer experience.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary btn-large">
                <span>Get Started Free</span>
                <svg className="btn-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <button className="btn btn-secondary btn-large">
                <svg className="btn-icon-left" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="10 8 16 12 10 16 10 8"/>
                </svg>
                <span>Watch Demo</span>
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-value">99.9%</div>
                <div className="stat-label">Uptime SLA</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">2.4M+</div>
                <div className="stat-label">API Calls/day</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">150ms</div>
                <div className="stat-label">Avg Response</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Console/Preview Panel */}
          <div className="hero-right">
            <div className="console-card">
              <div className="console-header">
                <div className="console-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="console-tabs">
                  <span className="tab active">index.js</span>
                  <span className="tab">config.json</span>
                </div>
              </div>
              <div className="console-body">
                <div className="code-line">
                  <span className="line-number">1</span>
                  <span className="code-keyword">import</span> <span className="code-var">ModernSite</span> <span className="code-keyword">from</span> <span className="code-string">'@modernsite/sdk'</span>
                </div>
                <div className="code-line">
                  <span className="line-number">2</span>
                  <span className="code-text"></span>
                </div>
                <div className="code-line">
                  <span className="line-number">3</span>
                  <span className="code-keyword">const</span> <span className="code-var">client</span> <span className="code-operator">=</span> <span className="code-keyword">new</span> <span className="code-function">ModernSite</span><span className="code-text">()</span>
                </div>
                <div className="code-line">
                  <span className="line-number">4</span>
                  <span className="code-keyword">await</span> <span className="code-var">client</span><span className="code-text">.</span><span className="code-function">deploy</span><span className="code-text">()</span>
                </div>
                <div className="code-line terminal-line">
                  <span className="line-number">{'>'}</span>
                  <span className="terminal-success">✓</span> <span className="terminal-text">Build completed in 847ms</span>
                </div>
                <div className="code-line terminal-line">
                  <span className="line-number">{'>'}</span>
                  <span className="terminal-success">✓</span> <span className="terminal-text">Deployed to production</span>
                </div>
              </div>
              <div className="console-footer">
                <div className="status-indicator">
                  <span className="status-dot"></span>
                  <span className="status-text">Server Online</span>
                </div>
                <div className="console-info">Node v20.11.0</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features Section */}
      <section className="features">
        <div className="features-container">
          <div className="section-header">
            <h2 className="section-title">Everything you need to succeed</h2>
            <p className="section-subtitle">
              Powerful features designed for modern development teams
            </p>
          </div>

          <div className="bento-grid">
            {/* Card 1: Wide - Data Visualization */}
            <div className="bento-card card-wide">
              <div className="card-header">
                <h3>Realtime Analytics</h3>
                <span className="card-badge">Live</span>
              </div>
              <div className="analytics-chart">
                <Line data={chartData} options={chartOptions} />
              </div>
              <div className="analytics-stats">
                <div className="stat-mini">
                  <span className="stat-mini-value">+23.5%</span>
                  <span className="stat-mini-label">Growth</span>
                </div>
                <div className="stat-mini">
                  <span className="stat-mini-value">1.2M</span>
                  <span className="stat-mini-label">Events</span>
                </div>
                <div className="stat-mini">
                  <span className="stat-mini-value">47ms</span>
                  <span className="stat-mini-label">Latency</span>
                </div>
              </div>
            </div>

            {/* Card 2: Square - Dynamic Settings */}
            <div className="bento-card card-square">
              <div className="card-header">
                <h3>Smart Controls</h3>
              </div>
              <div className="controls-container">
                <div className="control-item">
                  <span className="control-label">Auto-deploy</span>
                  <div className="toggle-switch active">
                    <div className="toggle-slider"></div>
                  </div>
                </div>
                <div className="control-item">
                  <span className="control-label">Performance</span>
                  <div className="slider-track">
                    <div className="slider-fill" style={{width: '75%'}}></div>
                    <div className="slider-handle" style={{left: '75%'}}></div>
                  </div>
                </div>
                <div className="control-item">
                  <span className="control-label">Team Members</span>
                  <div className="avatar-stack">
                    <div className="avatar" style={{background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)'}}>JD</div>
                    <div className="avatar" style={{background: 'linear-gradient(135deg, #10b981, #06b6d4)'}}>SM</div>
                    <div className="avatar" style={{background: 'linear-gradient(135deg, #f59e0b, #ef4444)'}}>AK</div>
                    <div className="avatar-more">+5</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Wide - Code Integration */}
            <div className="bento-card card-code">
              <div className="card-header">
                <h3>Quick Integration</h3>
                <span className="copy-badge">Copy</span>
              </div>
              <div className="code-window">
                <div className="code-snippet">
                  <pre><code><span className="code-keyword">const</span> <span className="code-var">site</span> <span className="code-operator">=</span> <span className="code-keyword">new</span> <span className="code-function">ModernSite</span>{'({'}<br/>{'  '}<span className="code-property">apiKey</span>: <span className="code-string">'ms_prod_99f24c0...'</span>,<br/>{'  '}<span className="code-property">realtime</span>: <span className="code-boolean">true</span><br/>{'})'};{'\n'}<span className="code-keyword">await</span> <span className="code-var">site</span>.<span className="code-function">sync</span>();</code></pre>
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
                            strokeDasharray="283" strokeDashoffset="28" strokeLinecap="round"
                            style={{transform: 'rotate(-90deg)', transformOrigin: '50% 50%'}}/>
                  </svg>
                  <div className="status-number">99.9%</div>
                </div>
                <div className="status-label">Uptime</div>
                <div className="status-subtext">Last 30 days</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Minimal Newsletter CTA */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="cta-title">Stay ahead of the curve</h2>
              <p className="cta-description">
                Get weekly insights, product updates, and development tips delivered to your inbox.
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
                  Subscribe
                  <svg className="btn-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
              <p className="form-note">No spam. Unsubscribe anytime.</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
