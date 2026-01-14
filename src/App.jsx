import { BrowserRouter, Route, Routes } from "react-router"
import Nav from "./Components/Nav"
import Index from "./Pages/Index"
import Footer from "./Components/Footer"

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={ <Index/> } />
      </Routes>
      <Footer/>
    
      </BrowserRouter>
    </>
  )
}

export default App
