import React from "react";
import { View, StatusBar, ScrollView } from "react-native";
import { RowItem } from "../components/RowItem";

import spaceQuestions from "../data/space";
import westernQuestions from "../data/westerns";
import computerQuestions from "../data/computers";

export default ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <StatusBar barStyle="dark-content" />
    <ScrollView style={{ flex: 1 }}>
      <RowItem
        name="Космос"
        color="#36B1F0"
        onPress={() =>
          navigation.navigate("Quiz", {
            color: "#36B1F0",
            questions: spaceQuestions,
            title: "Космос"
          })
        }
      />
      <RowItem
        name="Кіно"
        color="#799496"
        onPress={() =>
          navigation.navigate("Quiz", {
            color: "#799496",
            questions: westernQuestions,
            title: "Кіно"
          })
        }
      />
      <RowItem
        name="Наука"
        color="#49475B"
        onPress={() =>
          navigation.navigate("Quiz", {
            color: "#49475B",
            questions: computerQuestions,
            title: "Наука"
          })
        }
      />
    </ScrollView>
  </View>
);
