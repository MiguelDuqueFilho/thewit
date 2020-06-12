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

  header: {
    flexDirection: "row",
    backgroundColor: "#544F4C",
    justifyContent: "space-between",
    alignItems: "center",
    height: headerHeigthSize,
  },
  title: {
    color: "#AB8937",
    paddingLeft: 20,
    fontSize: 36,
    fontWeight: "bold",
    textShadowColor: "#000",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 10,
  },
  icon: {
    color: "#AB8937",
    fontSize: 36,
    paddingRight: 20,
    textShadowColor: "#000",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 10,
  },
  footer: {
    flexDirection: "row",
    backgroundColor: "#544F4C",
    justifyContent: "space-between",
    alignItems: "center",
    height: headerHeigthSize,
  },
  iconFooter: {
    color: "#AB8937",
    fontSize: 36,
    paddingLeft: 20,
    textShadowColor: "#000",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 10,
  },
  textFooter: {
    color: "#AB8937",
    paddingRight: 15,
    fontSize: 18,
    fontFamily: "Roboto_400Regular",
    textShadowColor: "#000",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 10,
  },
});
