import { View, Text, Image, FlatList, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import PortFolioCoin from "../../components/PortFolioCoin";
import { useNavigation } from "@react-navigation/native";
const image = require("../../assets/images/Saly-10.png");

const PortFolioCoins = [
  {
    id: "1",
    name: "Virual Coin",
    symbol: "USD",
    image:
      "https://i.pinimg.com/originals/e1/05/e9/e105e92bcab722fb8c8a98557d83873b.jpg",
    amount: 33.23,
    valueUSD: 21.34,
  },
  {
    id: "2",
    name: "Bit Coin",
    symbol: "BTC",
    image:
      "https://i.pinimg.com/originals/e1/05/e9/e105e92bcab722fb8c8a98557d83873b.jpg",
    amount: 2.534,
    valueUSD: 42.34,
  },
  {
    id: "3",
    name: "Etherium",
    symbol: "ET",
    image:
      "https://i.pinimg.com/originals/e1/05/e9/e105e92bcab722fb8c8a98557d83873b.jpg",
    amount: 13.5,
    valueUSD: 221.34,
  },
];

const PortFolioScreen = () => {
  return (
    <View style={styles.root}>
      <FlatList
        style={styles.flat}
        data={PortFolioCoins}
        renderItem={({ item }) => (
          <PortFolioCoin key={item.id} data={item}></PortFolioCoin>
        )}
        ListHeaderComponentStyle={styles.view}
        ListHeaderComponent={() => (
          <>
            <View style={styles.view}>
              <Image source={image} style={styles.img}></Image>
              <Text style={styles.titleBalance}>PortFolio Balance</Text>
              <Text style={styles.quantity}>$325.000</Text>
            </View>
          </>
        )}
      ></FlatList>
    </View>
  );
};

export default PortFolioScreen;
