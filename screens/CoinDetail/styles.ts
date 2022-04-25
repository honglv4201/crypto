import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    width: "100%",
    marginTop: "6px",
    paddingHorizontal: "16px",
    paddingVertical: "8px",
    height: "100%",
  },
  topPannel: {
    width: "100%",
    marginTop: "6px",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "16px",
    paddingVertical: "8px",
    borderRadius: 6,
  },
  leftPannel: {
    flexDirection: "row",
  },
  leftText: {
    marginLeft: "10px",
    marginTop: "5px",
    justifyContent: "flex-start",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: "6px",
  },
  symbol: {
    color: "#666666",
  },
  valueUSD: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: "6px",
  },
  amount: {},
  img: {
    width: "50px",
    height: "50px",
  },
  rightPannel: {
    flexDirection: "column",
    alignItems: "center",
  },
  watch_star: {
    color: "#3987BF",
  },

  // pannel middle
  middlePannel: {
    paddingLeft: "14px",
    paddingRight: "14px",

    marginTop: "20px",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  changePannel: {
    flexDirection: "row",
  },
  session: {
    marginLeft: "14px",
  },
  txt_title: {
    marginBottom: "6px",
    color: "#333333",
    fontSize: 13,
  },
  valueChange: {
    fontSize: 14,
    color: "#009900",
    fontWeight: "bold",
  },
  bottomPannel: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    marginBottom: "80px",
  },
  btnPannel: {
    flexDirection: "row",
    justifyContent: "center",
  },
  btnWrapper: {
    paddingHorizontal: "24px",
    paddingVertical: "12px",
    textAlign: "center",
    textTransform: "uppercase",
    width: "170px",
    borderRadius: 15,
  },
  btnWrapperBuy: {
    backgroundColor: "#009900",
    marginRight: "10px",
  },
  btnWrapperSell: {
    backgroundColor: "#CC0000",
  },
  btn: {
    color: "white",
    fontWeight: "bold",
  },
  chart: {
    width: "90%",
    alignSelf: "center",
    marginRight: "30px",
  },
});
export default styles;
