import React from "react";
import styled from "styled-components/native";

// 여러곳에 쓰일 평점 컴포넌트
const Container = styled.Text`
  color: #fff;
  opacity: 0.8;
  font-size: 12px;
`;

const Votes = ({ votes }) => <Container>⭐ {votes} / 10</Container>;

export default Votes;
