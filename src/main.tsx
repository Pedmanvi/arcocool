import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import Dashboard from './pages/Dashboard'
import Calibration from './pages/Calibration'
import Standards from './pages/Standards'
import Batches from './pages/Batches'
import Reports from './pages/Reports'
import Devices from './pages/Devices'
import Clients from './pages/Clients'
import Settings from './pages/Settings'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'calibration', element: <Calibration /> },
      { path: 'standards', element: <Standards /> },
      { path: 'batches', element: <Batches /> },
      { path: 'reports', element: <Reports /> },
      { path: 'devices', element: <Devices /> },
      { path: 'clients', element: <Clients /> },
      { path: 'settings', element: <Settings /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)