import { Box, Stack } from "@mui/material";
import CardCurso from "./cards/CardCurso";
import Welcome from "./Welcome";
import "./Home.css";
import CardRutas from "./cards/CardRutas";
import TitleRutas from "./titlesSections/TitleRutas";
import OpcionesDeAprendizaje from "./titlesSections/OpcionesDeAprendizaje";
import CardOpciones from "./cards/CardOpciones";
import TitleCursosRecomendados from "./titlesSections/TitleCursosRecomendados";
import CardRecomendados from "./cards/CardRecomendados";
import CursosNuevos from "./titlesSections/CursosNuevos";
import TitleTip from "./titlesSections/TitleTip";
import CardTip from "./cards/CardTip";
import CardShorts from "./cards/CardShorts";
import TitleShorts from "./titlesSections/TitleShorts";

const cursos = [
  {
    logo: "/assets/logoCurso.svg",
    nombre: "Curso de Programación",
    iconoClase: "/assets/iconPlay.svg",
    clasesCompletadas: 3,
    totalClases: 22,
    tiempoRestante: 2,
    nombreClase: "Introducción a JavaScript",
  },
  {
    logo: "/assets/logoCurso.svg",
    nombre: "Curso de Diseño",
    iconoClase: "/assets/iconPlay.svg",
    clasesCompletadas: 5,
    totalClases: 15,
    tiempoRestante: 10,
    nombreClase: "Teoría del Color",
  },
  {
    logo: "/assets/logoCurso.svg",
    nombre: "Curso de Marketing",
    iconoClase: "/assets/iconPlay.svg",
    clasesCompletadas: 1,
    totalClases: 8,
    tiempoRestante: 5,
    nombreClase: "SEO Básico",
  },
  {
    logo: "/assets/logoCurso.svg",
    nombre: "Curso de Fotografía",
    iconoClase: "/assets/iconPlay.svg",
    clasesCompletadas: 2,
    totalClases: 10,
    tiempoRestante: 15,
    nombreClase: "Composición Fotográfica",
  },
  {
    logo: "/assets/logoCurso.svg",
    nombre: "Curso de Música",
    iconoClase: "/assets/iconPlay.svg",
    clasesCompletadas: 0,
    totalClases: 5,
    tiempoRestante: 30,
    nombreClase: "Introducción a la Guitarra",
  },
];

const rutas = [
  {
    logo: "/assets/iconUser.svg",
    nombre: "Diseño de interfaces",
    totalCursos: 10,
    tipo: "Ruta de Platzi",
    progreso: 30,
  },
  {
    logo: "/assets/Group28.svg",
    nombre: "Ingles para entrevistas",
    totalCursos: 20,
    tipo: "Ruta de Platzi",
    progreso: 7,
  },
  {
    logo: "/assets/Group28.svg",
    nombre: "Marketing digital",
    totalCursos: 17,
    tipo: "Ruta de Platzi",
    progreso: 1,
  },
  {
    logo: "/assets/iconUser.svg",
    nombre: "Frontend con React.js",
    totalCursos: 8,
    tipo: "Ruta personalizada",
    progreso: 78,
  },
];

const opciones = [
  {
    logo: "/assets/Group 27.svg",
    nombre: "Transformación Digital",
  },
  {
    logo: "/assets/Group28.svg",
    nombre: "Producto",
  },
  {
    logo: "/assets/logoCurso.svg",
    nombre: "Negocios",
  },
  {
    logo: "/assets/Group25.svg",
    nombre: "Marketing Digital",
  },
  {
    logo: "/assets/desarrolloWeb.svg",
    nombre: "Desarrollo Web",
  },
];

const cursosRecomendados = [
  {
    logo: "/assets/logoCurso.svg",
    nombre: "Curso de Programación",
    iconoClase: "/assets/iconPlay.svg",
    profesor: "Profe: Oscar Barajas Tavares",
    nombreClase: "Introducción a JavaScript",
  },
  {
    logo: "/assets/logoCurso.svg",
    nombre: "Curso de Diseño",
    iconoClase: "/assets/iconPlay.svg",
    profesor: "Pofe: Juan David Castro",
    nombreClase: "Teoría del Color",
  },
  {
    logo: "/assets/logoCurso.svg",
    nombre: "Curso de Marketing",
    iconoClase: "/assets/iconPlay.svg",
    profesor: "Profe: Diana Reyes",
    nombreClase: "SEO Básico",
  },
  {
    logo: "/assets/logoCurso.svg",
    nombre: "Curso de Fotografía",
    iconoClase: "/assets/iconPlay.svg",
    profesor: "Profe: Aníbal Rojas",
    nombreClase: "Introducción a IA",
  },
  {
    logo: "/assets/logoCurso.svg",
    nombre: "Curso de Música",
    iconoClase: "/assets/iconPlay.svg",
    profesor: "Profe: Gina Pedraza",
    nombreClase: "Introducción a Ingles",
  },
];

const Home = () => {
  return (
    <Box className="Home">
      <Stack className="Home-welcome">
        <Welcome />
      </Stack>
      <Box className="Home-card">
        {cursos.map((curso, index) => (
          <CardCurso key={index} curso={curso} />
        ))}
      </Box>

      <TitleRutas />
      <Box className="Home-cardRutas">
        {rutas.map((ruta, index) => (
          <CardRutas key={index} ruta={ruta} />
        ))}
      </Box>

      <OpcionesDeAprendizaje />
      <Box className="Home-opciones">
        {opciones.map((opcion, index) => (
          <CardOpciones key={index} opcion={opcion} />
        ))}
      </Box>

      <TitleCursosRecomendados />
      <Box className="Home-cardRecomendados">
        {cursosRecomendados.map((cursoRecomendado, index) => (
          <CardRecomendados
            key={index} 
            cursoRecomendado={cursoRecomendado} 
          />
        ))}
      </Box>

      <CursosNuevos />
      <Box className="Home-cardRecomendados">
        {cursosRecomendados.map((cursoRecomendado, index) => (
          <CardRecomendados
            key={index} 
            cursoRecomendado={cursoRecomendado} 
          />
        ))}
      </Box>

      <TitleTip />
      <Box className="CardTip">
        <CardTip />
      </Box>

      <TitleShorts />
      <Box className="CardShorts">
        <CardShorts />
      </Box>
    </Box>
  );
};

export default Home;
