import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { useIsDrawerOpen } from "@react-navigation/drawer";

import styles from "./styles";

interface Params {
  drawerLabel: string;
}

const Header = ({ drawerLabel }: Params) => {
  const [label, setlabel] = useState("");
  const navigation = useNavigation();
  const isDrawerOpen = useIsDrawerOpen();

  function handleNavigate() {
    if (label === "home") {
      navigation.dispatch(DrawerActions.toggleDrawer());
      return;
    }
    if (label === "level1") {
      navigation.dispatch(DrawerActions.jumpTo("Home"));
    } else {
      navigation.goBack();
    }
  }

  useEffect(() => {
    setlabel(drawerLabel);
  }, []);

  return (
    <View style={styles.header}>
      <Text style={styles.title}>The wit</Text>
      <TouchableOpacity onPress={handleNavigate}>
        <Icon
          style={styles.icon}
          name={
            label === "home"
              ? isDrawerOpen
                ? "clear"
                : "menu"
              : label === "level1"
              ? "home"
              : "chevron-left"
          }
          size={36}
          color="#AB8937"
        ></Icon>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
