import Descripciones from './Descripciones';
import {DB} from '../../DB/DB';
import Header from '../Header';
import Sidebar from '../Sidebar';

function CurriculumSectionsExperiencia() {
  const {curriculumSections} = DB;

  const {experiencia} = curriculumSections;

  return (
    <>
      <Header />
      <div className="md:flex md:min-h-screen ">
        <Sidebar />
        <main className="px-8 flex-auto justify-start bg-gradient-to-b from-white via-neutral-400 to-black items-stretch">
          <Descripciones descripciones={experiencia} />
        </main>
      </div>
    </>
  );
}
export default CurriculumSectionsExperiencia;
