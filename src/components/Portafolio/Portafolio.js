import Item from './Item';
import './Portafolio.scss';

function Portafolio({portafolio}) {
  return (
    <section className="Portafolio">
      <h2 className="Portafolio__title">Portafolio</h2>
      <div className="Portafolio__wrap">
        {portafolio.map((item, index) => (
          <Item key={item.alt + index} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Portafolio;
