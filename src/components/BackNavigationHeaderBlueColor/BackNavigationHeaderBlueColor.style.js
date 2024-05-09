import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerNav: {
    backgroundColor: "#002A52",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "flex-start",
    padding: 15,
    paddingVertical: 20,
    alignItems: "center",
  },
  backButton: {
    display: "flex",
    flexDirection: "row",
    width: "13%",
  },
  headerNavText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: -0.408,
    marginLeft: "28%",
  },
  divider: {
    width: "100%",
    borderColor: "#C6C6C6",
    borderWidth: 0.5,
  },
});
export default styles;
