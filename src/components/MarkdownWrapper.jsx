import styled from "styled-components";
import Markdown from "react-markdown";

export const MarkdownWrapper = ({ children }) => {
  const components = {
    p: PlainText,
    h1: Header,
    h2: Subtitle,
  };

  return <Markdown components={components}>{children}</Markdown>;
};

const PlainText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
`;

const Subtitle = styled.h1`
  font-family: "Roboto", sans-serif;

  margin: 0;
  margin-top: 0.5rem;
  font-size: 22px;
  color: #757575;
  font-weight: 400;
`;

const Header = styled.h1`
  font-family: "Roboto", sans-serif;

  margin: 0;

  margin-top: 1rem;
  font-weight: 500;
  color: #252525;
  font-size: 35px;
`;
