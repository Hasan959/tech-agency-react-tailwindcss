import { BrowserRouter, Route, Routes } from "react-router"
import Nav from "./Components/Nav"
import Index from "./Pages/Index"
import Footer from "./Components/Footer"
import About from "./Pages/About"

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer/>
    
      </BrowserRouter>
    </>
  )
}

export default App
