import React from "react";
import { View, TouchableWithoutFeedback, Text, Image } from "react-native";
import images from "@assets/images";
import styles from "@styles/styles";

import { useNavigation } from "@react-navigation/native";
import colors from "../../assets/colors";

export default function NavButtons(props) {
  const navigation = useNavigation();
  const { screen } = props;
  console.log("screen", screen);

  function today() {
    if (screen === "Recommended") {
      return (
        <TouchableWithoutFeedback>
          <View style={styles.navActiveBtContainer}>
            <Image
              style={styles.navBtImage}
              source={images.videoCameraYellow}
            />
            <Text style={styles.bottomText}>Create</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    } else if (screen === "Single") {
      return null;
    } else {
      return (
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Recommended")}
        >
          <View style={styles.navBtContainer}>
            <Image
              style={styles.navBtImage}
              source={images.videoCameraYellow}
            />
            <Text style={styles.bottomText}>Create</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    }
  }

  function loveBank() {
    if (screen === "LoveBank") {
      return (
        <TouchableWithoutFeedback>
          <View style={styles.navActiveBtContainer}>
            <Image style={styles.navBtImage} source={images.photography} />
            <Text style={styles.bottomText}>Love Bank</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    } else if (screen === "Single") {
      return null;
    } else {
      return (
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("LoveBank")}
        >
          <View style={styles.navBtContainer}>
            <Image style={styles.navBtImage} source={images.photography} />
            <Text style={styles.bottomText}>Love Bank</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    }
  }

  function create() {
    if (screen === "Settings") {
      return (
        <TouchableWithoutFeedback>
          <View style={styles.navActiveBtContainer}>
            <Image style={styles.navBtImage} source={images.monkey} />
            <Text style={styles.bottomText}>Account</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    } else if (screen === "Single") {
      return (
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Settings", { screen: "single" })}
        >
          <View style={styles.navActiveBtContainer}>
            <Image style={styles.navBtImage} source={images.monkey} />
            <Text style={[styles.bottomText, { color: colors.purple }]}>
              Account
            </Text>
          </View>
        </TouchableWithoutFeedback>
      );
    } else {
      return (
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Settings")}
        >
          <View style={styles.navBtContainer}>
            <Image style={styles.navBtImage} source={images.monkey} />
            <Text style={styles.bottomText}>Account</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    }
  }

  return (
    <View style={styles.navBtsContainer}>
      {today()}
      {loveBank()}
      {create()}
    </View>
  );
}
