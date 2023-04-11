import Item from './Item';

function Portafolio({portafolio}) {
  return (
    <section className="flex bg-gradient-to-b from-blue-600 to-blue-950">
      <h2 className="Portafolio__title">Portafolio</h2>
      <div className="h-56 grid grid-cols-3 gap-4 content-start">
        {portafolio.map((item, index) => (
          <Item key={item.alt + index} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Portafolio;
