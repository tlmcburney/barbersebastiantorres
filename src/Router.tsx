import React from 'react'
import App from './App'
import Admin from './pages/Admin'

const Router: React.FC = () => {
  const path = window.location.pathname

  if (path === '/admin' || path === '/admin/') {
    return <Admin />
  }

  return <App />
}

export default Router
