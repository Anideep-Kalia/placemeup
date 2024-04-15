import { BrowserRouter,Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import LoginPage from "./pages/LoginPage"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
    
      
    </>
  )
}

export default App
