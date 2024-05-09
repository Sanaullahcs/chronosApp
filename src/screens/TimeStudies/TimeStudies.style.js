import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  titleRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: "Manrope",
    fontWeight: "600",
    color: "#002A52",
  },
  searchFilterContainer: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
    backgroundColor: "#002A52",
    padding: 20,
    borderRadius: 8,
  },
  segmentedButtonRow: {
    display: "flex  ",
    flexDirection: "row",
    gap: 1,
  },
  divider: {
    width: "100%",
    borderColor: "#87ABCC",
    borderWidth: 0.5,
    marginVertical: 14,
  },
  selectorContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#18AFBA",
    borderRadius: 5,
  },
  searchButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 15,
  },
  dataTableContainer: {
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
    padding: 8,
    borderRadius: 8,
    borderColor: "#002A52",
    borderWidth: 1,
  },
  dataTableHeader: {
    color: "#002A52",
    fontFamily: "Manrope",
    fontWeight: "bold",
    fontSize: 14,
  },
  dataTableText: {
    color: "#1E1E1E",
    fontFamily: "Manrope",
    fontWeight: "400",
    fontSize: 13,
    width: "100%",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15,
  },
  exportRow: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  exportText: {
    color: "#002A52",
    fontSize: 16,
    fontFamily: "Manrope",
  },
  exportIcon: {
    width: 28,
    resizeMode: "contain",
  },
});

export default styles;
