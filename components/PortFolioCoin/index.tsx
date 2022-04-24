import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
export interface PortFolioCoinProps {
  data: {
    image: string;
    symbol: string;
    name: string;
    amount: number;
    valueUSD: number;
  };
}

const PortFolioCoin = (props: PortFolioCoinProps) => {
  const {
    data: { image, symbol, name, amount, valueUSD },
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
        <Text style={styles.amount}>
          {symbol} {amount}
        </Text>
      </View>
    </View>
  );
};

export default PortFolioCoin;
