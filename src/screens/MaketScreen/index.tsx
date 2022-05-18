import { View, Text, FlatList, Image, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import MaketCoin from "../../components/MarketCoin";
const image = require("../../../assets/images/Saly-20.png");
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

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

const MarketScreen = () => {
  const navigator = useNavigation();
  return (
    <View style={styles.root}>
      <FlatList
        style={styles.flat}
        data={PortFolioCoins}
        renderItem={({ item }) => (
          <MaketCoin key={item.id} data={item}></MaketCoin>
        )}
        ListHeaderComponentStyle={styles.view}
        ListHeaderComponent={() => (
          <>
            <View style={styles.view}>
              <Image source={image} style={styles.img}></Image>
              <Text style={styles.market}>Market</Text>
            </View>
          </>
        )}
      ></FlatList>
    </View>
  );
};

export default MarketScreen;
