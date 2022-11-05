import { About } from "../../components/About";
import { Header } from "../../components/Header";
import { Steps } from "../../components/Steps";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <About />
      <Steps />
    </HomeContainer>
  );
}
