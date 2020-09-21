import axios from "axios";

const TMDB_KEY = "a1f35f2dadbf39793627456f297bb141";

const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params, //오브젝트의 컨텐츠를 get하는걸 의미
      api_key: TMDB_KEY,
    },
  });

const getAnything = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data, //data안에 resultss이 없을때도 있어서 이렇게 또 선언을(?) 해줘야함
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (e) {
    return [null, e];
  }
};

export const movieApi = {
  nowPlaying: () => getAnything("/movie/now_playing"),
  popular: () => getAnything("/movie/popular"),
  upcoming: () => getAnything("/movie/upcoming", { region: "kr" }),
  search: (query) => getAnything("/search/movie", { query }), //string으로 검색해야해서 word가 붙음
  movie: (id) => getAnything(`/movie/${id}`), //단 한개의 영화 세부사항을 보고 싶은거니까 id가 붙음
  discover: () => getAnything("/discover/movie"),
};

export const tvApi = {
  today: () => getAnything("/tv/airing_today"),
  thisWeek: () => getAnything("/tv/on_the_air"),
  topRated: () => getAnything("/tv/top_rated"),
  popular: () => getAnything("/tv/popular"),
  search: (query) => getAnything("/search/tv", { query }),
  show: (id) => getAnything(`/tv/${id}`),
};

//포스터 이미지 API
export const apiImage = (path) =>
  path
    ? `https://image.tmdb.org/t/p/w500${path}`
    : "https://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg";
