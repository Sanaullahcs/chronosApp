import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import BackNavigationHeaderBlueColor from "../../components/BackNavigationHeaderBlueColor/BackNavigationHeaderBlueColor";
import styles from "./TasksScreen.style";
import * as Icon from "react-native-feather";
import { HeartIcon, LiverIcon, LungsIcon, PancreasIcon } from "../../../assets";
import TasksCard from "../../components/TasksCard/TasksCard";
import { useNavigation } from "@react-navigation/native";

const TasksScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "#002A52", height: "100%" }}>
      <BackNavigationHeaderBlueColor title="My Tasks" />

      <Text style={styles.title}>
        Input your work hours in assigned tasks by your department.
      </Text>
      <View style={styles.cardContainer}>
        <TasksCard
          handelPress={() =>
            navigation.navigate("TasksTableScreen", { task: "liver" })
          }
          cardImage={LiverIcon}
          title="Liver"
        />
        <TasksCard
          handelPress={() =>
            navigation.navigate("TasksTableScreen", { task: "pancreas" })
          }
          cardImage={PancreasIcon}
          title="Pancreas"
        />
        <TasksCard
          handelPress={() =>
            navigation.navigate("TasksTableScreen", { task: "lungs" })
          }
          cardImage={LungsIcon}
          title="Lungs"
        />
        <TasksCard
          handelPress={() =>
            navigation.navigate("TasksTableScreen", { task: "heart" })
          }
          cardImage={HeartIcon}
          title="Heart"
        />
      </View>
    </View>
  );
};

export default TasksScreen;
