import {
  AboutContainer,
  AboutContent,
  AboutImage,
  ButtonsContainer,
} from "./styles";
import yourLikeImg from "../../assets/yourlike.png";
import { AndroidLogo, AppleLogo } from "phosphor-react";
export function About() {
  return (
    <AboutContainer>
      <AboutImage>
        <img src={yourLikeImg} alt="Estudantes reunidos" />
      </AboutImage>
      <AboutContent>
        <span></span>
        <article>
          <h3>Por aqui</h3>
          <h1>
            Seu like vale <strong>muito!</strong>
          </h1>
          <p>
            Mais que um lugar para reclamações, somos um espaço para ouvir e
            buscar soluções. Com a gente, seu like ajudar a elencar os
            principais problemas da sua comunidade, permite compartilhar
            soluções e irmos ao encontro do desenvolvimento sustentável de
            acordo com as ODS.
          </p>
        </article>
        <ButtonsContainer>
          <button>
            <AndroidLogo size={20} />
            Android
          </button>
          <button>
            <AppleLogo size={20} />
            IOS
          </button>
        </ButtonsContainer>
      </AboutContent>
    </AboutContainer>
  );
}
