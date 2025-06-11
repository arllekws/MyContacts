import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './globals.css'
import { ContactsProvider } from './context/ContactsContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContactsProvider>
      <App />
    </ContactsProvider>
  </StrictMode>,
)
