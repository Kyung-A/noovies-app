import React, { useState } from "react";
import * as Font from "expo-font";
import { Text, Image } from "react-native";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./navigation/Stack";

//이미지 배열(미리 로드)
const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image); //이미지를 url로 보내기
    } else {
      return Asset.fromModule(image).downloadAsync(); //이미지를 모듈로 보내기
    } //url을 보낼 수 있거나 모듈(fromModule)을 보낼 수도 있다
  });

//폰트 배열 (미리 로드)
const cacheFonts = (fonts) =>
  fonts.map((font) => [Font.loadAsync(font), Font.loadAsync(font)]);

export default function App() {
  const [isReady, setIsReady] = useState(false);
  //미리 로딩을 시작하는 함수. loadAssets는 promise를 리턴해야만 한다.
  const loadAssets = () => {
    const images = cacheImages([
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F397442735866005503%2F&psig=AOvVaw0m3uFFYl4rqoPPrR3oG13T&ust=1598942065647000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjMrsHpxOsCFQAAAAAdAAAAABAJ",
      require("./assets/splash.png"),
    ]);
    const fonts = cacheFonts([Ionicons.font]);
    return Promise.all([...images, ...fonts]);
  };
  const onFinish = () => setIsReady(true);
  return isReady ? (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}
