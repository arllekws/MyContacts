import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NewContact from "./pages/NewContact"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/NewContact" element={ <NewContact/>} />    
        <Route path="*" element={ <h1>404 - Not Found 😓 </h1>} />   
      </Routes>
    </Router>
  )
}

export default App
