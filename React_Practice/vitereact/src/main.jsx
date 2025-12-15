import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Personal from './personal.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Personal />
  </StrictMode>,
)
