import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Favs from "../screens/Favs";

const Tabs = createBottomTabNavigator();

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    //useEffext는 리액트 hook이다
    navigation.setOptions({
      //ES2020에 추가된 문법인 optional chaining ?. 연산자
      title: route?.state?.routeNames[route.state.index] || "최신영화",
      // index 0은 undefind이다. 그럴 경우 || Movies로 뜨게한다
    });
  }, [route]);
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="최신영화" component={Movies} />
      <Tabs.Screen name="TV" component={Tv} />
      <Tabs.Screen name="검색" component={Search} />
      <Tabs.Screen name="즐겨찾기" component={Favs} />
    </Tabs.Navigator>
  );
};
