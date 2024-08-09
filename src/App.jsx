import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TrialPage from './pages/TrialPage';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute";

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

// to make sure when registering there are no old credentials EventCounts, clean up al user info
function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2>ScobyBrewer</h2>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/trials">Trials</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Sign Up</Link></li>
              <li><Link to="/logout">Logout</Link></li>
            </ul>
          </nav>
        </header>
        <div className="App-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/tials" element={<ProtectedRoute><TrialPage /></ProtectedRoute>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterAndLogout />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

