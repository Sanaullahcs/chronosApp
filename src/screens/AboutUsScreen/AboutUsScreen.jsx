import { View, Text, ScrollView } from "react-native";
import React from "react";
import styles from "./AboutUsScreen.style";
import BackNavigationHeader from "../../components/BackNavigationHeader/BackNavigationHeader";

const AboutUsScreen = () => {
  return (
    <ScrollView stickyHeaderIndices={[0]} style={styles.screen}>
      <BackNavigationHeader title="About Us" />
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Welcome to Chronos, your reliable companion for managing your work
            hours effortlessly. Whether you're a freelancer, consultant, or
            simply want to keep track of your time spent on various tasks,
            Chronos is here to streamline your productivity.
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            At Chronos, we understand the value of time and the importance of
            efficiently managing it. Our mission is to empower individuals and
            teams to maximize their productivity by providing a user-friendly
            platform for logging and monitoring work hours accurately.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default AboutUsScreen;
