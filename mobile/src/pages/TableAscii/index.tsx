import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import Header from "../Header";
import Footer from "../Footer";

import styles from "./styles";

interface Tabela {
  id: number;
  name: string;
}
[];

const TableAscii = () => {
  const [tables, setTables] = useState<Tabela[]>([]);

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
    setTables([
      { id: 1, name: "Asc II" },
      { id: 2, name: "Cores HTML" },
      { id: 3, name: "Conversão de Pixels" },
      { id: 4, name: "Códigos de estado HTML" },
    ]);
  }

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <View style={styles.container}>
      <Header drawerLabel="level2" />
      <SafeAreaView style={styles.safeAreaView}>
        <Text style={styles.subtitle}>Tabelas Ascii</Text>

        <FlatList
          data={tables}
          style={styles.tablList}
          keyExtractor={(table) => String(table.id)}
          showsVerticalScrollIndicator={false}
          onEndReached={loadEvents}
          onEndReachedThreshold={0.1}
          renderItem={({ item: table }) => (
            <TouchableOpacity
              style={styles.detailsButtom}
              key={table.id}
              // onPress={() => navigateToDetails(event)}
            >
              <Text style={styles.detailsButtomText}>{table.name}</Text>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
      <Footer />
    </View>
  );
};

export default TableAscii;
