import {DB} from '../../DB/DB';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Item from './Item';

function Portafolio() {
  const {portafolio} = DB;
  return (
    <>
      <Header />
      <div className="md:flex md:min-h-screen ">
        <Sidebar />
        <section className="flex bg-gradient-to-b from-white via-neutral-400 to-black">
          <div className="flex justify-center h-56 grid-cols-3 gap-4 content-start">
            {portafolio.map((item, index) => (
              <Item key={item.alt + index} item={item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Portafolio;
