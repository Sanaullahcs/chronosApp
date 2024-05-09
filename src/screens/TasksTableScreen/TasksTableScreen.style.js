import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tabButton: {
    padding: 6,
    borderRadius: 48,
    width: "39%",
    fontWeight: "600",
    fontSize: 15,
  },
  tabButtonRow: {
    display: "flex",
    flexDirection: "row",
    marginRight: "auto",
    marginLeft: "auto",
    gap: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  verticalDividerForTabsButton: {
    borderColor: "#FFFFFF",
    borderWidth: 0.5,
    height: "100%",
  },
  tableContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 20,
  },
  filterRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectorContainer: {
    backgroundColor: "#fff",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#C6C6C6",
    padding: 5,
    width: "70%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  dataTable: {
    borderColor: "#C6C6C6",
    borderWidth: 0.5,
  },
  tableText: {
    fontWeight: "500",
    fontSize: 13,
    color: "#002A52",
  },
  editIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginLeft: "75%",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    backgroundColor: "#18AFBA",
    borderRadius: 48,
    paddingHorizontal: 10,
    paddingVertical: 3,
    paddingBottom: 5,
    marginLeft: 10,
  },
  buttonText: {
    fontFamily: "Manrope",
    fontSize: 13,
    fontWeight: "500",
    color: "#fff",
  },
  editInputBox: {
    borderWidth: 1,
    borderColor: "#18AFBA",
    width: 20,
    height: 20,
    borderRadius: 4,
    padding: 2,
  },
});

export default styles;
export const chevronIcon = {
  width: 20,
  height: 20,
};
