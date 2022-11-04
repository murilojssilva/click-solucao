import { About } from "../../components/About";
import { Steps } from "../../components/Steps";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <About />
      <Steps />
    </HomeContainer>
  );
}
