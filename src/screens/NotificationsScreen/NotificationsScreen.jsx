import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./Notifications.style";
import BackNavigationHeader from "../../components/BackNavigationHeader/BackNavigationHeader";
const NotificationsScreen = () => {
  return (
    <View>
      <BackNavigationHeader title="Notifications" />
      {/* start notification card-----------------------------  */}
      <View style={[styles.cardBody, { backgroundColor: "white" }]}>
        <View style={styles.redDot}></View>
        <Image
          source={require("../../../assets/icons/NotificationIcon.png")}
          style={styles.notificationIcon}
        />
        <View style={styles.notificationContentContainer}>
          <TouchableOpacity>
            <Text style={styles.notificationHeading}>Reminder</Text>
            <Text style={styles.notificationDescription}>
              Lorem Ipsum is simply the printing and typesetting industry.
            </Text>
          </TouchableOpacity>

          {/* <View style={styles.actionRow}> */}
          <TouchableOpacity>
            <Text style={styles.actionText}>Mark as read</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.deleteRow}>
              <View style={styles.blackDot}></View>
              <Text style={styles.actionText}>Archive</Text>
            </TouchableOpacity> */}
          {/* </View> */}
        </View>
        <Text style={styles.notificationTime}>23 min</Text>
      </View>
      {/* end notification card-----------------------------  */}
    </View>
  );
};

export default NotificationsScreen;
