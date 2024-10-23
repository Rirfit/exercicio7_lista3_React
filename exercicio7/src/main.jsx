import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ListaTarefas from './components/Lista'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListaTarefas />
  </StrictMode>,
)
