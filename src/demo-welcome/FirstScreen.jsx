import { Grid2} from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FirstScreen = () => {
    const navigate = useNavigate();

    const handleClick = () => {
          navigate("/welcome/demo-indications");
        }

    return (
        <Grid2
        sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}
        >

            <Grid2
            sx={{
               height: "87px",
               width: "242px",
               backgroundColor: "transparent",
               marginTop: "96px",
               fontSize: "22px",

            }}
            >
                Abre esta demo desde tu celular!

            </Grid2>

            <img 
                src={process.env.PUBLIC_URL + "/platzi-phone.png"}
                alt="Cohete"
                style={{ width: "135px", height: "245px", backgroundColor: "transparent" }}
            />

            <Grid2
                sx={{
                    height: "90px",
                    width: "157px",
                    backgroundColor: "transparent",
                    color: "white",
                    marginTop: "39px",
                    fontSize: "14px",
                }}
            >
                Bienvenido a la demo de
                <span
                style={{ fontWeight: "700", color : "#07E98A" }}>
                    {" "}PLATZI DAILY    
                </span>
                <br/>
                <br/>

                Elaborada por el equipo
                anti-desertores.ia

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

export default FirstScreen;