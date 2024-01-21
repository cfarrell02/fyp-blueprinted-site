import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import MainPage from './pages/mainPage';
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from './themes/darkMode';
import lightTheme from './themes/lightMode';
import reportWebVitals from './reportWebVitals';
import { Navigate } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import { Box } from '@mui/material';


ReactDOM.render(
  <React.StrictMode>
      {/* <Header /> */}
      <Box className="square" >
      <Router>
        <Routes>
          <Route path="/fyp-blueprinted-site" element={<MainPage />} />
          <Route path="*" element={<Navigate to="/fyp-blueprinted-site" replace />} />
          {/* Add more Route components for other paths */}
        </Routes>
      </Router>
      </Box>
      <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();