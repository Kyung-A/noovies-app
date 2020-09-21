import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import { trimText, formatDate } from "../utils";
import { Platform } from "react-native";

const Container = styled.View`
  padding: 0px 30px;
  margin-bottom: 40px;
  flex-direction: row;
  align-items: flex-start;
`;

const Data = styled.View`
  align-items: flex-start;
  width: 60%;
  margin-left: 30px;
`;

const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
`;

const ReleaseDate = styled.Text`
  color: #fff;
  font-size: 12px;
  opacity: 0.7;
`;

const Overview = styled.Text`
  margin-top: 10px;
  color: #fff;
  opacity: 0.7;
`;

// 수직(세로) 컨텐츠 부분 (api 불러오기)
const Horizontal = ({ id, title, overview, poster, releaseDate }) => (
  <TouchableOpacity>
    <Container>
      <Poster url={poster} />
      <Data>
        <Title>{trimText(title, 25)}</Title>
        {releaseDate ? (
          <ReleaseDate>
            {Platform.OS === "ios" ? formatDate(releaseDate) : releaseDate}
          </ReleaseDate>
        ) : null}
        <Overview>{trimText(overview, 130)}</Overview>
      </Data>
    </Container>
  </TouchableOpacity>
);

Horizontal.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  releaseDate: PropTypes.string,
};

export default Horizontal;
