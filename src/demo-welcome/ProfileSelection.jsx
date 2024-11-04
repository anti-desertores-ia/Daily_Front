import { useState } from "react";
import { Grid2 } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfileSelection = () => {
  const navigate = useNavigate();
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };

  const handleButtonClick = () => {
    if (selectedProfile === "alonso") {
      navigate("/demo/profile-alonso");
    } else if (selectedProfile === "gabi") {
      navigate("/demo/profile-gabi");
    } else if (selectedProfile === "alex") {
      navigate("/demo/profile-alex");
    }
  };

  return (
    <Grid2
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      <Grid2
        sx={{
          height: "232px",
          width: "278px",
          backgroundColor: "transparent",
          fontSize: "22px",
          alignContent: "center",
          marginTop: "40px",
          textAlign: "center",
        }}
      >
        Elije un perfil de estudiante de Platzi para la demo
      </Grid2>

      {/* Profiles Container */}
      <Grid2
        sx={{
          height: "132px",
          width: "303px",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "transparent",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {/* Profile 1 */}
        <Grid2
          onClick={() => handleProfileClick("alonso")}
          sx={{
            height: "132px",
            width: "91px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "transparent",
            fontWeight: "bold",
            cursor: "pointer",
            borderRadius: "50%",
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/profile-pictures/picture-alonso.png"}
            alt="Profile Alonso"
            style={{
              height: "90px",
              width: "90px",
              borderRadius: "50%",
              backgroundColor: "transparent",
              marginBottom: "10px",
              border: selectedProfile === "alonso" ? "3px solid #07E98A" : "3px solid transparent",
            }}
          />
          Alonso
        </Grid2>

        {/* Profile 2 */}
        <Grid2
          onClick={() => handleProfileClick("gabi")}
          sx={{
            height: "132px",
            width: "91px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "transparent",
            fontWeight: "bold",
            cursor: "pointer",
            borderRadius: "50%",
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/profile-pictures/picture-gabi.png"}
            alt="Profile Gabi"
            style={{
              height: "90px",
              width: "90px",
              borderRadius: "50%",
              backgroundColor: "transparent",
              marginBottom: "10px",
              border: selectedProfile === "gabi" ? "3px solid #07E98A" : "3px solid transparent",
            }}
          />
          Gabi
        </Grid2>

        {/* Profile 3 */}
        <Grid2
          onClick={() => handleProfileClick("alex")}
          sx={{
            height: "132px",
            width: "91px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "transparent",
            fontWeight: "bold",
            cursor: "pointer",
            borderRadius: "50%",
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/profile-pictures/picture-alex.png"}
            alt="Profile Alex"
            style={{
              height: "90px",
              width: "90px",
              borderRadius: "50%",
              backgroundColor: "transparent",
              marginBottom: "10px",
              border: selectedProfile === "alex" ? "3px solid #07E98A" : "3px solid transparent",
            }}
          />
          Alex
        </Grid2>
      </Grid2>

      <Grid2
        sx={{
          height: "80px",
          width: "263px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "transparent",
          fontSize: "14px",
          marginTop: "115px",
          textAlign: "center",
        }}
      >
        Escoge a uno de estos estudiantes y descubre Platzi a través de sus ojos.
        <br />
        Cada perfil te ofrece una experiencia de aprendizaje personalizada.
      </Grid2>

      <Button
        onClick={handleButtonClick}
        disabled={!selectedProfile}
        sx={{
          position: "absolute",
          bottom: "0px",
          width: "352px",
          height: "48px",
          backgroundColor: selectedProfile ? "#07E98A" : "gray",
          color: "#13161D",
          fontWeight: "700",
          marginBottom: "58px",
          textTransform: "none",
          "&:disabled": {
            backgroundColor: "gray",
            color: "#ccc",
          },
        }}
      >
        Continuar
      </Button>
    </Grid2>
  );
};

export default ProfileSelection;
