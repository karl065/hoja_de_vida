import './Descripciones.scss';

function Descripciones({descripciones}) {
  return (
    <div className="Descripciones">
      {descripciones.map((descripcion, index) => {
        return (
          <article
            className="Descripciones__item"
            key={descripcion.titulo + index}
          >
            <h3>{descripcion.titulo}</h3>
            <span className="Descripciones__year">{descripcion.year}</span>
            <p>{descripcion.description}</p>
          </article>
        );
      })}
    </div>
  );
}

export default Descripciones;
