import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logo: {
    width: 180,
    // marginHorizontal: "40%",
    // alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 75,
  },
  formContainer: {
    width: "87%",
    display: "flex",
    marginHorizontal: "7%",
    gap: 15,
  },
  pageTitle: {
    fontFamily: "Manrope",
    fontSize: 25,
    fontWeight: "600",
  },
  fieldContainer: {
    display: "flex",
    gap: 5,
  },
  inputLabel: {
    fontFamily: "Manrope",
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },
  inputContainer: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#FFF",
  },
  input: {
    fontFamily: "Manrope",
    fontSize: 14,
    color: "#002A52",
  },
  verticalBar: {
    width: 1,
    height: "95%",
    backgroundColor: "#CDD1E0",
    marginHorizontal: 10,
  },
  inputError: {
    fontFamily: "Manrope",
    color: "#E72626",
    fontSize: 14,
  },
  toggleIcon: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  forgetPasswordRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  forgetPasswordText: {
    fontFamily: "Manrope",
    fontSize: 14,
    fontWeight: "600",
    color: "#FB344F",
  },
  checkBoxRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  blueButton: {
    backgroundColor: "#18AFBA",
    height: 40,
    width: "100%",
    borderRadius: 8,
    marginBottom: 11,
    marginTop: 28,
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  grayButton: {
    backgroundColor: "#B4B4B4",
    height: 40,
    width: "100%",
    borderRadius: 8,
    marginBottom: 12,
    marginTop: 20,
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
  haveNotRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  haveNotText: {
    fontFamily: "Manrope",
    fontSize: 14,
    fontWeight: "600",
    color: "#999EA1",
  },
  otherPageLink: {
    fontFamily: "Manrope",
    fontSize: 14,
    fontWeight: "600",
    color: "#1C81CB",
    marginLeft: 5,
  },
});

export default styles;

export const placeholderColor = "#1F1F1F6E";
