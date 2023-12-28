// Importar el componente de columna desde react-bootstrap
import { Col } from "react-bootstrap";

// Definir el componente funcional ProjectCard
export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      {/* Contenedor para la imagen del proyecto */}
      <div className="proj-imgbx">
        {/* Imagen del proyecto */}
        <img src={imgUrl} alt={title} />
        {/* Contenedor para el texto del proyecto */}
        <div className="proj-txtx">
          {/* Título del proyecto */}
          <h4>{title}</h4>
          {/* Descripción del proyecto */}
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
