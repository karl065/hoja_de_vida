import {useState} from 'react';
import Descripciones from './Descripciones';

function CurriculumSections({curriculumSections}) {
  const {experiencia, educacion} = curriculumSections;
  const [verExperiencia, setVerExperiencia] = useState(false);
  return (
    <section className="bg-gradient-to-b from-blue-300 to-blue-600">
      <nav>
        <button onClick={() => setVerExperiencia(false)}>Educacion</button>
        <button onClick={() => setVerExperiencia(true)}>Experiencia</button>
      </nav>
      {verExperiencia ? (
        <Descripciones descripciones={experiencia} />
      ) : (
        <Descripciones descripciones={educacion} />
      )}
    </section>
  );
}
export default CurriculumSections;
