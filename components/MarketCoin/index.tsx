import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
export interface MaketProps {
  data: {
    image: string;
    symbol: string;
    name: string;
    changing: number;
    valueUSD: number;
  };
}

const MaketCoin = (props: MaketProps) => {
  const {
    data: { image, symbol, name, changing, valueUSD },
  } = props;
  return (
    <View style={styles.root}>
      <View style={styles.leftPannel}>
        <Image style={styles.img} source={{ uri: image }}></Image>
        <View style={styles.leftText}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}> {symbol}</Text>
        </View>
      </View>
      <View style={styles.rightPannel}>
        <Text style={styles.valueUSD}>${valueUSD}</Text>
        <Text
          style={{
            color: changing > 0 ? "#199520" : "#df5454",
            fontSize: 12,
          }}
        >
          {changing > 0 && "+"} {changing}
        </Text>
      </View>
    </View>
  );
};

export default MaketCoin;
