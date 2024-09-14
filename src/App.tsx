import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Calendly from "./pages/Meeting"
import Layout from "./pages/Layout"
 
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "meeting",
        element: <Calendly />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
