import { Routes, Route } from "react-router-dom";
import Layout from "./component/layout/Layout";
import Home from "./pages/home/Home";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import SignIn from "./pages/SignIn";
import Sell from "./pages/Sell/Sell";
import Buy from "./pages/ourServices/Buy"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="sell" element={<Sell />} />
        <Route path="/buy" element={<Buy />} />
      </Routes>
    </Layout>
  );
}

export default App;
