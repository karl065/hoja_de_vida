import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Portafolio from './components/Portafolio/Portafolio';
import CurriculumSectionsEducation from './components/CurriculumSections/CurriculumSectionsEducation';
import CurriculumSectionsExperiencia from './components/CurriculumSections/CurriculumSectionsExperiencia';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/curriculumSections-educacion"
            exact
            element={<CurriculumSectionsEducation />}
          />
          <Route
            path="/curriculumSections-experiencia"
            exact
            element={<CurriculumSectionsExperiencia />}
          />
          <Route path="/portafolio" exact element={<Portafolio />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
