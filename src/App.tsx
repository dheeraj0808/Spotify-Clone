import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import PlayerBar from './components/layout/PlayerBar';
import AppRoutes from './routes/AppRoutes';
import { PlayerProvider } from './context/PlayerContext';

function AppLayout() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  if (isLoginPage) {
    return <AppRoutes />;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main
          style={{
            flex: 1,
            overflow: 'auto',
            backgroundColor: '#121212',
            borderRadius: '8px 8px 0 0',
            marginLeft: '0',
            position: 'relative',
            background: 'linear-gradient(180deg, #333333 0%, #121212 300px)',
          }}
        >
          <Navbar />
          <AppRoutes />
        </main>
      </div>

      {/* Player Bar (always at bottom) */}
      <PlayerBar />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <PlayerProvider>
        <AppLayout />
      </PlayerProvider>
    </BrowserRouter>
  );
}
