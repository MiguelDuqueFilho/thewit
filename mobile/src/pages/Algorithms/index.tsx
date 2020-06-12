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

interface Algoritmo {
  id: number;
  name: string;
}
[];

const Algoritms = () => {
  const [algoritmos, setAlgoritmos] = useState<Algoritmo[]>([]);

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
    setAlgoritmos([
      { id: 1, name: "Algoritmo PageRank" },
      { id: 2, name: "Algoritmo EdgeRank" },
      { id: 3, name: "Algoritmo de Gale-Shapley" },
      { id: 4, name: "Algoritmo de Luhn" },
      { id: 5, name: "Algoritmo Bubble Sort" },
    ]);
  }

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <View style={styles.container}>
      <Header drawerLabel="level1" />
      <View>
        <Text style={styles.subtitle}>Algoritmos</Text>
      </View>
      <SafeAreaView>
        <FlatList
          data={algoritmos}
          style={styles.tablList}
          keyExtractor={(algoritmo) => String(algoritmo.id)}
          showsVerticalScrollIndicator={false}
          onEndReached={loadEvents}
          onEndReachedThreshold={0.1}
          renderItem={({ item: algoritmo }) => (
            <TouchableOpacity
              style={styles.detailsButtom}
              key={algoritmo.id}
              // onPress={() => navigateToDetails(event)}
            >
              <Text style={styles.detailsButtomText}>{algoritmo.name}</Text>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
      <Footer />
    </View>
  );
};

export default Algoritms;
