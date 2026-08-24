// Mock user database - in real app, this would be backend API
const mockUsers = [
  {
    id: 'user1',
    email: 'demo@example.com',
    password: 'password123',
    name: 'Demo User',
    username: 'demouser',
    title: 'Full Stack Developer',
    bio: 'Passionate about building beautiful and functional web experiences.',
    skills: ['React', 'Node.js', 'UI Design', 'TypeScript'],
    location: 'San Francisco, CA',
    socialLinks: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    profileImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=demo',
    profileTheme: 'blue',
    createdAt: new Date('2024-01-15')
  }
]

// Auth utility functions
export const authUtils = {
  // Register a new user
  register: (email, password, name, username) => {
    // Check if user exists
    if (mockUsers.some(u => u.email === email || u.username === username)) {
      throw new Error('Email or username already exists')
    }

    const newUser = {
      id: `user${Date.now()}`,
      email,
      password, // In real app, this would be hashed
      name,
      username,
      title: '',
      bio: '',
      skills: [],
      location: '',
      socialLinks: {
        twitter: '',
        linkedin: '',
        github: ''
      },
      profileImage: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
      profileTheme: 'blue',
      createdAt: new Date()
    }

    mockUsers.push(newUser)
    return newUser
  },

  // Login user
  login: (email, password) => {
    const user = mockUsers.find(u => u.email === email && u.password === password)
    if (!user) {
      throw new Error('Invalid email or password')
    }
    return user
  },

  // Get user by username (for public profile)
  getUserByUsername: (username) => {
    const user = mockUsers.find(u => u.username === username)
    if (!user) {
      throw new Error('User not found')
    }
    // Return public data only
    return {
      name: user.name,
      username: user.username,
      title: user.title,
      bio: user.bio,
      skills: user.skills,
      location: user.location,
      socialLinks: user.socialLinks,
      profileImage: user.profileImage,
      profileTheme: user.profileTheme,
      createdAt: user.createdAt
    }
  },

  // Update user bio
  updateUserBio: (userId, bioData) => {
    const user = mockUsers.find(u => u.id === userId)
    if (!user) {
      throw new Error('User not found')
    }
    Object.assign(user, bioData)
    return user
  },

  // Get all users (for discovery, pagination not implemented)
  getAllUsers: () => {
    return mockUsers.map(u => ({
      name: u.name,
      username: u.username,
      title: u.title,
      bio: u.bio.substring(0, 100) + '...',
      profileImage: u.profileImage,
      profileTheme: u.profileTheme
    }))
  }
}

// LocalStorage helpers
export const storageUtils = {
  setAuth: (authData) => {
    // authData should have { user, token, timestamp }
    if (authData && authData.user) {
      localStorage.setItem('auth', JSON.stringify(authData))
    } else if (authData) {
      // If only user object is passed, create full auth structure
      localStorage.setItem('auth', JSON.stringify({
        user: authData,
        token: `token_${authData.id}_${Date.now()}`,
        timestamp: Date.now()
      }))
    }
  },

  getAuth: () => {
    try {
      const auth = localStorage.getItem('auth')
      if (!auth) return null
      const parsed = JSON.parse(auth)
      // Ensure we return the correct structure
      if (parsed && parsed.user) {
        return parsed
      }
      // Fallback if structure is wrong
      return null
    } catch (e) {
      console.error('Error parsing auth from localStorage:', e)
      return null
    }
  },

  clearAuth: () => {
    localStorage.removeItem('auth')
  },

  isAuthenticated: () => {
    const auth = localStorage.getItem('auth')
    return !!auth
  }
}
