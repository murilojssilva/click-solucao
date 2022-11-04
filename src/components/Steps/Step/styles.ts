import styled from "styled-components";

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  padding: 1rem;
  span {
    padding: 1.5rem;
    border-radius: 100px;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
