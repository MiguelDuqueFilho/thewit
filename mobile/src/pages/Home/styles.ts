import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";
export const window = Dimensions.get("window");
const headerHeigthSize = 60;
const footerHeigthSize = 60;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#544F4C",
  },

  imageBackground: {
    width: window.width,
    height:
      window.height -
      headerHeigthSize -
      footerHeigthSize -
      Constants.statusBarHeight,
    paddingHorizontal: 20,
  },
});
