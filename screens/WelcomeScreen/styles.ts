import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    padding: 20,
    alignItems: "center",
    height: "100%",
  },
  img: {
    width: "100%",
    height: "300px",
  },
  title: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: "6px",
    marginTop: "10px",
  },
  description: {
    textAlign: "center",
    marginTop: "10px",
  },
  btnWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    marginBottom: "50px",
    height: "80px",
    width: "80%",
  },
  btnLogin: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    padding: "12px",
  },
});

export default styles;
