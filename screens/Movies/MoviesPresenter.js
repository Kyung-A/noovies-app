import React from "react";
import styled from "styled-components/native";
import ScrollContainer from "../../components/ScrollContainer";
import Swiper from "react-native-web-swiper";
import { Dimensions } from "react-native";
import Slide from "../../components/Movies/Slide";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";
import HorizontalSlider from "../../components/HorizontalSlider";
import List from "../../components/List";

/* 스크린의 치수를 가져다주는 RN 패키지 */
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 3}px;
  margin-bottom: 50px;
`;

const Container = styled.View``;

export default ({ loading, nowPlaying, popular, upcoming }) => (
  <ScrollContainer loading={loading}>
    <>
      <SliderContainer>
        <Swiper controlsEnabled={false} loop={true} timeout={3}>
          {nowPlaying.map((movie) => (
            <Slide
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              overview={movie.overview}
              votes={movie.vote_average}
              backgroundImage={movie.backdrop_path}
              poster={movie.poster_path}
            />
          ))}
        </Swiper>
      </SliderContainer>
      <Container>
        <HorizontalSlider title={"인기영화"}>
          {popular.map((movie) => (
            <Vertical
              id={movie.id}
              key={movie.id}
              title={movie.original_title}
              votes={movie.vote_average}
              poster={movie.poster_path}
            />
          ))}
        </HorizontalSlider>
        <List title="개봉 예정작">
          {upcoming.map((movie) => (
            <Horizontal
              id={movie.id}
              key={movie.id}
              title={movie.original_title}
              releaseDate={movie.release_date}
              overview={movie.overview}
              poster={movie.poster_path}
            />
          ))}
        </List>
      </Container>
    </>
  </ScrollContainer>
);
