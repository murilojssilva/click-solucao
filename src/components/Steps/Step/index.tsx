import { ReactNode } from "react";
import { StepContainer } from "./styles";

interface IStepProps {
  title: string;
  content: string;
  icon: ReactNode;
}

export function Step({ title, content, icon }: IStepProps) {
  return (
    <StepContainer>
      <span>{icon}</span>
      <h2>{title}</h2>
      <p>{content}</p>
    </StepContainer>
  );
}
