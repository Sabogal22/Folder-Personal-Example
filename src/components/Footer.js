// Importar componentes y recursos de Bootstrap y otras bibliotecas
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm"; // Importar componente MailchimpForm
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

// Definir el componente funcional Footer
export const Footer = () => {
  return (
    // Sección de pie de página
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* Componente MailchimpForm para la suscripción por correo */}
          <MailchimpForm />

          {/* Columna para mostrar el logo */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>

          {/* Columna para mostrar los iconos sociales y el texto de derechos de autor */}
          <Col size={12} sm={6} className="text-center text-sm-end">
            {/* Contenedor de iconos sociales */}
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>

            {/* Texto de derechos de autor */}
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
