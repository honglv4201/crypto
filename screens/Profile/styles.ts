import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    marginTop: "10px",
    alignItems: "center",
    flex: 1,
  },
  root2: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  card: {
    width: "100%",
    paddingLeft: "30px",
    paddingRight: "30px",
    flexDirection: "row",
    marginTop: "20px",
    justifyContent: "space-between",
  },
  infoWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    width: "70%",
    height: "100px",
  },
  avatar: {
    width: "50px",
    height: "50px",
    borderRadius: 25,
  },
  nameWrapper: {
    marginLeft: "15px",
  },
  name: {
    marginBottom: "6px",
    fontWeight: "bold",
    fontSize: 16,
  },
  email: {
    fontSize: 14,
    opacity: 0.5,
  },
  netWordth: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
  btn_wrapper: {
    marginBottom: "30px",
    paddingHorizontal: "20px",
    paddingVertical: "10px",
    backgroundColor: "#3366CC",
    borderRadius: 5,
  },

  btn: {
    color: "white",
  },
  hoverx: {
    color: "#3366CC",
    backgroundColor: "white",
    borderColor: "#3366CC",
  },
});
export default styles;
