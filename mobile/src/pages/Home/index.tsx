import React from "react";
import { View, ImageBackground } from "react-native";

import Header from "../Header";
import Footer from "../Footer";

import styles from "./styles";

const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <Header drawerLabel="home" />
        <ImageBackground
          source={require("../../assets/img/home.png")}
          style={styles.container}
          imageStyle={styles.imageBackground}
        ></ImageBackground>
        <Footer />
      </View>
    </>
  );
};

export default Home;
