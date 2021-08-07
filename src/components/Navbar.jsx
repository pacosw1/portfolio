import styled from "styled-components";
import { PrettyLink } from "./PrettyLink";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <PrettyLink path="/posts">
        <Tab>Posts</Tab>
      </PrettyLink>
      <PrettyLink path="/">
        <Title>PacoDoesSoftware</Title>
      </PrettyLink>
      <PrettyLink path="/about">
        <Tab>About</Tab>
      </PrettyLink>
    </NavbarContainer>
  );
};

const Title = styled.h1`
  font-family: "Roboto", sans-serif;

  font-size: 20px;
`;

const Tab = styled.h1`
  text-decoration: none;
  color: black;
  font-size: 15px;
  font-family: "Roboto", sans-serif;

  font-weight: 300;
`;

export const NavbarContainer = styled.div`
  font-family: "Roboto", sans-serif;
  height: 7vh;
  width: 100vw;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: space-around;
  align-content: center;
`;
