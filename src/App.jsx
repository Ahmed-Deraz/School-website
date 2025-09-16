import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import American from "./pages/American/American";
import British from "./pages/British/British";
import Footer from "./components/Footer/Footer";
import Alumni from "./components/Alumni/Alumni";
import Title from "./components/Title/Title";
import AboutUs from "./pages/AboutUs/AboutUs";
import Achievers from "./pages/Achievers/Achievers";
import Extracurricular from "./pages/Extracurricular/Extracurricular";
import ExitSurvey from "./components/ExitSurvey/ExitSurvey";
import Accreditation from "./components/Accreditation/Accreditation";
import Students from "./pages/Students/Students";
import Facilities from "./pages/Facilities/Facilities";
import EventDetails from "./components/EventDetails/EventDetails";

const App = () => {
  const location = useLocation();
  const isEventPage = location.pathname === "/events";

  return (
    <div>
      <ExitSurvey />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/american" element={<American />} />
        <Route path="/british" element={<British />} />
        <Route path="/achievers" element={<Achievers />} />
        <Route path="/extracurricular" element={<Extracurricular />} />
        <Route path="/students" element={<Students />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/events" element={<EventDetails />} />
      </Routes>

      {!isEventPage && (
        <div className="container">
          <Title subtitle="ALUMNI" title="Wall Of Honors" />
          <Alumni />
          <Accreditation />
        </div>
      )}
      <div className="container">
        <Footer />
      </div>
    </div>
  );
};

export default App;
