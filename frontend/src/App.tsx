import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import TemplateSelectionPage from './pages/TemplateSelectionPage';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';
import { UserProvider } from './context/UserContext';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-600 dark:border-darkPrimary-500"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading Task Hive...</p>
        </div>
      </div>
    );
  }

  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/templates" element={
          <ProtectedRoute>
            <TemplateSelectionPage />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/*" element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        } />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </UserProvider>
  );
}

export default App;