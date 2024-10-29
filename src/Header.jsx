import { Grid2 } from "@mui/material";

const Header = () => {
  return (
    <Grid2
      sx={{
        border: "1px cyan solid",
        height: "64px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Grid2 sx={{ marginLeft: "15px" }}>
        <img
          src={process.env.PUBLIC_URL + "/nombrePlatzi.svg"}
          alt="Nombre Platzi"
          style={{ width: "90px" }}
        />
      </Grid2>
      <Grid2
        sx={{
          width: "56px",
          height: "34px",
          marginRight: "15px",
          borderRadius: "33px",
          backgroundColor: "#1c232c",
        }}
      ></Grid2>
    </Grid2>
  );
};

export default Header;
