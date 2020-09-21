import React from "react";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import Vertical from "../../components/Vertical";
import styled from "styled-components/native";
import List from "../../components/List";
import Horizontal from "../../components/Horizontal";

const Container = styled.View`
  margin-top: 30px;
`;

export default ({ refreshFn, loading, popular, topRated, today }) => (
  <ScrollContainer refreshFn={refreshFn} loading={loading}>
    <Container>
      <HorizontalSlider title="현재 인기 프로그램">
        {popular.map((show) => (
          <Vertical
            id={show.id}
            key={show.id}
            title={show.name}
            votes={show.vote_average}
            poster={show.poster_path}
          />
        ))}
      </HorizontalSlider>
      <HorizontalSlider title="T0P 20">
        {topRated.map((show) => (
          <Vertical
            id={show.id}
            key={show.id}
            title={show.name}
            votes={show.vote_average}
            poster={show.poster_path}
          />
        ))}
      </HorizontalSlider>
      <List title="오늘 방영작">
        {today.map((show) => (
          <Horizontal
            id={show.id}
            key={show.id}
            title={show.name}
            poster={show.poster_path}
            overview={show.overview}
          />
        ))}
      </List>
    </Container>
  </ScrollContainer>
);
