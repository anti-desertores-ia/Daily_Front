import { Box, Stack } from "@mui/material";
import CardCurso from "./CardCurso";
import Welcome from "./Welcome";
import "./Home.css";
import Header from "./Header";

const cursos = [
  {
    logo: "./images/logoCurso.svg",
    nombre: "Curso de Programación",
    iconoClase: "./images/iconPlay.svg",
    clasesCompletadas: 3,
    totalClases: 22,
    tiempoRestante: 2,
    nombreClase: "Introducción a JavaScript",
  },
  {
    logo: "./images/logoCurso.svg",
    nombre: "Curso de Diseño",
    iconoClase: "./images/iconPlay.svg",
    clasesCompletadas: 5,
    totalClases: 15,
    tiempoRestante: 10,
    nombreClase: "Teoría del Color",
  },
  {
    logo: "./images/logoCurso.svg",
    nombre: "Curso de Marketing",
    iconoClase: "./images/iconPlay.svg",
    clasesCompletadas: 1,
    totalClases: 8,
    tiempoRestante: 5,
    nombreClase: "SEO Básico",
  },
  {
    logo: "./images/logoCurso.svg",
    nombre: "Curso de Fotografía",
    iconoClase: "./images/iconPlay.svg",
    clasesCompletadas: 2,
    totalClases: 10,
    tiempoRestante: 15,
    nombreClase: "Composición Fotográfica",
  },
  {
    logo: "./images/logoCurso.svg",
    nombre: "Curso de Música",
    iconoClase: "./images/iconPlay.svg",
    clasesCompletadas: 0,
    totalClases: 5,
    tiempoRestante: 30,
    nombreClase: "Introducción a la Guitarra",
  },
];

const Home = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          border: "1px solid red",
          width: "100%", // Cambiar a 100% para utilizar el espacio completo
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#13161D",
        }}
      >
        <Stack className="Home-welcome">
          <Welcome />
        </Stack>
        <Box
          sx={{
            display: "flex",
            overflowX: "auto", // Permitir el desplazamiento horizontal
            padding: "10px 0",
          }}
        >
          {cursos.map((curso, index) => (
            <CardCurso key={index} curso={curso} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Home;
