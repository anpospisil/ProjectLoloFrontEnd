import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import styles from "@styles/styles"; //have to changeit to @styles/styles
import style from "./style";
import images from "@assets/images";
import NavButtons from "../../components/NavButtons";
import KidCircleCard from "../../components/KidCircleCard";
import colors from "@assets/colors";
import fonts from "@assets/fonts";
import adjust from "../../styles/adjust";

export default function KidCircles({ navigation }) {
  const circles = [
    {
      id: 1,
      kidImage: images.monkey,
      kidName: "Atieh",
    },
    {
      id: 2,
      kidImage: images.monkey,
      kidName: "Weilong",
    },
    {
      id: 3,
      kidImage: images.monkey,
      kidName: "Nazneen",
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
      }}
    >
      <Image
        style={[styles.peekabondLogo, { marginBottom: -120, width: "30%" }]}
        source={images.peekabondLogo}
      />
      <Text style={styles.title} adjustsFontSizeToFit={true} numberOfLines={1}>
        Welcome back, [firstNameOfUser]!
      </Text>

      <FlatList
        contentContainerStyle={{
          alignSelf: "center",
          width: "50%",
          paddingTop: 30,
        }}
        data={circles}
        numColumns={1}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableWithoutFeedback>
              <KidCircleCard
                id={item.id}
                kidImage={item.kidImage}
                kidName={item.kidName}
              />
            </TouchableWithoutFeedback>
          );
        }}
        ListFooterComponent={
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <View
              style={{
                width: "50%",
                height: Dimensions.get("window").width * 0.25,
                marginHorizontal: "10%",
                marginBottom: 150,
              }}
            >
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("JoinKidCircle")}
              >
                <View>
                  <Text
                    style={[
                      styles.cardText,
                      {
                        color: colors.dkPink,
                        fontFamily: fonts.semiBold,
                      },
                    ]}
                  >
                    Join Circle
                  </Text>
                  <Text
                    style={[
                      styles.cardText,
                      {
                        color: colors.purple,
                        fontFamily: fonts.semiBold,
                        paddingBottom: 15,
                        fontSize: adjust(10),
                      },
                    ]}
                  >
                    (Access Code)
                  </Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("JoinKidCircle")}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    height: "100%",
                    alignSelf: "center",
                    justifyContent: "space-evenly",
                    shadowColor: "black",
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.05,
                    shadowRadius: 5,
                    borderRadius: 100,
                  }}
                >
                  <Text
                    style={[
                      styles.cardText,
                      {
                        color: colors.purple,
                        fontFamily: fonts.bold,
                        fontSize: adjust(50),
                      },
                    ]}
                  >
                    #
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View
              style={{
                width: "50%",
                height: Dimensions.get("window").width * 0.25,
                marginHorizontal: "10%",
              }}
            >
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("CreateKidCircle")}
              >
                <Text
                  style={[
                    styles.cardText,
                    {
                      color: colors.dkPink,
                      fontFamily: fonts.semiBold,
                      paddingBottom: 15,
                    },
                  ]}
                >
                  Create New Circle
                </Text>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("CreateKidCircle")}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    height: "100%",
                    alignSelf: "center",
                    justifyContent: "space-evenly",
                    shadowColor: "black",
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.05,
                    shadowRadius: 5,
                    borderRadius: 100,
                  }}
                >
                  <View
                    style={{
                      alignSelf: "center",
                      width: "50%",
                      backgroundColor: colors.purple,
                      height: "10%",
                      borderRadius: 25,
                    }}
                  ></View>
                  <View
                    style={{
                      top: "25%",
                      alignSelf: "center",
                      position: "absolute",
                      width: "10%",
                      backgroundColor: colors.purple,
                      height: "50%",
                      borderRadius: 25,
                    }}
                  ></View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        }
      />
      <NavButtons screen="Single" />
    </View>
  );
}
