import { Apresentation } from "../../components/Apresentation";
import { AboutUs } from "../../components/AboutUs";
import { Header } from "../../components/Header";
import { Steps } from "../../components/Steps";
import { HomeContainer } from "./styles";
import { Video } from "../../components/Video";

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Apresentation />
      <Video />
      <Steps />
      <AboutUs />
    </HomeContainer>
  );
}
