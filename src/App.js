// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import LoginIntern from './pages/LoginIntern';
import LoginAdmin from './pages/LoginAdmin';
import RegistrationIntern from './pages/RegistrationIntern';
import RegistrationAdmin from './pages/RegistrationAdmin';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/loginintern" element={<LoginIntern />} />
          <Route exact path="/loginadmin" element={<LoginAdmin />} />
          <Route exact path="/registerintern" element={<RegistrationIntern />} />
          <Route exact path="/registeradmin" element={<RegistrationAdmin />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
