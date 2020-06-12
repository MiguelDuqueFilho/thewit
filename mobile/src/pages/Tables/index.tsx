import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import Header from "../Header";
import Footer from "../Footer";

import styles from "./styles";

interface Tabela {
  id: number;
  name: string;
  title: string;
}
[];

const Tables = () => {
  const [tables, setTables] = useState<Tabela[]>([]);

  const navigation = useNavigation();

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
      { id: 1, name: "Asc II", title: "Tabela Ascii" },
      { id: 2, name: "Cores HTML", title: "Tabela Ascii" },
      { id: 3, name: "Conversão de Pixels", title: "Tabela Ascii" },
      { id: 4, name: "Códigos de estado HTML", title: "Tabela Ascii" },
    ]);
  }

  useEffect(() => {
    loadEvents();
  }, []);

  function handleNavigateTo(table: Tabela) {
    navigation.navigate(table.title);
  }
  return (
    <View style={styles.container}>
      <Header drawerLabel="level1" />
      <View>
        <Text style={styles.subtitle}>Tabelas</Text>
      </View>
      <SafeAreaView>
        <FlatList
          data={tables}
          style={styles.tablList}
          keyExtractor={(table) => String(table.id)}
          showsVerticalScrollIndicator={false}
          onEndReached={loadEvents}
          onEndReachedThreshold={0.1}
          renderItem={({ item: table }) => (
            <>
              <TouchableOpacity
                style={styles.detailsButtom}
                key={table.id}
                onPress={() => handleNavigateTo(table)}
              >
                <Text style={styles.detailsButtomText}>{table.name}</Text>
              </TouchableOpacity>
            </>
          )}
        />
      </SafeAreaView>
      <Footer />
    </View>
  );
};

export default Tables;
