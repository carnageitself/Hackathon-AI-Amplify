import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import React from "react"
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  const Layout: React.FC = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        {/* <Footer /> */}
      </div>
    );
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/contact",
          element: <Contact/>,
        }
      ]
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
