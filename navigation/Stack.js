import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Tabs from "./Tabs";
import Detail from "../screens/Detail";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Tabs"
      component={Tabs}
      options={{
        CardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    />
    <Stack.Screen
      name="Detail"
      component={Detail}
      options={{
        CardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    />
  </Stack.Navigator>
);
