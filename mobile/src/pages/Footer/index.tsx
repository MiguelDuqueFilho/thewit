import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { MaterialIcons as Icon, Feather as IconFi } from "@expo/vector-icons";

import styles from "./styles";

const Footer: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      >
        <Icon
          style={styles.iconFooter}
          name="copyright"
          size={36}
          color="#AB8937"
        ></Icon>
      </TouchableOpacity>
      <Text style={styles.textFooter}>Todos os direitos reservados</Text>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      >
        <IconFi
          style={styles.icon}
          name="facebook"
          size={36}
          color="#AB8937"
        ></IconFi>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      >
        <IconFi
          style={styles.icon}
          name="arrow-right-circle"
          size={36}
          color="#AB8937"
        ></IconFi>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
