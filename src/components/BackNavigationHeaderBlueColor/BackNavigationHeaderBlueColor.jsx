import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./BackNavigationHeaderBlueColor.style";
import { useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";

const BackNavigationHeaderBlueColor = ({ title }) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={{ paddingVertical: 10 }}>
      <View style={styles.headerNav}>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Icon.ChevronLeft size={20} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerNavText}>{title}</Text>
      </View>
      <View style={styles.divider}></View>
    </View>
  );
};

export default BackNavigationHeaderBlueColor;
