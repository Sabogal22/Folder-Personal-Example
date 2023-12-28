// Importar estilos globales de la aplicación
import "./App.css";
// Importar estilos de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Importar componentes de React
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

// Definir el componente principal de la aplicación
function App() {
  // Retornar la estructura de la aplicación
  return (
    <div className="App">
      {/* Renderizar el componente de la barra de navegación */}
      <NavBar />
      {/* Renderizar el componente del banner */}
      <Banner />
      {/* Renderizar el componente de habilidades */}
      <Skills />
      {/* Renderizar el componente de proyectos */}
      <Projects />
      {/* Renderizar el componente de contacto */}
      <Contact />
      {/* Renderizar el componente del pie de página */}
      <Footer />
    </div>
  );
}

// Exportar el componente principal para su uso en otros archivos
export default App;
