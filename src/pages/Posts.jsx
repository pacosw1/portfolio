import { useContext, useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { getPosts } from "../api";
import { Post } from "../components/Post";
import { PostPreview } from "../components/PostPreview";
import { ErrorContext } from "../context/errors";
export const Posts = () => {
  const [posts, setPosts] = useState([]);

  const renderPostPreviews = posts.map((post) => {
    return <PostPreview {...post} />;
  });

  let match = useRouteMatch();

  let { setCode } = useContext(ErrorContext);

  useEffect(() => {
    async function get() {
      let response = await getPosts();
      if (!response) {
        setCode(500);
        return;
      }
      setCode(response.code);
      setPosts(response.data);
    }
    get();
  }, [setCode]);

  return (
    <BaseContainer>
      <Switch>
        <Route path={`${match.path}/:id`}>
          <Post />
        </Route>
        <Route path={match.path}>
          <Container>{renderPostPreviews}</Container>
        </Route>
      </Switch>
    </BaseContainer>
  );
};

const Container = styled.div`
  padding-top: 1.5rem;
  display: flex;
  align-items: center;
`;

const BaseContainer = styled.div`
  font-family: "Roboto", sans-serif;

  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`;
