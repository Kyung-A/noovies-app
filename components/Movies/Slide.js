import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { trimText } from "../../utils";
import { apiImage } from "../../api";
import Poster from "../Poster";
import Votes from "../Votes";

const Container = styled.View`
  height: 100%;
  width: 100%;
`;

const BG = styled.Image`
  height: 100%;
  width: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Content = styled.View`
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;

const Tilte = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 7px;
`;

const VotesContainer = styled.Text`
  margin-bottom: 5px;
`;

const Overview = styled.Text`
  color: #fff;
  opacity: 0.8;
  font-size: 14px;
  font-weight: 500;
`;

const Button = styled.View`
  margin-top: 10px;
  background-color: #e74c3c;
  padding: 5px 15px;
`;

const ButtonText = styled.Text`
  color: #fff;
`;

//받아오려는 prop를 ({})안에 넣는다
const Slide = ({ id, title, backgroundImage, votes, overview, poster }) => (
  <Container>
    <BG source={{ uri: apiImage(backgroundImage) }} />
    <Content>
      <Poster url={poster} />
      <Data>
        <Tilte>{trimText(title, 15)}</Tilte>
        <VotesContainer>
          <Votes votes={votes} />
        </VotesContainer>
        <Overview>{trimText(overview, 80)}</Overview>
        <TouchableOpacity>
          <Button>
            <ButtonText>더보기</ButtonText>
          </Button>
        </TouchableOpacity>
      </Data>
    </Content>
  </Container>
);

//그리고 그 prop 오브젝트를 만들어서 받아오는 경로?를 대응? 시켜준다
Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Slide;
