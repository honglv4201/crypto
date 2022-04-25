import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
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
  const navigator = useNavigation();
  const {
    data: { image, symbol, name, amount, valueUSD },
  } = props;
  return (
    <Pressable
      onPress={() => navigator.navigate("CoinDetail")}
      style={styles.root}
    >
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
    </Pressable>
  );
};

export default PortFolioCoin;
