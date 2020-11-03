import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import KidCircles from "../screens/KidCircles";
import CreateKidCircle from "../screens/CreateKidCircle";
import JoinKidCircle from "../screens/JoinKidCircle";
import Recommended from "../screens/Recommended";
import Library from "../screens/Library";
import LoveBank from "../screens/LoveBank";
import Settings from "../screens/Settings";
import MediaContentDetails from "../screens/MediaContentDetails";

import ShareSomething from "../screens/CreateContent/ShareSomething";

export default function authNavigator() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="KidCirlces" component={KidCircles} />
        <Stack.Screen name="CreateKidCircle" component={CreateKidCircle} />
        <Stack.Screen name="JoinKidCircle" component={JoinKidCircle} />
        <Stack.Screen name="Recommended" component={Recommended} />
        <Stack.Screen name="Library" component={Library} />
        <Stack.Screen name="LoveBank" component={LoveBank} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen
          name="MediaContentDetails"
          component={MediaContentDetails}
        />
        <Stack.Screen name="ShareSomething" component={ShareSomething} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}