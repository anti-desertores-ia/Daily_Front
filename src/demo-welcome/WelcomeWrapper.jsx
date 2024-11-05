import { Grid2 } from "@mui/material";
import IntroHeader from "./IntroHeader";

const WelcomeWrapper = ({ children }) => { 

  return (
    <Grid2
      sx={{
        height: "100vh",
        width: "390px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <IntroHeader />

      {/* Middle content area for rendering different components */}
      <Grid2
        sx={{
          flex: 1,                    
          display: "flex",
          alignItems: "center",
          justifyContent: "center",           
        }}
      >
        {children}  {/* Render children here */}
      </Grid2>
      
    </Grid2>
  );
}

export default WelcomeWrapper;
