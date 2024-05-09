import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 50,
    alignItems: "center",
    gap: 20,
  },
  imageBorder: {
    borderColor: "#DAD9F4",
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: "#8F8F8F",
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 50,
  },
  profileDisplayContainer: {
    paddingVertical: 10,
    width: "100%",
    // borderColor: "#8F8F8F",
    // borderRadius: 8,
    // borderWidth: 1,
    display: "flex",
    marginTop: 40,
    // alignItems: "s",
    gap: 11,
  },
  profileFieldRow: {
    display: "flex",
    flexDirection: "row",
    gap: 60,
    marginLeft: "11%",
    marginRight: "auto",
  },
  fieldTitle: {
    fontFamily: "Manrope",
    fontSize: 15,
    fontWeight: "700",
    color: "#18AFBA",
  },
  nameFieldText: {
    fontFamily: "Manrope",
    fontSize: 15,
    fontWeight: "700",
    color: "#1C81CB",
  },
  fieldValue: {
    fontFamily: "Manrope",
    fontSize: 15,
    fontWeight: "500",
    color: "#727272",
  },
  horizontalDivider: {
    width: "80%",
    height: 1,
    borderWidth: 0.5,
    borderColor: "#BFBEBE",
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 5,
  },
  blueButton: {
    backgroundColor: "#18AFBA",
    height: 40,
    width: "85%",
    borderRadius: 8,
    marginBottom: 11,
    marginTop: 30,
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 15,
    fontFamily: "ManropeBold",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 22,
  },
});

export default styles;
