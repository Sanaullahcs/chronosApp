import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import styles, { chevronIcon } from "./TasksTableScreen.style";
import { useRoute } from "@react-navigation/native";
import BackNavigationHeaderBlueColor from "../../components/BackNavigationHeaderBlueColor/BackNavigationHeaderBlueColor";
import * as Icon from "react-native-feather";
import { DataTable } from "react-native-paper";
const TasksTableScreen = () => {
  const [selectedTab, setSelectedTab] = useState("Pre-Tansplant Time");
  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([4, 5, 6]);

  const Button = ({ title }) => (
    <TouchableOpacity
      style={[
        styles.tabButton,
        { backgroundColor: selectedTab === title ? "#18AFBA" : null },
      ]}
      onPress={() => setSelectedTab(title)}
    >
      <Text style={{ color: selectedTab === title ? "#FFFFFF" : "#87ABCC" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  const route = useRoute();
  const task = route.params?.task;
  console.log(task, "task------------------------------");

  //   start table----------------------------------------------
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0]
  );

  const [items, setItems] = useState([
    { key: 1, day: "May 13", fat: "02:00 hrs - 30 mins", isEditing: false },
    { key: 2, day: "May 13", fat: "02:00 hrs - 30 mins", isEditing: false },
    { key: 3, day: "May 13", fat: "02:00 hrs - 30 mins", isEditing: false },
    { key: 4, day: "May 13", fat: "02:00 hrs - 30 mins", isEditing: false },
    { key: 5, day: "May 13", fat: "02:00 hrs - 30 mins", isEditing: false },
    { key: 6, day: "May 13", fat: "02:00 hrs - 30 mins", isEditing: false },
  ]);

  const handleEdit = (index) => {
    const updatedItems = items.map((item, i) => {
      if (i === index) {
        return { ...item, isEditing: !item.isEditing };
      } else {
        return { ...item, isEditing: false }; // Close other rows
      }
    });
    setItems(updatedItems);
  };
  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  const handelEdit = () => {};
  //   end table----------------------------------------------

  return (
    <ScrollView style={{ backgroundColor: "#002A52", height: "100%" }}>
      <BackNavigationHeaderBlueColor title={task} />

      {/* start tab button---------------------------  */}
      <View style={styles.tabButtonRow}>
        <TouchableOpacity>
          <Icon.ChevronLeft
            width={chevronIcon.width}
            height={chevronIcon.height}
            color="#FFFFFF"
          />
        </TouchableOpacity>
        <Button title="Pre-Tansplant Time" />
        <View style={styles.verticalDividerForTabsButton}></View>
        <Button title="Post-Tansplant Time" />
        <TouchableOpacity>
          <Icon.ChevronRight
            width={chevronIcon.width}
            height={chevronIcon.height}
            color="#FFFFFF"
          />
        </TouchableOpacity>
      </View>
      {/* end tab button---------------------------  */}

      {/* START TABLE SECTION------------------------------------- */}
      <View style={styles.tableContainer}>
        {/* start filter and export ------------------------------- */}
        <View style={styles.filterRow}>
          <TouchableOpacity style={styles.selectorContainer}>
            <TextInput
              style={styles.selector}
              placeholder="-- Select Task --"
            />
            <Icon.ChevronDown
              width={chevronIcon.width}
              height={chevronIcon.height}
              color="#002A52"
              style={styles.selectorIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.exportRow}>
            <Image
              source={require("../../../assets/icons/TasksTable/ExportIcon.png")}
              style={styles.exportIcon}
            />
            <Text style={styles.exportText}>Export</Text>
          </TouchableOpacity>
        </View>
        {/* end filter and export ------------------------------- */}

        {/* start table--------------------------------------- */}
        <DataTable style={styles.dataTable}>
          {items.map((item, index) => (
            <DataTable.Row key={item.key}>
              <DataTable.Cell>
                <View>
                  <Text
                    style={[
                      styles.tableText,
                      { fontWeight: "700" },
                      { fontSize: 16 },
                    ]}
                  >
                    {"T"}
                  </Text>
                  <Text style={styles.tableText}>{item.day}</Text>
                </View>
              </DataTable.Cell>
              <DataTable.Cell>
                {item.isEditing ? (
                  <View style={[styles.row, { gap: 3 }]}>
                    <View style={styles.editInputBox}>
                      <TextInput style={styles.input} maxLength={2} />
                    </View>
                    <Text style={[styles.tableText, { marginLeft: "2%" }]}>
                      hrs
                    </Text>
                    <View style={styles.editInputBox}>
                      <TextInput style={styles.input} maxLength={2} />
                    </View>
                    <Text style={[styles.tableText, { marginLeft: "2%" }]}>
                      mins
                    </Text>
                  </View>
                ) : (
                  <Text
                    style={[
                      styles.tableText,
                      { marginLeft: "5%" },
                      { width: "120%" },
                    ]}
                  >
                    {item.fat}
                  </Text>
                )}
              </DataTable.Cell>
              <DataTable.Cell>
                <TouchableOpacity onPress={() => handleEdit(index)}>
                  <Image
                    source={require("../../../assets/icons/TasksTable/EditIcon.png")}
                    style={styles.editIcon}
                  />
                </TouchableOpacity>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
          <DataTable.Row>
            <DataTable.Cell>
              <Text
                style={[
                  styles.tableText,
                  { fontWeight: "700" },
                  { fontSize: 16 },
                ]}
              >
                Total:
              </Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text
                style={[
                  styles.tableText,
                  { fontWeight: "700" },
                  { fontSize: 16 },
                ]}
              >
                {"12 Hours"}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </DataTable.Cell>
            <DataTable.Cell>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Hold</Text>
              </TouchableOpacity>
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
        {/* end table--------------------------------------- */}
      </View>
      {/* END TABLE SECTION------------------------------------- */}
    </ScrollView>
  );
};

export default TasksTableScreen;
