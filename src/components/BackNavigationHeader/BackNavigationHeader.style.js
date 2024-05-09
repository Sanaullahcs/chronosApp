import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerNav: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    paddingVertical: 20,
    alignItems: "center",
  },
  backButton: {
    display: "flex",
    flexDirection: "row",
  },
  headerNavText: {
    color: "#18AFBA",
    fontSize: 20,
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: -0.408,
  },
  divider: {
    width: "100%",
    borderColor: "#C6C6C6",
    borderWidth: 0.5,
  },
});
export default styles;
