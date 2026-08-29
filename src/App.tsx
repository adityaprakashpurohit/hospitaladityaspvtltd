
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import EmergencyBar from './components/EmergencyBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Departments from './pages/Departments';
import DepartmentDetails from './pages/DepartmentDetails';
import Doctors from './pages/Doctors';
import DoctorDetails from './pages/DoctorDetails';
import Services from './pages/Services';
import Emergency from './pages/Emergency';
import HealthPackages from './pages/HealthPackages';
import PackageDetails from './pages/PackageDetails';
import PatientInformation from './pages/PatientInformation';
import Resources from './pages/Resources';
import ArticleDetails from './pages/ArticleDetails';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import About from './pages/About';
import PrivacyPolicy from './pages/Privacy';
import Terms from './pages/Terms';
import Appointment from './pages/Appointment';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans bg-background">
        <EmergencyBar />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/departments/:id" element={<DepartmentDetails />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:id" element={<DoctorDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/health-packages" element={<HealthPackages />} />
            <Route path="/health-packages/:id" element={<PackageDetails />} />
            <Route path="/patient-information" element={<PatientInformation />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:id" element={<ArticleDetails />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
