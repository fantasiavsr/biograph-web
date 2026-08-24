import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authUtils } from '../utils/authUtils'
import './AuthPages.css'

function Login({ onLogin }) {
  const [email, setEmail] = useState('demo@example.com')
  const [password, setPassword] = useState('password123')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // Simulate API delay
      setTimeout(() => {
        const user = authUtils.login(email, password)
        onLogin(user)
        navigate('/dashboard')
        setLoading(false)
      }, 500)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1 className="auth-title">Welcome Back</h1>
            <p className="auth-subtitle">Sign in to your BiographWeb account</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {error && <div className="error-message">{error}</div>}

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-remember">
              <input type="checkbox" id="remember" className="form-checkbox" />
              <label htmlFor="remember" className="form-checkbox-label">Remember me</label>
              <a href="#" className="form-link">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-full btn-large"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="auth-footer">
            <p>Don't have an account? <Link to="/register" className="auth-link">Create one</Link></p>
          </div>

          <div className="demo-hint">
            <p><strong>Demo Credentials:</strong></p>
            <p>Email: demo@example.com</p>
            <p>Password: password123</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
