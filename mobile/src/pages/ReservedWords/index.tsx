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

interface Language {
  id: number;
  name: string;
}
[];

const ReservedWords = () => {
  const [languages, setLanguages] = useState<Language[]>([]);

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
    setLanguages([
      { id: 1, name: "Linguagem Phyton" },
      { id: 2, name: "Linguagem C" },
      { id: 3, name: "Linguagem C++" },
      { id: 4, name: "Linguagem Java" },
    ]);
  }

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <View style={styles.container}>
      <Header drawerLabel="level1" />
      <SafeAreaView>
        <Text style={styles.subtitle}>Palavras Reservadas</Text>
        <FlatList
          data={languages}
          style={styles.tablList}
          keyExtractor={(language) => String(language.id)}
          showsVerticalScrollIndicator={false}
          onEndReached={loadEvents}
          onEndReachedThreshold={0.1}
          renderItem={({ item: language }) => (
            <TouchableOpacity
              style={styles.detailsButtom}
              key={language.id}
              // onPress={() => navigateToDetails(event)}
            >
              <Text style={styles.detailsButtomText}>{language.name}</Text>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
      <Footer />
    </View>
  );
};

export default ReservedWords;
