import React, { useEffect, useReducer, useContext, useState } from "react";
import { View, Text, TouchableWithoutFeedback, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "@styles/styles";
import adjust from "../../styles/adjust";
import { useMutation } from "@apollo/client";
import { ADD_MEMBER } from "../../../graphql/mutations";

export default function CreateFamilyMember({ route, navigation }) {
  //   console.log("hi from create family", route.params);

  const [variables, setVariables] = useState({
    relation: "Mother",
    notification: "1",
    kidId: "5fa42e821ead8f4fb5d1c76d",
  });

  const [selectedValueRelation, setSelectedValueRelation] = useState("Father");
  //   const [selectedValueNotification, setSelectedValueNotification] = useState(
  //     "1"
  //   );

  const [AddFamilyMember, { error }] = useMutation(ADD_MEMBER, {
    onError: (error) => console.log("error: ", error.graphQLErrors),
    onCompleted: (data) => {
      console.log("result", data);
      //   navigation.navigate("KidCircles");
    },
  });

  function submitForm(e) {
    console.log("DOES THIS WORK", variables);
    e.preventDefault();
    AddFamilyMember({ variables });
  }

  return (
    <View style={{ flex: 1, justifyContent: "space-evenly" }}>
      <ScrollView>
        <View>
          <Text
            style={styles.title}
            adjustsFontSizeToFit={true}
            numberOfLines={1}
          >
            Choose relation to kid:
          </Text>
          <Picker
            selectedValue={variables.relation}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) =>
              setVariables({ ...variables, relation: itemValue })
            }
          >
            <Picker.Item label="Father" value="Father" />
            <Picker.Item label="Mother" value="Mother" />
            <Picker.Item label="Grand Father" value="Grand Father" />
            <Picker.Item label="Grand-Mother" value="Grand-Mother" />
            <Picker.Item label="Aunt" value="Aunt" />
            <Picker.Item label="Uncle" value="Uncle" />
            <Picker.Item label="Guardian" value="Guardian" />
          </Picker>

          {/* Picker for notification if that gets added */}
          {/* <Picker
            selectedValue={variables.notification}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) =>
                setVariables({ ...variables, notification: itemValue })
            }
          >
            <Picker.Item label="once per day" value="1" />
            <Picker.Item label="three times per week" value="3" />
            <Picker.Item label="once per week" value="2" />
            <Picker.Item label="no notifications" value="0" />
          </Picker> */}

          <TouchableWithoutFeedback onPress={submitForm}>
            <View style={styles.loginButton}>
              <Text style={styles.loginButtonText}>CONTINUE</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </View>
  );
}
