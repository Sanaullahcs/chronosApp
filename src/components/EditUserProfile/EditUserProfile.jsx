import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import styles, { placeholderColor } from "./EditUserProfile.style";
import * as DocumentPicker from "expo-document-picker";
import { url } from "../../config/environment";
import { getVerticalOffset, handelGetImage } from "../../utils/helper";
import { useSelector } from "react-redux";
import PhoneInput from "react-native-international-phone-number";
import { useFonts } from "expo-font";
import { RadioButton } from "react-native-paper";

const dummyImage = require("../../../assets/images/UserProfile.png");
const EditUserProfile = ({ profileData, handelUpdateProfile }) => {
  const [formData, setFormData] = useState({
    image: profileData?.image,
    firstName: profileData?.firstName,
    lastName: profileData?.lastName,
  });
  const [gender, setGender] = useState("male");
  // const parts = (profileData?.image ?? "").split("\\");
  // const ImageId = parts[1];
  // const imageUrl = `${url}/uploads/${ImageId}`;
  // const imageUrl = handelGetImage(profileData?.image);
  const imageUrl = `${url}/uploads/${handelGetImage(profileData?.image)}`;
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "*/*",
      copyToCacheDirectory: true,
    });
    if (result.type == "success") {
      let { name, size, uri } = result;
      let nameParts = name.split(".");
      let fileType = nameParts[nameParts.length - 1];
      var fileToUpload = {
        name: name,
        size: size,
        uri: uri,
        type: fileType,
      };
      setFormData({
        ...formData,
        image: fileToUpload?.uri ? fileToUpload : imageUrl,
      });
    }
  };
  const token = useSelector((state) => state.auth.token);

  const updateProfile = async () => {
    let imageFormData = new FormData();
    // Check if an image is selected
    if (formData?.image?.uri) {
      let uriParts = formData?.image.uri.split(".");
      let fileType = uriParts[uriParts.length - 1];
      imageFormData.append("image", {
        uri: formData?.image.uri,
        name: `photo.${fileType}`,
        type: `image/${fileType}`,
      });
    }
    // Always include name data
    imageFormData.append("firstName", formData?.firstName);
    imageFormData.append("lastName", formData?.lastName);
    imageFormData.append("gender", gender);
    imageFormData.append(
      "phone",
      `${selectedCountry.callingCode}${phoneInputValue}`
    );
    console.log("imageFormData", imageFormData);
    try {
      const response = await fetch(`${url}/api/profile`, {
        method: "PATCH",
        body: imageFormData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      if (response.ok) {
        handelUpdateProfile();
        console.log("Profile updated successfully");
        return response.json();
      }
    } catch (error) {
      console.error(error);
    }
  };

  // start counter code input phone number--------------
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [phoneInputValue, setPhoneInputValue] = useState("");

  useFonts({
    TwemojiMozilla: require("../../../assets/fonts/Manrope-Bold.ttf"),
  });

  function handleInputValue(phoneNumber) {
    setPhoneInputValue(phoneNumber);
  }

  function handleSelectedCountry(country) {
    setSelectedCountry(country);
  }
  // start counter code input phone number--------------

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        // behavior={Platform.OS === "ios" ? "padding" : ""}
        keyboardVerticalOffset={Platform.OS === "ios" ? getVerticalOffset() : 0}
        style={[styles.container, { flex: 1 }]}
      >
        <TouchableOpacity style={styles.imageContainer} onPress={pickDocument}>
          <View style={styles.imageBorder}>
            <Image
              style={styles.image}
              key={formData?.image?.uri}
              source={
                formData?.image?.uri
                  ? { uri: formData?.image?.uri }
                  : { uri: imageUrl ? imageUrl : "" }
              }
            />
          </View>

          <Image
            style={styles.plusIcon}
            source={require("../../../assets/icons/UploadPlusIcon.png")}
          />
        </TouchableOpacity>
        <Text style={styles.email}>{"profileData?.email"}</Text>
        <ScrollView>
          <View style={styles.formContainer}>
            <View style={styles.fieldContainer}>
              <View
                style={{
                  ...styles.inputContainer,
                  borderColor: "#a6a6a6",
                }}
              >
                <TextInput
                  style={{
                    ...styles.input,
                    color: "#1F1F1F",
                  }}
                  value={formData.firstName}
                  placeholderTextColor={placeholderColor}
                  placeholder="First name"
                  onChangeText={(text) =>
                    setFormData({ ...formData, firstName: text })
                  }
                />
              </View>
            </View>
            <View style={styles.fieldContainer}>
              <View
                style={{
                  ...styles.inputContainer,
                  borderColor: "#a6a6a6",
                }}
              >
                <TextInput
                  style={{
                    ...styles.input,
                    color: "#1F1F1F",
                  }}
                  value={formData.lastName}
                  placeholderTextColor={placeholderColor}
                  placeholder="Last name"
                  onChangeText={(text) =>
                    setFormData({ ...formData, lastName: text })
                  }
                />
              </View>
            </View>

            <PhoneInput
              value={phoneInputValue}
              onChangePhoneNumber={handleInputValue}
              selectedCountry={selectedCountry}
              onChangeSelectedCountry={handleSelectedCountry}
              defaultCountry="PK"
              layout="second"
              keyboardType="phone-pad"
              placeholder="Enter your Phone "
              placeholderTextColor={placeholderColor}
            />

            {/* gender selector radio buttons */}
            <View style={styles.genderRow}>
              <Text style={[styles.genderText, { fontWeight: "600" }]}>
                Gender:
              </Text>

              <View style={styles.radioButtonRow}>
                <RadioButton
                  value="male"
                  status={gender === "male" ? "checked" : "unchecked"}
                  onPress={() => setGender("male")}
                  color="#18AFBA"
                />
                <Text style={styles.genderText}>Male</Text>
              </View>

              <View style={styles.radioButtonRow}>
                <RadioButton
                  value="female"
                  status={gender === "female" ? "checked" : "unchecked"}
                  onPress={() => setGender("female")}
                  color="#18AFBA"
                />
                <Text style={styles.genderText}>Female</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.blueButton} onPress={updateProfile}>
              <Text style={styles.buttonText}>UPDATE PROFILE</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default EditUserProfile;
