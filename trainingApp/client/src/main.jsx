import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import create_store from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={create_store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StrictMode>,
)
