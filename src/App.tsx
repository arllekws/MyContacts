import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NewContact from "./pages/NewContact"
import SemContatos from "./pages/SemContatos"
import Error from "./pages/Error"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/NewContact" element={ <NewContact/>} />   
        <Route path="/SemContatos" element={ <SemContatos/>} /> 
        <Route path="*" element={ <Error />} />   
      </Routes>
    </Router>
  )
}

export default App
