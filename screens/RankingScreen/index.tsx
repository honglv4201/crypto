import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import styles from "./styles";
import PortFolioCoin from "../../components/PortFolioCoin";
import RankingItem from "../../components/RakingItem";
const image = require("../../assets/images/Saly-10.png");

const PortFolioCoins = [
  {
    id: "1",
    name: "LamHongnss",
    image:
      "https://i.pinimg.com/originals/e1/05/e9/e105e92bcab722fb8c8a98557d83873b.jpg",
    amount: 33.23,
  },
  {
    id: "2",
    name: "Thisthat Coin",
    image:
      "https://i.pinimg.com/originals/e1/05/e9/e105e92bcab722fb8c8a98557d83873b.jpg",
    amount: 33.23,
  },
  {
    id: "3",
    name: "Mezzz Lys",
    image:
      "https://i.pinimg.com/originals/e1/05/e9/e105e92bcab722fb8c8a98557d83873b.jpg",
    amount: 33.23,
  },
];

const RankingScreen = () => {
  return (
    <View style={styles.root}>
      <FlatList
        style={styles.flat}
        data={PortFolioCoins}
        renderItem={({ item, index }) => (
          <RankingItem key={item.id} data={item} place={index}></RankingItem>
        )}
        ListHeaderComponentStyle={styles.view}
        ListHeaderComponent={() => (
          <>
            <View style={styles.view}>
              <Image source={image} style={styles.img}></Image>
              <Text style={styles.titleRaking}>Ranking</Text>
            </View>
          </>
        )}
      ></FlatList>
    </View>
  );
};

export default RankingScreen;
