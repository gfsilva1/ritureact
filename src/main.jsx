import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter,
         Routes,
        Route,
       } from "react-router-dom"
import Learn from "./routes/learn"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="learn" element={<Learn />} />
    </Routes>
  </BrowserRouter>
)
