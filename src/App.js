import React from 'react';
import './App.css';
import {  Routes, Route } from "react-router-dom";
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard/Dashboard'
import BookingOnline from './Pages/BookingHistory/BookingOnline';
import BookingOffline from './Pages/BookingHistory/BookingOffline';
import DriverEarning from './Pages/Earning/DriverEarning';
import CustomerEarning from './Pages/Earning/CustomerEarning';
import Pushnotification from './Pages/PushNotification/Pushnotification';

function App() {
  return (
    <div className="App">
    <Sidebar />
  
    <div className="Content">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/online-booking" element={<BookingOnline/>} />
        <Route path="/offline-booking" element={<BookingOffline/>} />
        <Route path="/driver-earning" element={<DriverEarning/>} />
        <Route path="/customer-earning" element={<CustomerEarning/>} />
        <Route path="/push_notification" element={<Pushnotification/>} />
        {/* Define other routes as needed */}
      </Routes>
    </div>
  </div>
  );
}

export default App;
