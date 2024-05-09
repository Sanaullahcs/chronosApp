import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./DisplayUserProfile.style";
import { url } from "../../config/environment";

const DisplayUserProfile = ({ profileData, handelEditProfile }) => {
  const imageUrl = `${url}${profileData?.image}` || "";

  return (
    <View style={styles.container}>
      <View style={styles.imageBorder}>
        <Image
          style={styles.image}
          source={
            imageUrl
              ? { uri: imageUrl }
              : require("../../../assets/images/UserProfile.png")
          }
        />
      </View>

      {/* start profile display------------------------ */}
      <View style={styles.profileDisplayContainer}>
        {/* start field--------------------  */}
        <View style={styles.profileFieldRow}>
          <Text style={styles.fieldTitle}>Name:</Text>
          <Text style={styles.fieldTitle}>{`${profileData?.first_name || ""} ${
            profileData?.last_name || ""
          }`}</Text>
        </View>
        {/* end field--------------------  */}

        <View style={styles.horizontalDivider}></View>

        {/* start field--------------------  */}
        <View style={styles.profileFieldRow}>
          <Text style={styles.fieldTitle}>Email:</Text>
          <Text style={styles.fieldValue} className="w-44">
            {profileData?.email}
          </Text>
        </View>
        {/* end field--------------------  */}
        <View style={styles.horizontalDivider}></View>

        {/* start field--------------------  */}
        <View style={styles.profileFieldRow}>
          <Text style={styles.fieldTitle}>Phone:</Text>
          <Text style={styles.fieldValue} className="w-44">
            {profileData?.phone}
          </Text>
        </View>
        {/* end field--------------------  */}
        {/* <View style={styles.horizontalDivider}></View> */}

        {/* start field--------------------  */}
        {/* <View style={styles.profileFieldRow}>
          <Text style={styles.fieldTitle}>Gender:</Text>
          <Text style={styles.fieldValue} className="w-44">
            {"gender"}
          </Text>
        </View> */}
        {/* end field--------------------  */}
      </View>

      {/* end profile display------------------------ */}
      {/* <TouchableOpacity style={styles.blueButton} onPress={handelEditProfile}>
        <Text style={styles.buttonText}>EDIT PROFILE</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default DisplayUserProfile;
