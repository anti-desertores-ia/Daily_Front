import { Grid2} from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const IndicationsScreen = () => { 
    const navigate = useNavigate();

    const handleClick = () => {
          navigate("/welcome/profile-selection");
        }

    return (
        <Grid2
        sx={{
            height: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}
        >

            <Grid2
            sx={{
               height: "232px",
               width: "278px",
               backgroundColor: "transparent",
               fontSize: "22px",
               alignContent: "center",
               marginTop: "172px",

            }}
            >
                Agradecemos mucho el <br />
                tiempo que tomas para <br />
                probar esta versión <br />
                <br />
                <span
                style={{ fontStyle: "italic" }}
                >
                Por favor elige uno de los<br />
                tres perfiles a continuación<br />
                para la demo! 
                </span>

            </Grid2>

            <Button
            onClick={handleClick}
            sx={{
                position: "absolute",
                bottom: "0px",
                width: "352px",
                height: "48px",
                backgroundColor: "#07E98A",
                color: "#13161D",
                fontWeight: "700",
                marginBottom: "58px",
                textTransform: "none",
                }}
            >
            Continuar
            </Button>
            
        </Grid2>
    )

}
 
export default IndicationsScreen;