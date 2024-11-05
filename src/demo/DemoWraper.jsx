import { Grid2 } from "@mui/material";
import Profile from "./Profile";

const DemoWraper = ({ children }) => {
  return (
    <Grid2
      sx={{
        height: "100vh",
        width: "100%",
      }}
    >
      <Profile />
    </Grid2>
  );
};

export default DemoWraper;
