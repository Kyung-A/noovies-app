import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Favs from "../screens/Favs";
import { Platform } from "react-native";

const Tabs = createBottomTabNavigator();

//ES2020에 추가된 문법인 optional chaining ?. 연산자
const getHeaderName = (route) =>
  route?.state?.routeNames[route.state.index] || "최신영화";
// index 0은 undefind이다. 그럴 경우 || Movies로 뜨게한다

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    //useEffext는 리액트 hook이다
    const name = getHeaderName(route);
    navigation.setOptions({
      title: name,
      headerTitleAlign: "center",
    });
  }, [route]);
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          //폰 종류가 아이폰이냐 안드냐를 구별 후 ios-로 시작하는 아이콘 또는 md-로 시작하는 아이콘으로 설정
          if (route.name === "최신영화") {
            iconName += "film";
          } else if (route.name === "TV") {
            iconName += "tv";
          } else if (route.name === "검색") {
            iconName += "search";
          } else if (route.name === "즐겨찾기") {
            iconName += "heart";
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? "white" : "grey"}
              size={26}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "black",
          borderTopColor: "black",
        },
      }}
    >
      <Tabs.Screen name="최신영화" component={Movies} />
      <Tabs.Screen name="TV" component={Tv} />
      <Tabs.Screen name="검색" component={Search} />
      <Tabs.Screen name="즐겨찾기" component={Favs} />
    </Tabs.Navigator>
  );
};
