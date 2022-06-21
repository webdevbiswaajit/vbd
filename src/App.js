import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Blog from "./Pages/Blog";
import Other from "./Pages/Other";
import NotFound from "./Pages/NotFound";
import AboutUs from "./Pages/AboutUs";
import Career from "./Pages/Career";
import ContuctUs from "./Pages/ContuctUs";
import Pricing from "./Pages/Pricing";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsCondition from "./Pages/TermsCondition";
import SingnIn from "./Pages/SingnIn";
import Register from "./Pages/Register";
import Search from "./Pages/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="career" element={<Career />} />
        <Route path="/other" element={<Other />} />
        <Route path="/contact" element={<ContuctUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsCondition />} />
        <Route path="/sign-in" element={<SingnIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
