import { useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { getPrettyTime } from "../utils";
import { PrettyLink } from "./PrettyLink";
export const PostPreview = ({ id, title, subtitle, imageURL, timestamp }) => {
  let match = useRouteMatch();

  timestamp = getPrettyTime(timestamp);

  return (
    <BaseContainer>
      <PrettyLink path={`${match.url}/${id}`}>
        <ImageContainer>
          <CoverImage src={imageURL} />
        </ImageContainer>

        <TextContainer>
          <Header>{title}</Header>
          <Subtitle>{subtitle}</Subtitle>
          <DateText>
            Posted on <strong>{timestamp}</strong>
          </DateText>
        </TextContainer>
      </PrettyLink>
    </BaseContainer>
  );
};

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const DateText = styled.h1`
  font-weight: 400;
  font-family: "Roboto", sans-serif;

  font-size: 10px;
  color: #2c2c2c;
`;

const BaseContainer = styled.div`
  font-family: "Roboto", sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.5rem;
  width: 100%;
  max-width: 450px;
`;

const CoverImage = styled.img`
  padding: 0.5rem 0;
  padding-top: 0;
  width: 100%;
`;

const Subtitle = styled.h1`
  font-family: "Roboto", sans-serif;

  margin: 0;
  margin-top: 0.5rem;
  font-size: 12px;
  color: #757575;
  font-weight: 400;
`;

const Header = styled.h1`
  font-family: "Roboto", sans-serif;

  margin: 0;

  margin-top: 1rem;
  font-weight: 500;
  color: #252525;
  font-size: 15px;
`;
