import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontFamily: "Manrope",
    fontWeight: "400",
    color: "#fff",
    width: "80%",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "10%",
  },
  cardRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
  },
  squareBox: {
    height: 60,
    width: 60,
    borderColor: "#80C4D0",
    borderWidth: 2,
    borderRadius: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 30,
    resizeMode: "contain",
  },
  rectangleBox: {
    height: 60,
    width: "60%",
    borderColor: "#80C4D0",
    borderWidth: 2,
    borderRadius: 4,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  cardText: {
    color: "#80C4D0",
    fontSize: 20,
    fontFamily: "Manrope",
    fontWeight: "600",
  },
});

export default styles;
