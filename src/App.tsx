import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NewContact from "./pages/NewContact"
import SemContatos from "./pages/SemContatos"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/NewContact" element={ <NewContact/>} />   
        <Route path="/SemContatos" element={ <SemContatos/>} /> 
        <Route path="*" element={ <h1>404 - Not Found 😓 </h1>} />   
      </Routes>
    </Router>
  )
}

export default App
