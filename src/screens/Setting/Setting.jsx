import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import BackNavigationHeader from "../../components/BackNavigationHeader/BackNavigationHeader";
import styles from "./Setting.style";
import * as Icon from "react-native-feather";
import {
  AboutIcon,
  BellIcon,
  HelpIcon,
  HelpIconBlack,
  LockIcon,
  UserIcon,
} from "../../../assets";
import SettingCard from "../../components/SettingCard/SettingCard";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { logout } from "../../slices/authSlice";

const Setting = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <View style={{ backgroundColor: "#fff", height: "100%" }}>
      <BackNavigationHeader title="Settings" />
      <View style={styles.settingMainContainer}>
        <SettingCard
          handelPress={() => navigation.navigate("Home")}
          image={UserIcon}
          title="Profile"
        />
        <View style={styles.horizontalDivider}></View>
        <SettingCard
          handelPress={() => navigation.navigate("NotificationsScreen")}
          image={BellIcon}
          title="Notifications"
        />
        <View style={styles.horizontalDivider}></View>
        <SettingCard
          handelPress={() => navigation.navigate("PrivacyPolicy")}
          image={LockIcon}
          title="Privacy Policy"
        />
        <View style={styles.horizontalDivider}></View>
        <SettingCard
          handelPress={() => navigation.navigate("NotificationsScreen")}
          image={HelpIconBlack}
          title="Help & Support"
        />
        <View style={styles.horizontalDivider}></View>
        <SettingCard
          handelPress={() => navigation.navigate("AboutUsScreen")}
          image={AboutIcon}
          title="About"
        />
        <View style={styles.horizontalDivider}></View>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Icon.LogOut width={20} color="#1E1E1E" />
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Setting;
