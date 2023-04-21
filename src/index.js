import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
