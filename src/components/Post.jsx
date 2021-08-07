import styled from "styled-components";
import Markdown from "react-markdown";
import { ReactComponent as LikeIcon } from "./like.svg";
import { useParams } from "react-router-dom";
import { ErrorContext } from "../context/errors";
import { useContext, useEffect, useState } from "react";
import { getBlogPost } from "../api";
import { getPrettyTime } from "../utils";

export const Post = () => {
  let { id } = useParams();
  let { setCode } = useContext(ErrorContext);
  const components = {
    p: PlainText,
  };

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

  //load blog post
  useEffect(() => {
    setLoading(true);
    async function get() {
      let response = await getBlogPost(id);
      if (!response) {
        setCode(500);
        return;
      }
      console.log(response);
      setCode(response.code);
      let post = response.data;
      post.timestamp = getPrettyTime(post.timestamp);
      setPost(post);
      setLoading(false);
    }
    get();
  }, []);

  if (loading || !post) return null;

  const { title, subtitle, category, body, imageURL } = post;
  return (
    <PostContainer>
      <CoverImage src={imageURL} alt="xd" />
      <Header>{title}</Header>
      <Subtitle>{subtitle}</Subtitle>
      <InfoBar>
        <VerticalContainer>
          <TagContainer>
            <Tag>{category}</Tag>
            <Tag>{"Self Development"}</Tag>
            <Tag>{"Pets"}</Tag>
          </TagContainer>

          <DateText>
            Posted on <strong>{post.timestamp}</strong>
          </DateText>
        </VerticalContainer>
        <LikesContainer>
          <LikeIcon width="23" />
          <DateText>1024</DateText>
        </LikesContainer>
      </InfoBar>
      <Body>
        <Markdown components={components}>{body}</Markdown>
      </Body>
      <Footer tag={category} />
    </PostContainer>
  );
};

const Footer = ({ tag }) => {
  return <FooterContainer></FooterContainer>;
};
const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  margin-top: 2rem;
  box-shadow: 0px -2px 2px -2px rgba(0, 0, 0, 0.15);
`;

const CoverImage = styled.img`
  width: 100%;
  height: 50%;
  padding: 0.5rem 0;
  padding-top: 0;
`;

const PlainText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
`;

const Subtitle = styled.h1`
  font-family: "Roboto", sans-serif;

  margin: 0;
  margin-top: 0.5rem;
  font-size: 18px;
  color: #757575;
  font-weight: 400;
`;

const PostContainer = styled.div`
  font-family: "Roboto", sans-serif;

  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 700px;
  padding: 3rem 0;
`;

const Body = styled.div`
  padding: 0.5rem 0;
  padding-top: 0;
`;

const TagContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Tag = styled.div`
  font-family: "Roboto", sans-serif;

  font-weight: 500;
  padding: 0.5rem 0.5rem;
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #5938a7;
  color: #5938a7;
  font-size: 11px;
  border-radius: 0.2rem;
`;

export const Header = styled.h1`
  font-family: "Roboto", sans-serif;

  margin: 0;

  margin-top: 1rem;
  font-weight: 500;
  color: #252525;
  font-size: 30px;
`;

const DateText = styled.h1`
  font-weight: 400;
  font-family: "Roboto", sans-serif;

  font-size: 13px;
  color: #2c2c2c;
`;

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
`;

const LikesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const InfoBar = styled.div`
  font-family: "Roboto", sans-serif;
  padding-top: 1rem;
  display: flex;
  margin: 0.5rem 0;
  padding-bottom: 0;
  justify-content: space-between;
`;
