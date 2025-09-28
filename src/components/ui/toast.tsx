import React from 'react';
import { Toaster } from 'react-hot-toast';

export { toast } from 'react-hot-toast';

export function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: 'hsl(210 40% 98%)',
          color: 'hsl(222.2 84% 4.9%)',
          border: '1px solid hsl(214.3 31.8% 91.4%)',
          borderRadius: '8px',
          fontSize: '14px',
        },
        success: {
          iconTheme: {
            primary: 'hsl(142.1 76.2% 36.3%)',
            secondary: 'white',
          },
        },
        error: {
          iconTheme: {
            primary: 'hsl(0 84.2% 60.2%)',
            secondary: 'white',
          },
        },
      }}
    />
  );
}