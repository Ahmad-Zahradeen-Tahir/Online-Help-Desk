import { Route,Routes, BrowserRouter } from "react-router-dom"
import SupportPortalLogin from "./pages/SupportPortalLogin"
import SupportPortalRegister from "./pages/Support Portal Register"
import AdminLogin from "./pages/AdminLogin"
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SupportPortalLogin/>}/>
        <Route path="/supportPortalRegister" element={<SupportPortalRegister/>}/>
        <Route path="/adminLogin" element={<AdminLogin/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
