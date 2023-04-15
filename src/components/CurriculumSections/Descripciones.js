function Descripciones({descripciones}) {
  return (
    <div className="justify-start grid grid-flow-col my-4">
      {descripciones.map((descripcion, index) => {
        return (
          <div
            className="text-left my-4 uppercase font-bold"
            key={descripcion.titulo + index}
          >
            <div>
              <h3 className="ml-2 hover:scale-110 text-blue-700 mr-2">
                titulo:
              </h3>
              <h3 className="ml-2">{descripcion.titulo}</h3>
            </div>
            <div>
              <h3 className="ml-2 hover:scale-110 text-blue-700 mr-2">año:</h3>
              <span className="ml-2">{descripcion.year}</span>
            </div>
            <div>
              <h3 className="ml-2 hover:scale-110 text-blue-700 mr-2">
                descripcion:
              </h3>
              <p
                className="ml-2"
                dangerouslySetInnerHTML={{
                  __html: descripcion.description.replace(/\n/g, '<br>'),
                }}
              ></p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Descripciones;
