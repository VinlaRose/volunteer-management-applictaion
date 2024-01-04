import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';

import { Report } from './Page/Report';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchExpense, fetchIncome, fetchSavings } from './redux/actions';
import { VolunteerPage } from './Page/Volunteer';
import { EventsPage } from './Page/Event';

function App() {


  return (
    <div className="App">
      
      <nav>
            <ul>
              <li>
                
                <Link to="/volunteers">Volunteers</Link>
              </li>
              <li>
                <Link to="/">Events</Link>
              </li>
              <li>
                <Link to="https://github.com/VinlaRose/volunteer-management-applictaion">Github</Link>
              </li>
             
              
            </ul>
          </nav>
          
      <Routes>
        <Route path="/volunteers" element={<VolunteerPage/>} />
        <Route path="/" element={<EventsPage/>} />
        
    
        
        
      </Routes>
    </div>
  );
}

export default App;