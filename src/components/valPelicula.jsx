
import { Fragment } from "react";

const PeliculaItem = ({ pelicula, onEditar, onEliminar }) => {
  const { titulo, anio, genero, puntuacion } = pelicula;

  return (
    <Fragment>
      <li className="list-group-item list-group-item-action  list-group-item-warning d-flex justify-content-between align-items-center">

        <div>
          <div> <strong>Titulo:</strong> {titulo}</div>
          <div> <strong>Fecha de publicacion:</strong> [{anio}] </div>
          <div> <strong>Genero:</strong> {genero}</div>
          <div> <strong>Puntuacion:</strong> ★{puntuacion}</div>
        </div>

        <div>
          <i className="bi bi-pencil-square btn-edit icon-wi mx-1" onClick={onEditar}></i>
          <i className="bi bi-trash3-fill btn-delete icon-wi" onClick={onEliminar}></i>
        </div>
      </li>
    </Fragment>
  );
};

export default PeliculaItem;

