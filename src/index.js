import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import MainPage from './pages/mainPage';
import { ThemeProvider } from '@mui/material/styles';
import reportWebVitals from './reportWebVitals';
import { Navigate } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/home" element={<MainPage />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
          {/* Add more Route components for other paths */}
        </Routes>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();