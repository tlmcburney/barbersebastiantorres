import React from 'react'
import App from './App'
import Admin from './pages/Admin'
import VideoUploader from './components/VideoUploader'

const Router: React.FC = () => {
  const path = window.location.pathname

  if (path === '/admin' || path === '/admin/') {
    return <Admin />
  }

  if (path === '/upload' || path === '/upload/') {
    return <VideoUploader />
  }

  return <App />
}

export default Router
