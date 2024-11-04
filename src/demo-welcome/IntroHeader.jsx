import { Grid2 } from "@mui/material";

const IntroHeader = () => {
  return (
    <Grid2
        sx={{
            height: "64px",
            width: "390px",
            display: "flex",
            position: "absolute",
            top: "0",
            left: "0",
            flexDirection: "row",
            backgroundColor: "#010101",
            alignItems: "center",
            justifyContent: "start",
        }}
    >
      <Grid2 sx={{
         marginLeft: "15px", 
         backgroundColor: "transparent" ,
         textAlign: "left",

         }}>
        <img
          src={process.env.PUBLIC_URL + "/nombrePlatzi.svg"}
          alt="Nombre Platzi"
          style={{ width: "90px", backgroundColor: "transparent" }}
        />
      </Grid2>
    </Grid2>
  );
};

export default IntroHeader;
