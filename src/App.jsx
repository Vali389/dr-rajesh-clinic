import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import PageTitleManager from './components/PageTitleManager';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-[#162736] selection:bg-[#cdae9f] selection:text-[#112a46]">
        <PageTitleManager />
        <ScrollToTop />
        <WhatsAppButton />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
