import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ViewProfile from './pages/ViewProfile'
import Products from './pages/Products'
import { storageUtils } from './utils/authUtils'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      return saved || 'light'
    } catch (e) {
      console.error('Theme init error:', e)
      return 'light'
    }
  })

  const [auth, setAuth] = useState(() => {
    try {
      return storageUtils.getAuth()
    } catch (e) {
      console.error('Auth init error:', e)
      return null
    }
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const handleLogin = (user) => {
    const authData = {
      user,
      token: `token_${user.id}_${Date.now()}`,
      timestamp: Date.now()
    }
    setAuth(authData)
    storageUtils.setAuth(authData)
  }

  const handleLogout = () => {
    setAuth(null)
    storageUtils.clearAuth()
  }

  // Protected route wrapper
  const ProtectedRoute = ({ children }) => {
    return auth ? children : <Navigate to="/login" replace />
  }

  try {
    return (
      <Router>
        <div className="app">
          <Navbar
            theme={theme}
            toggleTheme={toggleTheme}
            isAuthenticated={!!auth}
            user={auth?.user}
            onLogout={handleLogout}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/register" element={<Register onRegister={handleLogin} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard user={auth?.user} onUpdateUser={(updatedUser) => {
                    setAuth(prev => ({ ...prev, user: updatedUser }))
                    storageUtils.setAuth({ ...auth, user: updatedUser })
                  }} />
                </ProtectedRoute>
              }
            />
            <Route path="/bio/:username" element={<ViewProfile />} />
          </Routes>
        </div>
      </Router>
    )
  } catch (error) {
    console.error('App render error:', error)
    return (
      <div style={{padding: '20px', color: 'red'}}>
        <h1>Error Loading App</h1>
        <p>{error?.message}</p>
      </div>
    )
  }
}

export default App
