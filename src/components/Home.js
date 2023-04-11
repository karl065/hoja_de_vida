function Home({home, footer}) {
  return (
    <section className="flex-auto justify-center bg-gradient-to-b from-blue-50 to-blue-300 flex items-stretch">
      <div className="py-4">
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
      <div className="flex justify-end py-12">
        <img
          className="rounded-full w-24"
          src={home.imagen}
          alt={home.nombre}
        />
      </div>
    </section>
  );
}

export default Home;
