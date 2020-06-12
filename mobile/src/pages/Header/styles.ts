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
  subtitle: {
    textAlign: "center",
    color: "#544F4C",
    backgroundColor: "#B8B7B3",
    width: window.width,
    fontSize: 36,
    textShadowColor: "#333",
    textShadowOffset: { width: -1, height: -1 },
    textShadowRadius: 10,
    paddingVertical: 15,
  },
  tablList: {
    // flexDirection: "row",
    backgroundColor: "#B8B7B3",
    width: window.width,
    height:
      window.height -
      headerHeigthSize -
      footerHeigthSize -
      Constants.statusBarHeight -
      75,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  detailsButtom: {
    marginBottom: 15,
    backgroundColor: "#AF9A69",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
    height: 50,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2,
  },
  detailsButtomText: {
    fontSize: 24,
    color: "#544F4C",
  },
});
