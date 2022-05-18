import { View, Text, FlatList, Image, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import MaketCoin from "../../components/MarketCoin";
import { AntDesign } from "@expo/vector-icons";
import CoinPriceGraph from "../../components/coinPriceGraph";
import { useNavigation } from "@react-navigation/native";
const image = require("../../../assets/images/Saly-20.png");

const PortFolioCoins = [
  {
    id: "1",
    name: "Virual Coin",
    symbol: "USD",
    image:
      "https://i.pinimg.com/originals/e1/05/e9/e105e92bcab722fb8c8a98557d83873b.jpg",
    changing: 2.42,
    valueUSD: 21.34,
  },
  {
    id: "2",
    name: "Bit Coin",
    symbol: "BTC",
    image:
      "https://i.pinimg.com/originals/e1/05/e9/e105e92bcab722fb8c8a98557d83873b.jpg",
    changing: -3.5,
    valueUSD: 42.34,
  },
  {
    id: "3",
    name: "Etherium",
    symbol: "ET",
    image:
      "https://i.pinimg.com/originals/e1/05/e9/e105e92bcab722fb8c8a98557d83873b.jpg",
    changing: 1.32,
    valueUSD: 221.34,
  },
];

const CoinDetail = () => {
  const [coinData, setCoinData] = React.useState({
    id: 1,
    name: "BitCoin",
    image:
      "https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/bitcoin-icon.png",
    symbol: "BTC",
    valueChange1H: 0.32,
    valueChange1D: -0.17,
    valueChange7D: 0.13,
    currentPrice: 34234,
    amount: 2,
  });

  // handle button

  const navigation = useNavigation();
  const handleBuy = () => {
    navigation.navigate("CoinExchange", { isBuy: true, coinData });
  };

  const handleSell = () => {
    navigation.navigate("CoinExchange", { isBuy: false, coinData });
    console.warn("sell");
  };
  const dataString = JSON.stringify([20, 45, 28, 80, 99, 43]);
  return (
    <View style={styles.root}>
      <View style={styles.topPannel}>
        <View style={styles.leftPannel}>
          <Image style={styles.img} source={{ uri: coinData.image }}></Image>
          <View style={styles.leftText}>
            <Text style={styles.name}>{coinData.name}</Text>
            <Text style={styles.symbol}> {coinData.symbol}</Text>
          </View>
        </View>
        <View style={styles.rightPannel}>
          <AntDesign
            style={styles.watch_star}
            name="star"
            size={24}
            color="black"
          />
          <Text>Watch</Text>
        </View>
      </View>
      <View style={styles.chart}>
        <CoinPriceGraph dataString={dataString} />
      </View>
      <View style={styles.middlePannel}>
        <View>
          <Text style={styles.txt_title}>Current prices</Text>
          <Text style={styles.valueUSD}>${coinData.currentPrice}</Text>
        </View>

        <View style={styles.changePannel}>
          <View style={styles.session}>
            <Text style={styles.txt_title}>1 hour</Text>
            <Text
              style={[
                styles.valueChange,
                coinData.valueChange1H > 0
                  ? {
                      color: "#009900",
                    }
                  : { color: "#CC0000" },
              ]}
            >
              {coinData.valueChange1H > 0 ? "+" : ""} {coinData.valueChange1H}
            </Text>
          </View>
          <View style={styles.session}>
            <Text style={styles.txt_title}>1 day</Text>
            <Text
              style={[
                styles.valueChange,
                coinData.valueChange1D > 0
                  ? {
                      color: "#009900",
                    }
                  : { color: "#CC0000" },
              ]}
            >
              {coinData.valueChange1D > 0 ? "+" : ""} {coinData.valueChange1D}
            </Text>
          </View>
          <View style={styles.session}>
            <Text style={styles.txt_title}>7 days</Text>
            <Text
              style={[
                styles.valueChange,
                coinData.valueChange7D > 0
                  ? {
                      color: "#009900",
                    }
                  : { color: "#CC0000" },
              ]}
            >
              {coinData.valueChange7D > 0 ? "+" : ""}
              {coinData.valueChange7D}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.middlePannel}>
        <Text>Position</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ marginLeft: "6px" }}>{coinData.symbol}</Text>
          <Text style={{ marginLeft: "6px" }}>1</Text>
          <Text style={{ marginLeft: "6px" }}> ${coinData.valueUSD}</Text>
        </View>
      </View>

      <View style={styles.bottomPannel}>
        <View style={styles.btnPannel}>
          <Pressable
            style={[styles.btnWrapper, styles.btnWrapperBuy]}
            onPress={handleBuy}
          >
            <Text style={[styles.btn]}>Buy </Text>
          </Pressable>{" "}
          <Pressable
            style={[styles.btnWrapper, styles.btnWrapperSell]}
            onPress={handleSell}
          >
            <Text style={[styles.btn]}>Sell </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CoinDetail;
