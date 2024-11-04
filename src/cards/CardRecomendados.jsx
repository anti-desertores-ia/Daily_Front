import Typography from "@mui/material/Typography";
import { Avatar, Card, CardContent, Stack } from "@mui/material";
import "./CardRecomendados.css";

const CardRecomendados = ({ cursoRecomendado }) => {
  return (
    <Card className="CardRecomendados">
      <Stack className="CardRecomendados-body"></Stack>

      <CardContent className="CardContent">
        <Avatar>
          <img
            className="CardContent-img"
            src={process.env.PUBLIC_URL + cursoRecomendado.iconoClase}
            alt="content img"
          />
        </Avatar>

        <Stack className="CardRecomendados-subs">
          <Typography variant="body1">
            {cursoRecomendado.nombre}
          </Typography>
          <Typography variant="body2">
            {cursoRecomendado.profesor}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CardRecomendados;
