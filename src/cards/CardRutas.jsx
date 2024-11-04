import {
  Card,
  Stack,
  CardHeader,
  Typography,
  CardContent,
  LinearProgress,
  Divider,
} from "@mui/material";
import "./CardRutas.css";

const CardRutas = ({ ruta }) => {
  return (
    <Card className="cardRutas">
      <CardHeader
        className="cardRutas-header"
        avatar={
          <img
            className="cardRutas-headerImg"
            src={process.env.PUBLIC_URL + ruta.logo}
            alt="header img"
          />
        }
      />

      <CardContent className="cardRutas-content">
        <Typography variant="body1" fontWeight={"bold"}>
          {ruta.nombre}
        </Typography>
        <Typography variant="body2">
          {ruta.totalCursos} Cursos | {ruta.tipo}
        </Typography>

          <LinearProgress
            className="cardRutas-progress"
            variant="determinate"
            value={ruta.progreso}
            sx={{
              width: "100%", 
              borderRadius: 4,
              backgroundColor: 'rgba(0, 255, 255, 0.3)',
              "& .MuiLinearProgress-bar": {
                backgroundColor: 'cyan',
              }
            }}
          />
      </CardContent>
    </Card>
  );
};

export default CardRutas;
