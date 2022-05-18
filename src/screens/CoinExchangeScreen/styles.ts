import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    marginTop: "18px",
    height: "100%",
    alignItems: "center",
  },
  mainTitle: {
    textTransform: "uppercase",
    fontSize: 15,
    fontWeight: "bold",
  },
  changeValue: {
    marginTop: "8px",
  },
  img: {
    width: "200px",
    height: "200px",
  },
  middleKey: {
    fontWeight: "bold",
    fontSize: 20,
    marginHorizontal: "20px",
  },
  inputsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "15px",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: "10px",
    borderWidth: 1,
    borderColor: "#b1b1b1",
    borderRadius: 3,
  },
  textInput: {
    width: "80px",
    borderColor: "#fff",
    borderWidth: 0,
    fontSize: 16,
  },

  btnWrapper: {
    marginTop: "auto",
    width: "80%",
    justifyContent: "flex-end",
    backgroundColor: "#0097ff",
    padding: "20px",
    borderRadius: 10,
    marginHorizontal: "10px",
  },
  btn: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
  bottomPannel: {
    marginBottom: "80px",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default styles;
