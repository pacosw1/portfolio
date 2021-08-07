import { MarkdownWrapper } from "../components/MarkdownWrapper";
import styled from "styled-components";
export const About = () => {
  const body = `

# A Little Bit About Me
## And why this blog exists
My name is Paco Sainz and this is my blog.
In this blog I will write about all aspects of life as I am living them.

By sharing small parts of my life I hope others will be insipired to go out and learn new things, avoid my mistakes,
and learn along the way with me.

    `;

  return (
    <BaseContainer>
      <MarkdownWrapper>{body}</MarkdownWrapper>;
    </BaseContainer>
  );
};

const BaseContainer = styled.div`
  font-family: "Roboto", sans-serif;

  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 700px;
  padding: 3rem 0;
`;
