import React from 'react';
import {Link} from 'react-router-dom';
import {DB} from '../DB/DB';

const Sidebar = () => {
  const {footer} = DB;
  return (
    <aside className="lg:w-50 px-4 py-5 bg-gradient-to-b from-white via-neutral-400 to-black">
      <div className="animate-pulse  flex flex-col">
        <Link
          className="hover:scale-110 text-center bg-blue-900 mb-5 w-auto py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-zinc-800 hover:text-black transition-colors"
          to={`/`}
        >
          perfil
        </Link>
        <Link
          className="hover:scale-110 text-center bg-blue-900 mb-5 w-auto py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-zinc-800 hover:text-black transition-colors"
          to={`/curriculumSections-educacion`}
        >
          educacion
        </Link>
        <Link
          className="hover:scale-110 text-center bg-blue-900 mb-5 w-auto py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-zinc-800 hover:text-black transition-colors"
          to={`/curriculumSections-experiencia`}
        >
          experiencia
        </Link>
        <Link
          className="hover:scale-110 text-center bg-blue-900 mb-5 w-auto py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-zinc-800 hover:text-black transition-colors"
          to={`/portafolio`}
        >
          portafolio
        </Link>
      </div>
      <div className="flex flex-col fixed bottom-4 text-blue-900 uppercase underline font-bold">
        <a
          className="hover:scale-110 hover:cursor-pointer hover:text-black"
          href={footer.linkedin}
          target="_blank"
        >
          linkedin
        </a>
        <a
          className="hover:scale-110 hover:cursor-pointer hover:text-black"
          href={footer.gitHub}
          target="_blank"
        >
          gitHub
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
