// Importar React hooks y componentes de react-bootstrap
import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

// Definir el componente funcional Newsletter
export const Newsletter = ({ status, message, onValidated }) => {
  // Estado para gestionar el correo electrónico
  const [email, setEmail] = useState("");

  // Efecto para limpiar el campo de correo electrónico cuando el estado cambia a "success"
  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar el formato del correo electrónico antes de llamar a onValidated
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  // Función para limpiar el campo de correo electrónico
  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          {/* Columna para la descripción y mensajes de estado */}
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to our Newsletter<br></br> & Never miss latest updates
            </h3>
            {/* Mostrar mensajes de estado según el estado del formulario */}
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          {/* Columna para el formulario de suscripción */}
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              {/* Contenedor para el campo de correo electrónico y el botón de envío */}
              <div className="new-email-bx">
                {/* Input para el correo electrónico */}
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                {/* Botón de envío del formulario */}
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
