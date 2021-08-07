import styled from "styled-components";

export const PageNotFound = () => {
  return (
    <BaseContainer>
      <h1>404 Page Not Found</h1>
    </BaseContainer>
  );
};

export const UnauthorizedAccess = () => {
  return (
    <BaseContainer>
      <h1>UnauthorizedAccess</h1>
    </BaseContainer>
  );
};

export const InternalServerError = () => {
  return (
    <BaseContainer>
      <h1>We are having trouble connecting to our servers</h1>
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
