import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import Overview from '../components/dashboard/Overview';
import Tasks from '../components/dashboard/Tasks';
import Goals from '../components/dashboard/Goals';
import Competitions from '../components/dashboard/Competitions';
import Leaderboard from '../components/dashboard/Leaderboard';
import Mentorship from '../components/dashboard/Mentorship';
import Journal from '../components/dashboard/Journal';
import Settings from '../components/dashboard/Settings';

const DashboardPage: React.FC = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </DashboardLayout>
  );
};

export default DashboardPage;