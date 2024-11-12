import About from "./pages/website/About";
import Home from "./pages/website/Home";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Services from "./pages/website/Services";
import OurWorks from "./pages/website/OurWorks";
import Contact from "./pages/website/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import NotFound from "./pages/website/NotFound";
import PrivacyPolicy from "./pages/website/Policy";
import Faq from "./pages/website/Faq";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Outlet />
                <Footer />
              </>
            }
          >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="ourworks" element={<OurWorks />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="faq" element={<Faq />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
