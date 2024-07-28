import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PetPage from './pages/PetPage';
import { PetProvider } from './context/PetContext';
import ErrorBoundary from './components/ErrorBoundary';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
function App() {
  return (
    <Router>
      <PetProvider>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pets/:id" element={<PetPage />} />
          </Routes>
        </ErrorBoundary>
      </PetProvider>
    </Router>
  );
}

export default App;
