import Typography from "@mui/material/Typography";
import { Avatar, Card, CardContent, CardHeader, Stack } from "@mui/material";
import "./CardCurso.css";

const CardCurso = ({ curso }) => {
  return (
    <Card className="cardCurso">
      <CardHeader
        className="CardHeader"
        avatar={
          <img
            className="CardHeader-img"
            src={process.env.PUBLIC_URL + curso.logo}
            alt="header img"
          />
        }
        title={curso?.nombre}
      />

      <Stack className="cardCurso-body"></Stack>

      <CardContent className="CardContent">
        <Avatar>
          <img
            className="CardContent-img"
            src={process.env.PUBLIC_URL + curso.iconoClase}
            alt="content img"
          />
        </Avatar>

        <Stack className="CardContent-subs">
          <Typography variant="subtitle2" color="gray">
            {curso.clasesCompletadas} de {curso.totalClases} - restan{" "}
            {curso.tiempoRestante} min
          </Typography>

          <Typography variant="subtitle1" color="white">
            {curso.nombreClase}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CardCurso;
