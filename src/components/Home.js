import './Home.scss';

function Home({home, footer}) {
  return (
    <section className="Home">
      <div className="Home__info">
        <h1>{home.nombre}</h1>
        <h2 className="Home__title">{home.profesion}</h2>
        <ul>
          <li>
            <span className="Home__icon">📱</span>
            <a href={`cel:${home.celular}`} className="Home__link">
              {home.celular}
            </a>
          </li>
          <li>
            <span className="Home__icon">📧</span>
            <a href={`email:${footer.email}`} className="Home__link">
              {footer.email}
            </a>
          </li>
        </ul>
      </div>
      <div className="Home__imagen">
        <img src={home.imagen} alt={home.nombre} />
      </div>
    </section>
  );
}

export default Home;
