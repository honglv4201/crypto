import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    padding: "10px",
    width: "100%",
    alignItems: "center",
  },
  img: {
    width: "85%",
    height: "160px",
    alignSelf: "center",
  },
  titleBalance: {
    marginTop: "25px",
    marginLeft: "10px",
  },
  quantity: {
    marginLeft: "10px",
    marginTop: "10px",
    fontWeight: "bold",
    fontSize: 24,
  },
  flat: {
    width: "100%",
    paddingHorizontal: "12px",
    marginTop: "25px",
  },
  view: {
    marginBottom: "5px",
  },
});
export default styles;
