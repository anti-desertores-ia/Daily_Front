import { Grid2 } from "@mui/material";

const Header = () => {
  return (
    <Grid2
      sx={{
        height: "64px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#010101",
        justifyContent: "space-between",
      }}
    >
      <Grid2 sx={{ marginLeft: "15px", backgroundColor: "transparent" }}>
        <img
          src={process.env.PUBLIC_URL + "/nombrePlatzi.svg"}
          alt="Nombre Platzi"
          style={{ width: "90px", backgroundColor: "transparent" }}
        />
      </Grid2>
      <Grid2
        sx={{
          width: "56px",
          height: "34px",
          marginRight: "15px",
          borderRadius: "33px",
          backgroundColor: "#1c232c",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Grid2 sx={{backgroundColor: "transparent"}}>
          <img 
            src={process.env.PUBLIC_URL + "/rocket.png"}
            alt="Cohete"
            style={{ width: "23px", height: "23px", backgroundColor: "transparent" }}
          />
        </Grid2>
        <Grid2 sx={{backgroundColor: "transparent"}}>
          5
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default Header;
