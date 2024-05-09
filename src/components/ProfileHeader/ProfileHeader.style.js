import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    resizeMode: "contain",
  },
  profileImage: {
    width: 32,
    resizeMode: "contain",
  },
  divider: {
    width: "100%",
    borderColor: "#C6C6C6",
    borderWidth: 0.5,
  },
});

export default styles;
