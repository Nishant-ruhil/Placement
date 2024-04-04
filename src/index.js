import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Error } from './components/404';
import './components/fonts/icomoon/style.css';
import './components/css/bootstrap.min.css';
import './components/css/owl.theme.default.min.css';
import './components/css/owl.theme.default.min.css';
import './components/css/jquery.fancybox.min.css';
import './components/css/bootstrap-datepicker.css';
import './components/fonts/flaticon/font/flaticon.css';
import './components/css/aos.css';
import './components/css/style.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
let route = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about-us',
      element: <About />
    },
    {
      path: '/contact-us',
      element: <Contact />
    },
    {
      path: '*',
      element: <Error />
    }
  ]
);

root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
