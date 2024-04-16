import { BrowserRouter,Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import LoginPage from "./pages/LoginPage"
import OTPPage from "./pages/OTPPage"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path="/login/:collegeName" element={<LoginPage/>} />
        <Route path="/otppage/:collegeName/:email" element={<OTPPage />} /> 
        <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
    </BrowserRouter>
    
      
    </>
  )
}

export default App
