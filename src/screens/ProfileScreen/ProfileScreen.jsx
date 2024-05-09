import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./ProfileScreen.style";
import useFetch from "../../hooks/useFetch";
import { url } from "../../config/environment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BackNavigationHeader from "../../components/BackNavigationHeader/BackNavigationHeader";
import DisplayUserProfile from "../../components/DisplayUserProfile/DisplayUserProfile";
import EditUserProfile from "../../components/EditUserProfile/EditUserProfile";
import { useDispatch } from "react-redux";
import { logout } from "../../slices/authSlice";
import { useSelector } from "react-redux";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

const UserProfile = () => {
  const [currentUserId, setCurrentUserId] = useState("");
  const [buttonToggle, setButtonToggle] = useState(false);
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);

  const { data, loading, error, refetch } = useFetch(
    `${url}/api/user/detail`,
    token
  );
  const handleLogout = () => {
    dispatch(logout());
  };
  // const [currentUserId, setCurrentUserId] = useState("");
  console.log("=====================");
  console.log(token);
  // console.log(data, "data");
  // console.log(error, "error");
  useEffect(() => {
    const getProfileId = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        setCurrentUserId(userId);
      } catch (error) {
        console.error(error);
      }
    };

    getProfileId();
  }, [data, token]);

  const handelEditProfile = () => {
    setButtonToggle(!buttonToggle);
  };

  const handelUpdateProfile = () => {
    refetch();

    setButtonToggle(!buttonToggle);
  };

  return (
    <View style={{ height: "100%", backgroundColor: "white" }}>
      <BackNavigationHeader title="Profile" />
      <LoadingScreen isVisible={loading} />

      {buttonToggle ? (
        <EditUserProfile
          profileData={data}
          currentUserId={currentUserId}
          buttonToggle={buttonToggle}
          handelUpdateProfile={handelUpdateProfile}
          handelEditProfile={handelEditProfile}
        />
      ) : (
        <DisplayUserProfile
          profileData={data && data?.data?.user}
          buttonToggle={buttonToggle}
          handelUpdateProfile={handelUpdateProfile}
          handelEditProfile={handelEditProfile}
        />
      )}
      {/* 
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default UserProfile;
