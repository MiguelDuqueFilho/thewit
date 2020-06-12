import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Algoritms from "./pages/Algorithms";
import ReservedWords from "./pages/ReservedWords";
import TableAscii from "./pages/TableAscii";
import About from "./pages/About";
import Contact from "./pages/Contact";

const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: "#AF9A69",
          width: 240,
        }}
        drawerContentOptions={{
          activeTintColor: "#fff",
          inactiveTintColor: "#453D2B",
        }}
        overlayColor="transparent"
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Tabelas" component={Tables} />
        <Drawer.Screen name="Tabela Ascii" component={TableAscii} />
        <Drawer.Screen name="Algoritmos" component={Algoritms} />
        <Drawer.Screen name="Palavras Reservadas" component={ReservedWords} />
        <Drawer.Screen name="Sobre nós" component={About} />
        <Drawer.Screen name="Contato" component={Contact} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
