import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { apiImage } from "../api";

// 여러곳에 쓰일 포스터 컴포넌트
const Image = styled.Image`
  width: 100px;
  height: 160px;
`;

const Poster = ({ url }) => (
  <Image resizeMode="cover" source={{ uri: apiImage(url) }} />
);

Poster.propTypes = {
  url: PropTypes.string,
};

export default Poster;
