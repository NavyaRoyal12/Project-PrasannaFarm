import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './components/AuthPage';
// import HomePage from './components/HomePage';
import RegisterUser from './components/RegisterUser';
import Footer from './components/Footer'; // Correctly import Footer component
import './App.css';
import HomePage from './components/HomePage';

// Add route for HomePage
<Route path="/home" element={<HomePage />} />


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to PrasannaFarm!</h1>
        <div className="container">
          <Routes>
            <Route path="/" element={<AuthPage />} /> {/* Combined Login and Register */}
            <Route path="/home" element={<HomePage />} /> {/* Home route */}
            <Route path="/register" element={<RegisterUser />} /> {/* Registration route */}
          </Routes>
        </div>
        <Footer /> {/* Add Footer outside the Routes */}
      </div>
    </Router>
  );
}

export default App;
