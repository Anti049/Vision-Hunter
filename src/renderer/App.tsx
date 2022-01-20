// React imports
import { Outlet } from 'react-router-dom';
// TailwindCSS import
import 'tailwindcss/tailwind.css';
import './App.css';
// Page imports
import SidebarLayout from '@components/layouts/SidebarLayout';

declare global {
  interface Window {
    electron: {
      on: (channel: string, func: (...args: any[]) => void) => void;
      send: (channel: string, ...args: any[]) => void;
      store: {
        get: (key: string) => any;
        set: (key: string, val: any) => void;
        // any other methods you've defined...
      };
    };
  }
}

export default function Application() {
  return (
    <SidebarLayout key={null} type="" props={null}>
      <Outlet />
    </SidebarLayout>
  );
}
