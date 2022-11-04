import styled from "styled-components";

export const AboutContainer = styled.section`
  min-height: 20rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;
  width: 90%;
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
export const AboutImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 25rem;
    height: 25rem;
  }
`;
export const AboutContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  img {
    width: 10rem;
    height: 10rem;
  }
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 2rem;
      text-align: center;
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
    gap: 1rem;
    padding: 1.5rem 2rem;
    align-items: center;
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
