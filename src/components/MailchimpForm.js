// Importar componentes y biblioteca para suscripción a Mailchimp
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter"; // Importar componente Newsletter

// Definir el componente funcional MailchimpForm
export const MailchimpForm = () => {
  // Construir la URL para la suscripción a Mailchimp utilizando variables de entorno
  const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <>
      {/* Componente MailchimpSubscribe para gestionar la suscripción a Mailchimp */}
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          // Pasar el estado de la suscripción y la función de devolución de llamada al componente Newsletter
          <Newsletter
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)} // Función de devolución de llamada para procesar la suscripción
          />
        )}
      />
    </>
  );
};
