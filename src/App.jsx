<<<<<<< HEAD
import { Route,Routes, BrowserRouter } from "react-router-dom"
import SupportPortalLogin from "./pages/SupportPortalLogin"
import SupportPortalRegister from "./pages/Support Portal Register"
import AdminLogin from "./pages/AdminLogin"
import AgentRegistration from "./pages/AgentRegstration"
import StatusTrackerDashboard from "./pages/StatusTrackerDashboared"
import AgentPortalLogin from "./pages/AgentLogin"
import AgentDashboard from "./pages/AgentDashboard"

=======
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SupportPortalLogin from "./pages/SupportPortalLogin";
import SupportPortalRegister from "./pages/Support Portal Register";
import AdminLogin from "./pages/AdminLogin";
import TicketSubmission from "./pages/TicketSubmission";
>>>>>>> 275d3cfc8749d88539b95b3718ca17a8023a7f93
function App() {
  return (
    <>
      <BrowserRouter>
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<SupportPortalLogin/>}/>
        <Route path="/supportPortalRegister" element={<SupportPortalRegister/>}/>
        <Route path="/adminLogin" element={<AdminLogin/>}/>
        <Route path="/agentRegistration" element={<AgentRegistration/>}/>
        <Route path="/statusTrackerDashboard" element={<StatusTrackerDashboard/>}/>
        <Route path="/agentLogin" element={<AgentPortalLogin/>} />
        <Route path="/agentDashBoard" element={<AgentDashboard/>}/>

      </Routes>
=======
        <Routes>
          <Route path="/" element={<SupportPortalLogin/>}/>
          <Route path="/ticketSubmission" element={<TicketSubmission />} />
          <Route
            path="/supportPortalRegister"
            element={<SupportPortalRegister />}
          />
          <Route path="/adminLogin" element={<AdminLogin />} />
        </Routes>
>>>>>>> 275d3cfc8749d88539b95b3718ca17a8023a7f93
      </BrowserRouter>
    </>
  );
}

export default App;
