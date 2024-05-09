import { View, Text, ScrollView } from "react-native";
import React from "react";
import styles from "./PrivacyPolicy.style";
import BackNavigationHeader from "../../components/BackNavigationHeader/BackNavigationHeader";

const PrivacyPolicy = () => {
  return (
    <ScrollView stickyHeaderIndices={[0]} style={styles.screen}>
      <BackNavigationHeader title="Privacy Policy" />
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Your privacy is important to us. It is Brainstorming's policy to
            respect your privacy regarding any information we may collect from
            you across our
            <Text style={[styles.text, { color: "#18AFBA" }]}>website,</Text>
            and other sites we own and operate.
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            We only ask for personal information when we truly need it to
            provide a service to you. We collect it by fair and lawful means,
            with your knowledge and consent. We also let you know why we’re
            collecting it and how it will be used.
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            We only retain collected information for as long as necessary to
            provide you with your requested service. What data we store, we’ll
            protect within commercially acceptable means to prevent loss and
            theft, as well as unauthorized access, disclosure, copying, use or
            modification.
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            We don’t share any personally identifying information publicly or
            with third-parties, except when required to by law.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default PrivacyPolicy;
