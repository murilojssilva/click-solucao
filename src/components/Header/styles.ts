import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  height: 2rem;
`;

export const HeaderContent = styled.nav`
  display: flex;
  width: 100vw;
  padding: 2rem;

  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-weight: bold;
  }
`;
