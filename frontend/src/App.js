import { BrowserRouter,Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import LoginPage from "./pages/LoginPage"
import OTPPage from "./pages/OTPPage"
import FaqPage from "./pages/FaqPage"
import Featurespage from "./pages/Featurespage"
import ContactUsPage from "./pages/ContactUsPage"
import UserDashboardPage from "./pages/User/UserDashboardPage"
import UserOpportunityPage from "./pages/User/UserOpportunityPage"
import UserApplicationsPage from "./pages/User/UserApplicationsPage"
import RegisterPage from "./pages/RegisterPage"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/faq' element={<FaqPage/>}/>
        <Route path='/features' element={<Featurespage/>}/>
        <Route path='/contact' element={<ContactUsPage/>}/>
        <Route path="/login/:collegeName" element={<LoginPage/>} />
        <Route path="/register/:collegeName" element={<RegisterPage/>} />
        <Route path="/otppage/:collegeName/:email" element={<OTPPage />} /> 
        <Route path="/user-dashboard" element={<UserDashboardPage/>}/>
        <Route path="/user-opportunity" element={<UserOpportunityPage/>}/>
        <Route path="/user-applications" element={<UserApplicationsPage/>}/>
            </Routes>
    </BrowserRouter>
    
      
    </>
  )
}

export default App
