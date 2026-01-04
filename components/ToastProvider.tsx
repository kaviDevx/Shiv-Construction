'use client';

import { Toaster } from 'react-hot-toast';

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: '#363636',
          color: '#fff',
          borderRadius: '8px',
          padding: '16px',
          fontSize: '14px',
        },
        success: {
          duration: 4000,
          iconTheme: {
            primary: '#10b981',
            secondary: '#fff',
          },
          style: {
            background: '#10b981',
            color: '#fff',
          },
        },
        error: {
          duration: 5000,
          iconTheme: {
            primary: '#ef4444',
            secondary: '#fff',
          },
          style: {
            background: '#ef4444',
            color: '#fff',
          },
        },
      }}
    />
  );
}

