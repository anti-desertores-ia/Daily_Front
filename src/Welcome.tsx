import { Typography } from "@mui/material";

const Welcome = () => {
  return (
    <>
      <Typography 
        variant="h5"
        sx={{
          marginLeft: "10px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        @NAME, continúa aprendiendo
      </Typography>
    </>
  );
};

export default Welcome;
