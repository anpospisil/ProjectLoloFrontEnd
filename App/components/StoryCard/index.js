import React from "react";
import { View, Dimensions, Image, Text } from "react-native";
import styles from "@styles/styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function ActivityCard(props) {
  const navigation = useNavigation();
  const { story } = props;
  return (
    // <View style={[styles.cardContainer]}>
    //   <TouchableWithoutFeedback onPress={() => navigation.navigate("Story", {pages:story.pages})}>
    //     {/* <Image
    //       style={{
    //         width: Dimensions.get("window").width * 0.405,
    //         height: Dimensions.get("window").width * 0.405,
    //         borderRadius: 25,
    //       }}
    //       source={image}
    //     /> */}
    //     <Text>{story.title}</Text>
    //   </TouchableWithoutFeedback>
    // </View>
    <Text>hi</Text>
  );
}