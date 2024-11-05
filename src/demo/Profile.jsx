import PosicionSemanal from "./cardsProfile/PosicionSemanal";
import RachaSemanal from "./cardsProfile/RachaSemanal";
import ProfileHeader from "./ProfileHeader";

const students = [
  {
    id: "gabi",
    name: "Gabriela Rodríguez",
    nickname: "@gabrielardzj",
    pais: "Colombia",
    hobbies: ["Programar", "Leer", "Cine"],
    stack: "UI/UX",
  },
  {
    id: "alonso",
    name: "Alonso Hernandez Tavera",
    nickname: "@a-hernandezt",
    pais: "Colombia",
    hobbies: ["Programar", "Leer", "Viajar"],
    stack: "Data analist",
  },
  {
    id: "alex",
    name: "Alexander Arismendy",
    nickname: "@alexgeodev",
    pais: "Colombia",
    hobbies: ["Programar", "Papá de un michi", "Rodar en la bici"],
    stack: "Web & GIS developer",
  },  
];

const Profile = () => {
  return (
    <div>
      <ProfileHeader
        students={students}
      />

      <PosicionSemanal />

      <RachaSemanal />
    </div>
  );
};

export default Profile;
