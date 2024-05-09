import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles, { chevronIcon } from "./SettingCard.style";
import * as Icon from "react-native-feather";
import { UserIcon } from "../../../assets";

const SettingCard = ({ handelPress, image, title }) => {
  return (
    <TouchableOpacity style={styles.cardRow} onPress={handelPress}>
      <View style={styles.innerRow}>
        <Image source={image} style={styles.profileIcons} />
        <Text style={styles.profileText}>{title}</Text>
      </View>

      <Icon.ChevronRight
        color="#000"
        width={chevronIcon.width}
        height={chevronIcon.height}
      />
    </TouchableOpacity>
  );
};

export default SettingCard;
