import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import Votes from "./Votes";
import { trimText } from "../utils";

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: #fff;
  font-weight: 500;
  margin: 10px 0px 5px 0px;
`;

//가로 슬라이드 컨텐츠 부분(api 불러오기)
const Vertical = ({ id, poster, title, votes }) => (
  <TouchableOpacity>
    <Container>
      <Poster url={poster} />
      <Title>{trimText(title, 10)}</Title>
      {votes > 0 && <Votes votes={votes} />}
    </Container>
  </TouchableOpacity>
);

Vertical.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Vertical;
