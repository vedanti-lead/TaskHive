import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import TemplateSelectionPage from './pages/TemplateSelectionPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/templates" element={<TemplateSelectionPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;