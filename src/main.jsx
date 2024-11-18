import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import axios from 'axios'
import { URL_BACK } from './config'

axios.defaults.baseURL = URL_BACK;

createRoot(document.getElementById('root')).render(
    <App />
)
