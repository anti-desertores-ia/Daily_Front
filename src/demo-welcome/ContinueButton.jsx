import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const ContinueButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    // Check the current route and navigate accordingly
    if (location.pathname === "/") {
      navigate("/demo-indications"); 
    } else if (location.pathname === "/demo-indications") {
      navigate("/contact"); 
    } else {
      navigate("/");
    }
  };

  return (
    <Button
      onClick={handleClick}
      sx={{
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
  );
};

export default ContinueButton;
