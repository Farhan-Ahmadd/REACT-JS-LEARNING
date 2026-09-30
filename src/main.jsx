import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App }   from './App.jsx'
// import NetflixSeries from './component/NetflixSeries.jsx'
// import { Practices } from './practices.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <NetflixSeries/>   */}
    {/* <Practices/> */}
  </StrictMode>,
)
