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
            <p
              dangerouslySetInnerHTML={{
                __html: descripcion.description.replace(/\n/g, '<br>'),
              }}
            ></p>
          </article>
        );
      })}
    </div>
  );
}

export default Descripciones;
