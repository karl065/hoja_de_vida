import './App.css';
import CurriculumSections from './components/CurriculumSections/CurriculumSections';
import Home from './components/Home';
import Portafolio from './components/Portafolio/Portafolio';

import {DB} from './DB/DB';

const {home, curriculumSections, portafolio, footer} = DB;

function App() {
  return (
    <div className="App">
      <Home home={home} footer={footer} />
      <CurriculumSections curriculumSections={curriculumSections} />
      <Portafolio portafolio={portafolio} />
    </div>
  );
}

export default App;
