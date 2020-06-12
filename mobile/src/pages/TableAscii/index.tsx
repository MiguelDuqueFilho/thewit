import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

import Header from "../Header";
import Footer from "../Footer";

import styles from "./styles";

const TableAscii = () => {
  const [tableHeader, setTableHeader] = useState<
    [String, String, String, String, String]
  >();
  const [tableData, setTableData] = useState<
    [Number, String, String, String, String][]
  >([]);

  async function loadEvents() {
    // if (loading) return;
    // if (total > 0 && events.length === total) return;
    // setLoading(true);
    // console.log(user.token);
    // const response = await api.get(`/events?page=${page + 1}&limit=5`, {
    // headers: {
    // Autorization: `Bearer ${user.token}`,
    // },
    // });
    // setEvents([...tables, ...response.data.data.docs]);
    // setTotal(response.data.data.total);
    // setPage(response.data.data.page);
    // setLoading(false);
    function dec2bin(dec: number) {
      return dec >= 0 ? dec.toString(2) : (~dec).toString(2);
    }

    function dec2hexString(dec: number) {
      return "0x" + (dec + 0x100).toString(16).substr(-4).toUpperCase();
    }
    const linhas: [Number, String, String, String, String][] = [];
    for (let i = 0; i < 256; i++) {
      linhas[i] = [
        i,
        dec2hexString(i),
        String.fromCharCode(i),
        dec2bin(i),
        encodeURI(String.fromCharCode(i)),
      ];
    }
    setTableHeader(["Decimal", "Hexa", "Char", "Binário", "UriEncode"]);
    setTableData(linhas);
  }

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <View style={styles.container}>
      <Header drawerLabel="level2" />
      <View>
        <Text style={styles.subtitle}>Tabelas Ascii</Text>
      </View>
      <SafeAreaView>
        <ScrollView style={styles.tablList}>
          <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
            <Row
              data={tableHeader}
              style={styles.head}
              textStyle={styles.text}
            />
            <Rows data={tableData} textStyle={styles.text} />
          </Table>
        </ScrollView>
      </SafeAreaView>
      <Footer />
    </View>
  );
};

export default TableAscii;
