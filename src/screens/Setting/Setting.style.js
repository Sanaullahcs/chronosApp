import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  settingMainContainer: {
    padding: 20,
    backgroundColor: "#fff",
    marginTop: 20,
    borderRadius: 10,
    marginLeft: "auto",
    marginRight: "auto",
    borderColor: "#D6D6D6",
    borderWidth: 0.5,
    borderRadius: 8,
    width: "85%",
    height: "75%",
  },
  horizontalDivider: {
    width: "100%",
    height: 1,
    borderWidth: 0.5,
    borderColor: "#C5C5C5",
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 5,
  },
  logoutButton: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
  logoutButtonText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#1E1E1E",
    fontFamily: "Manrope",
  },
});

export default styles;
