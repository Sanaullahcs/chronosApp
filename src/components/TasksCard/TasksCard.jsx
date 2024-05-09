import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import BackNavigationHeaderBlueColor from "../../components/BackNavigationHeaderBlueColor/BackNavigationHeaderBlueColor";
import * as Icon from "react-native-feather";
import styles from "./TasksCard.style";

const TasksCard = ({ handelPress, cardImage, title }) => {
  return (
    <TouchableOpacity style={styles.cardRow} onPress={handelPress}>
      {/* <View style={styles.squareBox}>
        <Image source={cardImage} style={styles.icon} />
      </View> */}
      <View style={styles.rectangleBox}>
        <Text style={styles.cardText}>{title}</Text>
        <Icon.ChevronRight size={20} color="#80C4D0" />
      </View>
    </TouchableOpacity>
  );
};

export default TasksCard;
