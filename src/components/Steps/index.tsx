import { Camera, Heart, NotePencil, ThumbsUp } from "phosphor-react";
import { useTheme } from "styled-components";
import { Step } from "./Step";
import { StepsContainer, StepsContent } from "./styles";

export function Steps() {
  const theme = useTheme();
  return (
    <StepsContainer>
      <StepsContent>
        <Step
          icon={<Camera size={50} color={theme.colors.shape} />}
          title="Busca"
          content="Encontre algo que você julgue que necessita de mudanças e tire uma foto"
        />
        <Step
          icon={<NotePencil size={50} color={theme.colors.shape} />}
          title="Publique"
          content="Publique na nossa plataforma para que outras pessoas possam curtir"
        />
        <Step
          icon={<ThumbsUp size={50} color={theme.colors.shape} />}
          title="Curta"
          content="Curta outras publicações para ajudar a comunidade"
        />
      </StepsContent>
    </StepsContainer>
  );
}
