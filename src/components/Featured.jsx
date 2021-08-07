import styled from "styled-components";
import { PostPreview } from "./PostPreview";
import { PrettyLink } from "./PrettyLink";

export const Featured = ({ previews }) => {
  return (
    <BaseContainer>
      <Header>Featured</Header>
      <Container>{previews}</Container>
    </BaseContainer>
  );
};

export const Header = styled.h1`
  font-family: "Roboto", sans-serif;

  margin: 0;

  margin-top: 1rem;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.15);
  padding: 0.5rem 0rem;
  margin-bottom: 1rem;
  font-weight: 700;

  color: #252525;
  font-size: 30px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const BaseContainer = styled.div`
  font-family: "Roboto", sans-serif;

  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;
