import { Grid2, Typography } from "@mui/material";

const Header = () => {
  return (
    <Grid2
      sx={{
        height: "64px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#010101",
        justifyContent: "space-between",
      }}
    >
      <Grid2
        sx={{
          width: "90px",
          marginLeft: "15px",
          backgroundColor: "transparent",
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/nombrePlatzi.svg"}
          alt="Nombre Platzi"
          style={{ width: "90px", backgroundColor: "transparent" }}
        />
      </Grid2>
      <Grid2
        sx={{
          width: "57px",
          height: "34px",
          marginRight: "15px",
          borderRadius: "33px",
          backgroundColor: "#1c232c",
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/rocket.png"}
          alt="Cohete"
          style={{
            width: "23px",
            height: "23px",
            backgroundColor: "transparent",
          }}
        />
        <Typography
          sx={{
            width: "23px",
            height: "23px",
            backgroundColor: "transparent",
          }}
        >
          5
        </Typography>
      </Grid2>
    </Grid2>
  );
};

export default Header;
