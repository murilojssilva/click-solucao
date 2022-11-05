import styled from "styled-components";

export const AboutUsContainer = styled.footer`
  width: 100%;
`;

export const AboutUsContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-top: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 6px;
  width: 90%;
  margin: 0 auto;
  gap: 1rem;
`;
