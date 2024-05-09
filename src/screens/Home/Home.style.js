import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    // justifyContent: "center",
    marginTop: 20,
    alignItems: "center",
    gap: 20,
  },
  cardBody: {
    width: "80%",
    height: 100,
    display: "flex",
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#002A52",
    borderRadius: 16,
    paddingLeft: 40,
  },
  icon: {
    width: 28,
    resizeMode: "contain",
  },
  verticalDivider: {
    height: "30%",
    borderColor: "#80C4D0",
    borderWidth: 0.5,
  },
  cardText: {
    fontFamily: "Manrope",
    fontSize: 20,
    color: "#80C4D0",
    fontWeight: "600",
  },
});

export default styles;
