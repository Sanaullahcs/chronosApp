import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  Pressable,
} from "react-native";
import React from "react";
import styles from "./ProfileHeader.style";
import { useNavigation } from "@react-navigation/native";

const ProfileHeader = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.headerRow}>
        <View></View>
        <Image
          source={require("../../../assets/images/BlackChronosLogo.png")}
          style={styles.logo}
        />

        <Pressable onPress={() => navigation.navigate("ProfileScreen")}>
          <Image
            source={require("../../../assets/images/HeaderProfileImage.png")}
            style={styles.profileImage}
          />
        </Pressable>
      </View>
      <View style={styles.divider}></View>
    </View>
  );
};

export default ProfileHeader;
