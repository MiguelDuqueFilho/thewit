import React from "react";
import { View, Text, ImageBackground } from "react-native";

import Header from "../Header";
import Footer from "../Footer";

import styles from "./styles";

const About = () => {
  return (
    <>
      <View style={styles.container}>
        <Header drawerLabel="level1" />
        <ImageBackground
          source={require("../../assets/img/banner1.png")}
          style={styles.container}
          imageStyle={styles.imageBackground}
        ></ImageBackground>
        <Text style={styles.text}>
          Somos um grupo de pessoas connectadas pelo propósito de trasnformar o
          relacionamento digital das instituições com seus clientes e
          colaboradores, atravéz de tecnologia e humanização
        </Text>
        <Footer />
      </View>
    </>
  );
};

export default About;
