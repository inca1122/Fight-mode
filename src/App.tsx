import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import Zawodnicy from './pages/Zawodnicy';
import FightCard from './pages/FightCard';
import News from './pages/News';
import PPVPage from './pages/PPVPage';

function App() {
  return (
    <BrowserRouter basename="/Fight-mode">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/zawodnicy" element={<Zawodnicy />} />
          <Route path="/karta-walk" element={<FightCard />} />
          <Route path="/aktualnosci" element={<News />} />
          <Route path="/ppv" element={<PPVPage />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </BrowserRouter>
  );
}

export default App;
