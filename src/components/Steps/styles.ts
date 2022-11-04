import styled from "styled-components";

export const StepsContainer = styled.section`
  width: 100%;
`;

export const StepsContent = styled.div`
  display: grid;
  padding: 2rem;
  border-top: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 6px;
  grid-template-columns: repeat(3, 1fr);

  width: 90%;
  margin: 0 auto;
  gap: 1rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
