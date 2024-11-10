import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Import above came with React + Vite app
// import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' // Imported from a library called react router that provides components and hooks.
// Imports above will be used for our imports in React, allowing us to (SPA) Single Page Application
import HomePage from './pages/HomePage'
import GamesPage from './pages/GamesPage'
import NotFound from './pages/ErrorPage'

// The router needs an object giving the details of the path and the UI component we are routing to
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFound />
  },
  {
    path: '/games',
    element: <GamesPage/>
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
