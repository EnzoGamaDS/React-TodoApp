import React from 'react';
import { AppRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <div style={{display:'flex', height: '100%', width:'100%'}}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}