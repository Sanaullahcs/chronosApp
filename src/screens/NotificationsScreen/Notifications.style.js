import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardBody: {
    padding: 10,
    // margin: 20,
    // width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    // backgroundColor: "red",
  },
  redDot: {
    backgroundColor: "#f00",
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 10,
  },
  notificationIcon: {
    width: 35,
    height: 35,
  },
  notificationContentContainer: {
    display: "flex",
    flexDirection: "column",
  },
  notificationHeading: {
    fontWeight: "600",
    fontSize: 15,
    color: "#18AFBA",
  },
  notificationDescription: {
    fontWeight: "400",
    fontSize: 13,
    width: "55%",
    color: "#B2B2B2",
  },
  actionRow: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  deleteRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  blackDot: {
    backgroundColor: "#000",
    width: 5,
    height: 5,
    borderRadius: 2.5,
  },
  actionText: {
    fontWeight: "400",
    fontSize: 13,
    color: "#6A6A6A",
  },
  notificationTime: {
    fontWeight: "400",
    fontSize: 11,
    color: "#002A52",
    marginLeft: "auto",
  },
});

export default styles;
