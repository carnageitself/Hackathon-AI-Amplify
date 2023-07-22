import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import React from "react"
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

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
          element: <About/>,
        },
        {
          path: "/projects",
          element: <Projects/>,
        },
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
