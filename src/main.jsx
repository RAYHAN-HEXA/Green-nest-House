import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/Home/Home.jsx';
import Plants from './pages/Plants/Plants.jsx';
import MyProfile from './pages/MyProfile/MyProfile.jsx';
import Consultations from './pages/Consultations/Consultations.jsx';
import { DataContext } from './context/DataContext/DataContext.jsx';
import DataProvider from './context/DataContext/DataProvider.jsx';
import axios from 'axios';
import LogIn from './pages/LogIn/LogIn.jsx';
import Register from './pages/Register/Register.jsx';
import AuthProvider from './context/AuthContext/AuthProvider.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import PlantDetails from './pages/PlantDetails/PlantDetails.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          const [tipsRes, expertsRes] = await Promise.all([
            axios.get('/caretips.json'),
            axios.get('/experts.json'),
          ]);

          return {
            tips: tipsRes.data,
            experts: expertsRes.data,
          };
        },
      },
      {
        path: '/plants',
        element: <Plants />,
      },
      {
        path: '/my-profile',
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: <LogIn />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/plants/:id',
        element: (
          <PrivateRoute>
            <PlantDetails />
          </PrivateRoute>
        ),
        errorElement: <h1>Oops! Not good!</h1>,
      },
    ],
  },
]);

document.body.setAttribute('data-theme', 'green-nest');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <DataProvider>
        <RouterProvider router={routes} />
      </DataProvider>
    </AuthProvider>
  </StrictMode>
);
