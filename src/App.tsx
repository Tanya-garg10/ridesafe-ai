import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Monitoring from './pages/Monitoring';
import Device from './pages/Device';
import Emergency from './pages/Emergency';
import History from './pages/History';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes with Layout */}
        <Route path="/dashboard" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/monitoring" element={<MainLayout />}>
          <Route index element={<Monitoring />} />
        </Route>
        <Route path="/device" element={<MainLayout />}>
          <Route index element={<Device />} />
        </Route>
        <Route path="/emergency" element={<MainLayout />}>
          <Route index element={<Emergency />} />
        </Route>
        <Route path="/history" element={<MainLayout />}>
          <Route index element={<History />} />
        </Route>
        <Route path="/analytics" element={<MainLayout />}>
          <Route index element={<Analytics />} />
        </Route>
        <Route path="/settings" element={<MainLayout />}>
          <Route index element={<Settings />} />
        </Route>

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
