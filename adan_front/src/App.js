import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Page1 from './components/Page1';
import Pagelog2 from './components/Pagelog2';
import Page3 from './components/Page3';
import Adanpradan from './components/Adanpradan';
import Studentprofile from './Studentprofile';
import Studentpage1 from './components/Studentpage1.js';
import StudentBookedDetails from './components/StudentBookedDetails.js';
function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
          <Route path="/" element={<Page1/> }/>
          <Route path="Adanpradan" element={<Adanpradan/> }/>
          {/* <Route path="" element={</> }/> */}
          <Route path="Studentpage1" element={<Studentpage1/> }/>
          <Route path="Adanpradand" element={<Adanpradan/> }/>
          <Route path="Login1" element={<Pagelog2/> }/>
          <Route path="Login2" element={<Page3/> }/>
          <Route path="studpof" element={<Studentprofile/> }/>
          <Route path="student_booked_details" element={<StudentBookedDetails/> }/>
          </Routes>
        </Router>
        </div>
    </>
  );
}

export default App;
