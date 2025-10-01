import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '@/components/Navbar.tsx';
import Footer from '@/components/Footer.tsx';
import HomePage from '@/pages/FocusPage.tsx';
import CvPage from '@/pages/CvPage.tsx';
import ResearchPage from '@/pages/ResearchPage.tsx';
import TeachingPage from '@/pages/TeachingPage.tsx';

const App = () => (
  <div className="min-h-screen bg-white text-primary">
    <Navbar />
    <main className="pt-20">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<CvPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/teaching" element={<TeachingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;
