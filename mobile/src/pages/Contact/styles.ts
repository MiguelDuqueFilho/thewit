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
  subtitle: {
    textAlign: "center",
    color: "#4C4B49",
    marginBottom: 30,
    width: window.width,
    fontSize: 30,
    textShadowColor: "#333",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
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
  form: {
    position: "absolute",
    width: "100%",
    paddingTop: Constants.statusBarHeight + 30,
    flex: 1,
    paddingHorizontal: 30,
    alignItems: "center",
  },

  input: {
    height: 60,
    width: "100%",
    backgroundColor: "#DFDBDA",
    color: "#96918F",
    fontSize: 24,
    borderRadius: 15,
    marginBottom: 20,
    paddingHorizontal: 30,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    elevation: 2,
  },
  inputArea: {
    height: 200,
    width: "100%",
    backgroundColor: "#DFDBDA",
    color: "#96918F",
    fontSize: 24,
    borderRadius: 15,
    marginBottom: 10,
    paddingHorizontal: 30,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    elevation: 2,
  },

  button: {
    width: "48%",
    backgroundColor: "#DFDBDA",
    borderRadius: 10,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    marginLeft: 8,
    color: "#000",
    fontSize: 22,
    fontFamily: "Roboto_500Medium",
  },
});
