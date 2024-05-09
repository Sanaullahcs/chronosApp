import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  innerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profileIcons: {
    width: 17,
    resizeMode: "contain",
  },
  profileText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#1E1E1E",
    fontFamily: "Manrope",
  },
});

export default styles;

export const chevronIcon = {
  width: 16,
  height: 16,
};
