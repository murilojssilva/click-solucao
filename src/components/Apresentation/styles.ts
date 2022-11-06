import styled from "styled-components";

export const ApresentationContainer = styled.section`
  min-height: 20rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;
  width: 90%;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;
export const ApresentationImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 40rem;
    height: 20rem;
  }
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const ApresentationContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  img {
    width: 10rem;
    height: 10rem;
  }
  h3 {
    display: flex;
    align-self: flex-start;
    justify-content: flex-start;
    color: ${(props) => props.theme.colors.secundary};
    font-size: 1.5rem;
  }
  article {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h1 {
      font-size: 2rem;
      text-align: center;
      strong {
        font-size: 2.25rem;
      }
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1.5rem 2rem;
    border: 0;
    outline: 0;
    border-radius: 6px;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.background};
    font-weight: bold;

    &:hover {
      filter: brightness(0.9);
      transition: filter 0.2s;
    }
  }
`;
