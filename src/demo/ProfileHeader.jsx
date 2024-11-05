import { 
  Card, 
  Stack, 
  Grid2, 
  Typography,
  CardContent, 
} from "@mui/material";
import "./ProfileHeader.css";
import { useSelector } from "react-redux";

const ProfileHeader = ({ students }) => {
  const profileName = useSelector((state) => state.profile.name);
  const studentMatch = students.filter((student) => student.id === profileName)[0];

  return (
    <Card className="CardProfile">
      <Stack className="CardProfile-img">
        <img
          className="ProfilePicture"
          src={process.env.PUBLIC_URL + `/profile-pictures/picture-${profileName}.png`}
          alt="Imagen del dev"
        />
      </Stack>

      <CardContent className="CardContent-profile">
        <Typography variant="h5">
          {studentMatch?.name}
        </Typography>
        <Grid2 container spacing={2} className="CardProfile-subs">
          <Typography variant="body1">
            {studentMatch?.nickname}
          </Typography>
          <Typography variant="body1">
            {studentMatch?.pais}
          </Typography>
        </Grid2>
      </CardContent>
    </Card>
  );
};

export default ProfileHeader;
