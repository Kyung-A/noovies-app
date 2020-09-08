import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import Title from "./Title";

const Container = styled.View`
  margin-top: 20px;
`;

//가로 컨텐츠 부분 view 틀
const List = ({ title, children }) => (
  <>
    <Title title={title} />
    <Container>{children}</Container>
  </>
);

List.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default List;
