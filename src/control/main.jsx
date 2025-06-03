import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/css/index.css'
import App from '/src/view/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
