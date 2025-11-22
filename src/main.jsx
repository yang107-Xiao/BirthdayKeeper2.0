import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// 引入 CSS 样式，确保路径正确指向根目录下的 index.css
import '../index.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
