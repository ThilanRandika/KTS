import { useUserContext } from "../../hooks/useUserAuthContext";

function Home() {
  const { user } = useUserContext();
  //console.log("home " + user?.email);
  return <div></div>;
}

export default Home;
