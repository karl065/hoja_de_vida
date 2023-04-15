import Header from './Header';
import Sidebar from './Sidebar';
import {DB} from './../DB/DB';

function Home() {
  const {home} = DB;
  return (
    <>
      <Header />
      <div className="md:flex md:min-h-screen ">
        <Sidebar />
        <main className="items-start px-8 flex-auto flex bg-gradient-to-b from-white via-neutral-400 to-black">
          <div className="font-bold uppercase px-4 my-4">
            <h1 className="hover:scale-110 text-blue-700">
              perfil Profesional:
            </h1>
            <p
              className="flex justify-start text-justify bg-clip-text mb-5 my-4 md:mb-0"
              dangerouslySetInnerHTML={{
                __html: home.perfil.replace(/\n/g, '<br>'),
              }}
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
