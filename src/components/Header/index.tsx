import { DeviceMobile, House, Info } from "phosphor-react";
import { HeaderContainer, HeaderContent } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <li>
          <House size={20} /> Home
        </li>
        <li>
          <DeviceMobile size={20} /> Baixe aqui
        </li>
        <li>
          <Info size={20} /> Sobre nós
        </li>
      </HeaderContent>
    </HeaderContainer>
  );
}
