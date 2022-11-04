import styled from "styled-components";

export const StepsContainer = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.colors.shape};
`;

export const StepsContent = styled.div`
  display: grid;
  padding: 2rem;

  grid-template-columns: repeat(3, 1fr);

  width: 90%;
  margin: 0 auto;
  gap: 1rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
