import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./BackNavigationHeader.style";
import { useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";

const BackNavigationHeader = ({ title }) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={{ paddingVertical: 20 }}>
      <View style={styles.headerNav}>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Icon.ChevronLeft size={20} color="#18AFBA" />
        </TouchableOpacity>

        <Text style={styles.headerNavText}>{title}</Text>
        <View></View>
      </View>
      <View style={styles.divider}></View>
    </View>
  );
};

export default BackNavigationHeader;
