import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./Home.style";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";

import { useNavigation } from "@react-navigation/native";
import { ClockIcon, HelpIcon, ReportIcon, TasksIcon } from "../../../assets";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ProfileHeader />
      <View style={styles.mainContainer}>
        {/* start card---------------------------------- */}
        <TouchableOpacity
          style={styles.cardBody}
          onPress={() => navigation.navigate("TasksScreen")}
        >
          <Image source={TasksIcon} style={styles.icon} />
          <View style={styles.verticalDivider}></View>
          <Text style={styles.cardText}>My Tasks</Text>
        </TouchableOpacity>
        {/* start card---------------------------------- */}
        {/* start card---------------------------------- */}
        <TouchableOpacity
          style={styles.cardBody}
          onPress={() => navigation.navigate("TimeStudies")}
        >
          <Image source={ClockIcon} style={styles.icon} />
          <View style={styles.verticalDivider}></View>
          <Text style={styles.cardText}>Time Studies</Text>
        </TouchableOpacity>
        {/* start card---------------------------------- */}
        {/* start card---------------------------------- */}
        <TouchableOpacity style={styles.cardBody}>
          <Image source={ReportIcon} style={styles.icon} />
          <View style={styles.verticalDivider}></View>
          <Text style={styles.cardText}>Reports / Logs</Text>
        </TouchableOpacity>
        {/* start card---------------------------------- */}
        {/* start card---------------------------------- */}
        <TouchableOpacity style={styles.cardBody}>
          <Image source={HelpIcon} style={styles.icon} />
          <View style={styles.verticalDivider}></View>
          <Text style={styles.cardText}>Help</Text>
        </TouchableOpacity>
        {/* start card---------------------------------- */}
      </View>
    </View>
  );
};

export default Home;
