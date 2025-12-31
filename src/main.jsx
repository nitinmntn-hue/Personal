import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.scss'
import App from './App.jsx'
import RainBackground from './components/RainBackground.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App />
  </StrictMode>,
)
