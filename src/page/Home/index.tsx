import { Apresentation } from "../../components/Apresentation";
import { AboutUs } from "../../components/AboutUs";
import { Header } from "../../components/Header";
import { Steps } from "../../components/Steps";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Apresentation />
      <Steps />
      <AboutUs />
    </HomeContainer>
  );
}
