import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { movieApi } from "../api";

export default () => {
  //api 데이터들을 불러오고 랜더하는 과정
  const [movies, setMovies] = useState({
    results: [],
    error: null,
  });
  const getData = async () => {
    const [results, error] = await movieApi.discover();
    setMovies({
      results,
      error,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <Text>{movies.results.length}</Text>
    </View>
  );
};
