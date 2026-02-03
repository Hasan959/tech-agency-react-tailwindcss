import { BrowserRouter, Route, Routes } from "react-router"
import Nav from "./Components/Nav"
import Index from "./Pages/Index"
import Footer from "./Components/Footer"
import About from "./Pages/About"
import Team from "./Pages/Team"
import TeamDetails from "./Pages/TeamDetails"

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/team/:id" element={<TeamDetails/>}/>
      </Routes>
      <Footer/>
    
      </BrowserRouter>
    </>
  )
}

export default App
