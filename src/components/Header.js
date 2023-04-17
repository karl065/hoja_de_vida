import React from 'react';
import {DB} from './../DB/DB';

const Header = () => {
  const {home, footer} = DB;
  return (
    <header className="px-4 py-5 bg-gradient-to-t from-white via-neutral-400 to-neutral-400">
      <div className="md:flex md:justify-between items-stretch font-bold">
        <div className="uppercase flex flex-col">
          <h1 className="hover:scale-110 bg-gradient-to-br text-black from-indigo-900 to-black text-transparent bg-clip-text leading-normal text-4xl text-left mb-5 md:mb-0">
            {home.nombre}
          </h1>
          <h2 className="hover:scale-110 bg-gradient-to-br from-indigo-900 to-black text-transparent bg-clip-text leading-normal text-2xl text-left mb-5 md:mb-0">
            {footer.email}
          </h2>
          <h2 className="hover:scale-110 bg-gradient-to-br from-indigo-900 to-black text-transparent bg-clip-text leading-normal text-2xl text-left mb-5 md:mb-0">
            {home.celular}
          </h2>
        </div>
        <div className="flex justify-center">
          <h1 className="hover:scale-110 my-8 mx-8 bg-gradient-to-br from-indigo-900 to-black text-transparent bg-clip-text leading-normal text-6xl text-left mb-5 md:mb-0">
            {home.profesion}
          </h1>
        </div>
        <div>
          <img
            className="hover:scale-110 rounded-full w-24 mx-8"
            src={home.imagen}
            alt={home.nombre}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
