import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./CardOpciones.css";

const CardOpciones = ({ opcion }) => {
  return (
    <Card className="CardOptions">
      {/* <CardActionArea> */}
        <div className="CardActionArea-div">
          <CardMedia
            component="img"
            src={process.env.PUBLIC_URL + opcion.logo}
            alt="green iguana"
          />
        </div>
        <CardContent className="CardContent-opcion">
          <Typography variant="body2">{opcion.nombre}</Typography>
        </CardContent>
      {/* </CardActionArea> */}
    </Card>
  );
};

export default CardOpciones;
