import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
  ScrollView,
  Alert,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles, { placeholderColor } from "./Login.style.js";
// import { Checkbox } from "react-native-paper";
import { CheckBox } from "react-native-btr";
// import CheckBox from "@react-native-community/checkbox";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { validateEmail } from "../../../utils/formInputHelper";
import { url } from "../../../config/environment.js";
import { login } from "../../../slices/authSlice.js";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoadingScreen from "../../../components/LoadingScreen/LoadingScreen.jsx";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [hidePassword, setHidePassword] = useState(true);
  const [checked, setChecked] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const rememberedCredentials = AsyncStorage.getItem("rememberCredentials");

  useEffect(() => {
    const loadRememberedCredentials = async () => {
      const rememberedCredentialsString = await AsyncStorage.getItem(
        "rememberedCredentials"
      );
      if (rememberedCredentialsString) {
        const rememberedCredentials = JSON.parse(rememberedCredentialsString);
        setLoginData({
          email: rememberedCredentials.email,
          password: rememberedCredentials.password,
        });
        setChecked(true);
      }
    };

    loadRememberedCredentials();
  }, []);

  const handleRememberMeChange = () => {
    setChecked(!checked);
  };

  const handleEmailChange = (text) => {
    setLoginData({ ...loginData, email: text });

    if (isSubmitted) {
      setEmailError(validateEmail(text) ? "" : "Enter a valid email address");
    }
  };

  const handlePasswordChange = (text) => {
    setLoginData({ ...loginData, password: text });
    if (loginData.password.length > 6) {
      setPasswordError("");
      // return;
    }
  };

  const handelLogin = async () => {
    setIsSubmitted(true);
    if (!validateEmail(loginData.email)) {
      setEmailError("Enter a valid email address");
      return;
    }
    if (loginData.password.length < 5) {
      setPasswordError("Password must be at least 6 characters");
      return;
    }
    setIsLoading(true);
    const userData = {
      email: loginData.email,
      password: loginData.password,
    };

    try {
      const response = await fetch(`${url}/api/auth/signin`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      if (response.status === "Error") {
        console.log(response);
        if (json.message === "Invalid credentials") {
          setEmailError(json.message);
        } else {
          Alert.alert("An Unknown Error occured");
        }
      } else {
        dispatch(login({ token: json.data.token }));
        await AsyncStorage.setItem("userToken", json.data.token);
        if (checked) {
          await AsyncStorage.setItem(
            "rememberedCredentials",
            JSON.stringify(userData)
          );
        } else {
          await AsyncStorage.removeItem("rememberedCredentials");
        }
      }
    } catch (error) {
      console.error(
        "catch section Login.jsx An unexpected error occurred:",
        error.message || "Unknown error"
      );
      Alert.alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getVerticalOffset = () => {
    const { height } = Dimensions.get("window");
    return height >= 812 ? 90 : 45; // iPhone X and above have a height of 812 or more
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#002A52" }}>
      <LoadingScreen isVisible={isLoading} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : ""}
        keyboardVerticalOffset={Platform.OS === "ios" ? getVerticalOffset() : 0}
        style={{ height: "100%" }}
      >
        <ScrollView
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Image
            style={styles.logo}
            source={require("../../../../assets/images/WhiteChronosLogo.png")}
            resizeMode="contain"
          />

          <View style={styles.formContainer}>
            <View style={styles.fieldContainer} className="mt-5">
              <Text style={styles.inputLabel}>Username or email</Text>
              <View
                style={{
                  ...styles.inputContainer,
                  borderColor: emailError ? "#E72626" : "#C6C6C6",
                }}
              >
                <TextInput
                  style={{
                    ...styles.input,
                    color: emailError ? "#E72626" : "#1F1F1F",
                  }}
                  value={loginData.email}
                  placeholderTextColor={placeholderColor}
                  placeholder="Please Enter Your Email"
                  onChangeText={handleEmailChange}
                  maxLength={25}
                />
              </View>
              {emailError ? (
                <Text style={styles.inputError}>{emailError}</Text>
              ) : null}
            </View>

            <View style={styles.fieldContainer}>
              <Text style={styles.inputLabel}>Password</Text>
              <View
                style={{
                  ...styles.inputContainer,
                  borderColor: passwordError ? "#E72626" : "#C6C6C6",
                }}
              >
                <TextInput
                  style={{
                    ...styles.input,
                    color: passwordError ? "#E72626" : "#1F1F1F",
                  }}
                  value={loginData.password}
                  placeholderTextColor={placeholderColor}
                  placeholder="Please Enter Your Password"
                  secureTextEntry={hidePassword}
                  onChangeText={handlePasswordChange}
                  maxLength={20}
                />
                <TouchableOpacity
                  style={styles.toggleIcon}
                  onPress={() => setHidePassword(!hidePassword)}
                >
                  <Ionicons
                    name={hidePassword ? "eye-off" : "eye"}
                    size={24}
                    color="#292739"
                  />
                </TouchableOpacity>
              </View>
              {passwordError ? (
                <Text style={styles.inputError}>{passwordError}</Text>
              ) : null}
            </View>

            <View style={styles.forgetPasswordRow}>
              <View style={styles.checkBoxRow}>
                <CheckBox
                  checked={checked}
                  onPress={handleRememberMeChange}
                  color="gray"
                />
                {/* <CheckBox
                  value={checked}
                  onValueChange={() => {}}
                  tintColors={{ true: "#F15927", false: "black" }}
                /> */}
                <Text style={styles.inputLabel}>Remember Me</Text>
              </View>

              {/* <TouchableOpacity>
                  <Text style={styles.forgetPasswordText}>Forgot Password?</Text>
                </TouchableOpacity> */}
            </View>

            <TouchableOpacity style={styles.blueButton} onPress={handelLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
