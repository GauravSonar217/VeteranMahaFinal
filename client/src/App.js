import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './component/Navbar';
import Main from './component/Main';
import Template from './component/Template';
import ErrorPage from './component/ErrorPage';
import CareerPage from './component/CareerPage';
import Footer from './component/Footer';
import Contact from './component/Contact';
import PortfolioPage from './component/PortFolio';
import Services from './component/Services';
// import "../src/App.css";
import AdminPanel from './component/AdminPanel';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <React.Fragment>
        {/* <Navbar></Navbar> */}
        <Main></Main>
        {/* <Footer></Footer> */}
      </React.Fragment>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Template />,
        },
        {
          path: "/about/",
          element: <Template />,
        },
        {
          path: "/career/",
          element: <CareerPage />,
        },
        {
          path: "/portfolio/",
          element: <PortfolioPage />,
        },
        {
          path: "/contact/",
          element: <Contact></Contact>,
        },
        {
          path: "/service/",
          element: <Template />,
        },
        {
          path: "/admin/",
          element: <AdminPanel/>,
        },
      ],
    }
  ])
  return (
    <RouterProvider router={router}>
      {/* <Cursor></Cursor> */}
      {/* <Button class="normalBtn" text="put data" /> */}
    </RouterProvider>
    
  );
}
export default App;