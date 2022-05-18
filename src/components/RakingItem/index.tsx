import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
export interface RankingProps {
  data: {
    image: string;
    name: string;
    amount: number;
  };
  place: number;
}

const RankingItem = (props: RankingProps) => {
  const {
    data: { image, name, amount },
    place,
  } = props;
  return (
    <View style={styles.root}>
      <View style={styles.leftPannel}>
        <Text style={styles.place}>{place}</Text>
        <Image style={styles.img} source={{ uri: image }}></Image>
        <View style={styles.leftText}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
      <View style={styles.rightPannel}>
        <Text style={styles.amount}>{amount}</Text>
      </View>
    </View>
  );
};

export default RankingItem;
