import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

function Navbar({ theme, toggleTheme, isAuthenticated, user, onLogout }) {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const handleLogout = () => {
    onLogout()
    closeMenu()
    navigate('/')
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">✦</span>
          <span className="logo-text">BiographWeb</span>
        </Link>

        <button
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <div className="navbar-links">
            <Link to="/" className="navbar-link" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/products" className="navbar-link" onClick={closeMenu}>
              Plans
            </Link>
            {isAuthenticated && (
              <Link to="/dashboard" className="navbar-link" onClick={closeMenu}>
                Dashboard
              </Link>
            )}
          </div>

          <div className="navbar-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <span className="theme-icon">{theme === 'light' ? '🌙' : '☀️'}</span>
              <span className="theme-text">{theme === 'light' ? 'Dark' : 'Light'}</span>
            </button>

            {isAuthenticated ? (
              <div className="auth-section">
                <span className="user-name">{user?.name}</span>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <div className="auth-section">
                <Link to="/login" className="navbar-link-btn login-btn" onClick={closeMenu}>
                  Login
                </Link>
                <Link to="/register" className="navbar-link-btn register-btn" onClick={closeMenu}>
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
