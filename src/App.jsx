import AgentRegistration from "./pages/AgentRegstration"
import StatusTrackerDashboard from "./pages/StatusTrackerDashboared"
import AgentPortalLogin from "./pages/AgentLogin"
import AgentDashboard from "./pages/AgentDashboard"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SupportPortalLogin from "./pages/SupportPortalLogin";
import SupportPortalRegister from "./pages/Support Portal Register";
import AdminLogin from "./pages/AdminLogin";
import TicketSubmission from "./pages/TicketSubmission";
import ReportingModule from "./pages/ReportingModule";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SupportPortalLogin/>}/>
        <Route path="/reportingModule" element={<ReportingModule/> }/>
        <Route path="/ticketSubmission" element={<TicketSubmission />} />
        <Route path="/supportPortalRegister" element={<SupportPortalRegister/>}/>
        <Route path="/adminLogin" element={<AdminLogin/>}/>
        <Route path="/agentRegistration" element={<AgentRegistration/>}/>
        <Route path="/statusTrackerDashboard" element={<StatusTrackerDashboard/>}/>
        <Route path="/agentLogin" element={<AgentPortalLogin/>} />
        <Route path="/agentDashBoard" element={<AgentDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
