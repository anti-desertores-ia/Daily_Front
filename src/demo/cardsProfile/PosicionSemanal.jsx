import { Box, Grid2, Stack, Typography } from "@mui/material";
import "./PosicionSemanal.css";

const PosicionSemanal = () => {
  return (
    <Box className="PosicionSemanal">
      <Grid2 container spacing={2} className="PosicionSemanal-header">
        <Typography variant="body1" fontWeight={"bold"}>
          Tu posición semanal
        </Typography>
        <Grid2 container spacing={1} className="PosicionSemanal-ruta-container">
          <img
            src={process.env.PUBLIC_URL + "/assets/iconoRuta.svg"}
            alt="icono ruta"
            className="PosicionSemanal-ruta-icono"
          />
          <Typography variant="body1" className="PosicionSemanal-ruta">
            Ruta: Trabaja como UX/UI Designer
          </Typography>
        </Grid2>
      </Grid2>
      <Stack className="PosicionSemanal-content">
        <Grid2 container className="PosicionSemanal-content-lugar">
          <img src={process.env.PUBLIC_URL + "/assets/first.svg"} alt="primer puesto" className="PosicionSemanal-medalla"/>
          <img src={process.env.PUBLIC_URL + "/assets/nicolle.png"} alt="segundo puesto" className="PosicionSemanal-estudiante"/>
          <Typography variant="body1" className="PosicionSemanal-content-nombre">
            Nicolle Sanchez
          </Typography>
          <Typography variant="body1">
            3.122 pts
          </Typography>
        </Grid2>
        <Grid2 container className="PosicionSemanal-content-lugar">
          <img src={process.env.PUBLIC_URL + "/assets/second.svg"} alt="primer puesto" className="PosicionSemanal-medalla"/>
          <img src={process.env.PUBLIC_URL + "/assets/alex.png"} alt="segundo puesto" className="PosicionSemanal-estudiante"/>
          <Typography variant="body1" className="PosicionSemanal-content-nombre">
            Alexander Arismendy
          </Typography>
          <Typography variant="body1">
            3.996 pts
          </Typography>
        </Grid2>
        <Grid2 container className="PosicionSemanal-content-lugar">
          <img src={process.env.PUBLIC_URL + "/assets/third.svg"} alt="primer puesto" className="PosicionSemanal-medalla"/>
          <img src={process.env.PUBLIC_URL + "/assets/gabi.png"} alt="segundo puesto" className="PosicionSemanal-estudiante"/>
          <Typography variant="body1" className="PosicionSemanal-content-nombre">
            Gabriela Rodríguez
          </Typography>
          <Typography variant="body1">
            2.080 pts
          </Typography>
        </Grid2>
      </Stack>

      <Stack className="ConsultarPosicion">
        <Typography color="initial" fontWeight={'bold'}>
          Ver mi posición en todos los Rankings
        </Typography>
      </Stack>
    </Box>
  );
};

export default PosicionSemanal;
