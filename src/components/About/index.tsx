import {
  AboutContainer,
  AboutContent,
  AboutImage,
  ButtonsContainer,
} from "./styles";
import studentsImg from "../../assets/students.png";
import logo from "../../assets/logo.jpeg";
import { AndroidLogo, AppleLogo } from "phosphor-react";
export function About() {
  return (
    <AboutContainer>
      <AboutImage>
        <img src={studentsImg} alt="Estudantes reunidos" />
      </AboutImage>
      <AboutContent>
        <img src={logo} alt="PictureClaim" />
        <article>
          <h1>Por que usar nossa plataforma?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            ducimus provident commodi nam laborum explicabo. Inventore nisi,
            neque eius recusandae reiciendis at sint, odio doloribus culpa ut
            nobis modi. Nemo!
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
