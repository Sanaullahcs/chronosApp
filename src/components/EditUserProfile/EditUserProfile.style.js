import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 50,
    alignItems: "center",
    gap: 15,
  },
  imageContainer: {},
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
  plusIcon: {
    width: 18,
    height: 18,
    position: "absolute",
    bottom: 7,
    right: 3,
  },
  email: {
    fontFamily: "Manrope",
    fontWeight: "700",
    fontSize: 16,
    color: "#18AFBA",
  },
  formContainer: {
    width: "85%",
    display: "flex",
    marginHorizontal: "7%",
    gap: 15,
    marginTop: "1%",
  },
  fieldContainer: {
    display: "flex",
    gap: 5,
  },
  inputLabel: {
    fontFamily: "Manrope",
    fontSize: 14,
    fontWeight: "600",
    color: "#00004D",
  },
  inputContainer: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  input: {
    fontFamily: "Manrope",
    fontSize: 14,
  },
  genderRow: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  radioButtonRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  verticalBar: {
    width: 1,
    height: "95%",
    backgroundColor: "#CDD1E0",
    marginHorizontal: 10,
  },
  genderText: {
    color: "#555555",

    fontFamily: "Manrope",
    fontSize: 15,
    fontWeight: "400",
  },
  inputError: {
    fontFamily: "Manrope",
    color: "#E72626",
    fontSize: 14,
  },
  blueButton: {
    backgroundColor: "#18AFBA",
    height: 40,
    width: "100%",
    borderRadius: 8,
    marginBottom: 11,
    marginTop: 40,
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
export const placeholderColor = "#1F1F1F6E";
