import { BrowserRouter,Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import HomepageAdmin from "./pages/HomepageAdmin"
import LoginPage from "./pages/LoginPage"
import LoginAdminPage from "./pages/LoginAdminPage"
import OTPPage from "./pages/OTPPage"
import FaqPage from "./pages/FaqPage"
import Featurespage from "./pages/Featurespage"
import ContactUsPage from "./pages/ContactUsPage"
import UserDashboardPage from "./pages/User/UserDashboardPage"
import AdminDashboardPage from "./pages/Admin/AdminDashboardPage"
import UserOpportunityPage from "./pages/User/UserOpportunityPage"
import AdminOpportunityPage from "./pages/Admin/AdminOpportunityPage"
import UserApplicationsPage from "./pages/User/UserApplicationsPage"
import AdminApplicationsPage from "./pages/Admin/AdminApplicationsPage"
import Try from "./pages/Try"
import RegisterPage from "./pages/RegisterPage"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/admin' element={<HomepageAdmin/>}/>
        <Route path='/try' element={<Try/>}/>
        <Route path='/faq' element={<FaqPage/>}/>
        <Route path='/features' element={<Featurespage/>}/>
        <Route path='/contact' element={<ContactUsPage/>}/>
        <Route path="/login/:collegeName" element={<LoginPage/>} />
        <Route path="/loginadmin/:collegeName" element={<LoginAdminPage/>} />
        <Route path="/register/:collegeName" element={<RegisterPage/>} />
        <Route path="/otppage/:collegeName/:email" element={<OTPPage />} /> 
        <Route path="/user-dashboard" element={<UserDashboardPage/>}/>
        <Route path="/admin-dashboard" element={<AdminDashboardPage/>}/>
        <Route path="/user-opportunity" element={<UserOpportunityPage/>}/>
        <Route path="/admin-opportunity" element={<AdminOpportunityPage/>}/>
        <Route path="/user-applications" element={<UserApplicationsPage/>}/>
        <Route path="/admin-applications" element={<AdminApplicationsPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
