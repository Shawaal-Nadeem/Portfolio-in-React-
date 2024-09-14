import { Outlet } from "react-router-dom"
import Navigation from "../components/Navigation"
import ThemeSwitcher from "../components/ThemeSwitcher"
import MobileNavigation from "../components/MobileNavigation"
import ScrollToTop from "../components/ScrollToTop"

const Layout = () => {
  return (
    <div className="font-Poppins">
      <ScrollToTop />
      <ThemeSwitcher />
      <Navigation />
      <MobileNavigation />
      <Outlet />
    </div>
  )
}

export default Layout
