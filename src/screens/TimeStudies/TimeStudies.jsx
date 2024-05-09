import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./TimeStudies.style";
import BackNavigationHeader from "../../components/BackNavigationHeader/BackNavigationHeader";
import * as Icon from "react-native-feather";
import { SegmentedButtons } from "react-native-paper";
import { DataTable } from "react-native-paper";
const TimeStudies = () => {
  const [value, setValue] = useState("");
  const [selectedTab, setSelectedTab] = useState("Quarter");
  const Button = ({ title }) => (
    <TouchableOpacity
      style={{
        backgroundColor: selectedTab === title ? "#18AFBA" : "#294E70",
        padding: 10,
        borderRadius: 5,
        width: "50%",
        fontWeight: "600",
        fontSize: 15,
      }}
      onPress={() => setSelectedTab(title)}
    >
      <Text style={{ color: selectedTab === title ? "#FFFFFF" : "#FFFFFF" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([4]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0]
  );

  const [items] = React.useState([
    {
      key: 1,
      name: "123",
      calories: "Future of Time Study",
      fat: "12-12-2024 | 00:00:00",
    },
    {
      key: 2,
      name: "321",
      calories: "Future of Time Study",
      fat: "12-12-2024 | 00:00:00",
    },
    {
      key: 3,
      name: "431",
      calories: "Future of Time Study",
      fat: "12-12-2024 | 00:00:00",
    },
    {
      key: 4,
      name: "2312",
      calories: "Future of Time Study",
      fat: "12-12-2024 | 00:00:00",
    },
    {
      key: 5,
      name: "2312",
      calories: "Future of Time Study",
      fat: "12-12-2024 | 00:00:00",
    },
    {
      key: 6,
      name: "2312",
      calories: "Future of Time Study",
      fat: "12-12-2024 | 00:00:00",
    },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <ScrollView>
      <BackNavigationHeader title="Time Studies" />
      <TouchableOpacity style={styles.titleRow}>
        <Text style={styles.title}>Outstanding Records</Text>
        <Icon.ChevronDown size={18} color="#18AFBA" />
      </TouchableOpacity>

      {/* start search filter---------------------------------------- */}
      <View style={styles.searchFilterContainer}>
        <View style={styles.segmentedButtonRow}>
          <Button title="Quarter" />
          <Button title="Fiscal Year" />
        </View>
        <View style={styles.divider}></View>

        {/* start selector------------------------------------------- */}
        <View style={styles.selectorContainer}>
          {/* <TextInput style={styles.selectorInput} placeholder="--All--" /> */}
          <Text style={{ opacity: 0.5 }}>--All--</Text>
          <Icon.ChevronDown size={18} color="#002A52" />
        </View>
        {/* end selector------------------------------------------- */}
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      {/* end search filter---------------------------------------- */}

      {/* start data table----------------------------------------------- */}
      <DataTable>
        <View style={styles.dataTableContainer}>
          <DataTable.Header>
            <DataTable.Title>
              <Text style={styles.dataTableHeader}>ID</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={styles.dataTableHeader}>Time Study</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={styles.dataTableHeader}>Period (Start Date)</Text>
            </DataTable.Title>
          </DataTable.Header>

          {items.slice(from, to).map((item) => (
            <DataTable.Row key={item.key}>
              <DataTable.Cell style={{ width: "20%" }}>
                <Text style={[styles.dataTableText]}>{item.name}</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={[styles.dataTableText, { marginRight: "50%" }]}>
                  {item.calories}
                </Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.dataTableText}> {item.fat}</Text>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </View>

        <View style={styles.row}>
          <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(items.length / itemsPerPage)}
            onPageChange={(page) => setPage(page)}
            label={`${from + 1}-${to} of ${items.length}`}
            // numberOfItemsPerPageList={numberOfItemsPerPageList}
            numberOfItemsPerPage={5}
            // onItemsPerPageChange={onItemsPerPageChange}
            // selectPageDropdownLabel={"Rows per page"}
          />
          <TouchableOpacity style={styles.exportRow}>
            <Image
              source={require("../../../assets/icons/TasksTable/ExportIcon.png")}
              style={styles.exportIcon}
            />
            <Text style={styles.exportText}>Export</Text>
          </TouchableOpacity>
        </View>
      </DataTable>

      {/* end data table----------------------------------------------- */}
    </ScrollView>
  );
};

export default TimeStudies;
