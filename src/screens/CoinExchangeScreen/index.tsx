import { View, Text, Image, TextInput, Pressable, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import styles from "./styles";
const testImage = require("../../../assets/images/Saly-17.png");

const CoinExchangeScreen = () => {
  const route = useRoute();

  const isBuy = route?.params?.isBuy;
  const coin = route?.params?.coinData;

  const [coinAmount, setCoinAmount] = useState("");
  const [coinUSDValue, setCoinUSDValue] = useState("");

  useEffect(() => {
    const amount = parseFloat(coinAmount);
    if (!amount && amount !== 0) {
      setCoinAmount("");
      return;
    }
    setCoinUSDValue((amount * coin?.currentPrice).toString());
  }, [coinAmount]);
  useEffect(() => {
    const amount = parseFloat(coinUSDValue);
    if (!amount && amount !== 0) {
      setCoinAmount("");
      return;
    }
    setCoinAmount((amount / coin?.currentPrice).toString());
  }, [coinUSDValue]);

  const maxUSD = 1000000;
  const handlePlaceItem = () => {
    if (isBuy && parseFloat(coinUSDValue) > maxUSD) {
      Alert.alert("Error", `Not Enough USD coin to buy. Max: ${maxUSD}`);
      console.log("Error", `Not Enough USD coin to buy. Max: ${maxUSD}`);
      return;
    }
    if (!isBuy && parseFloat(coinAmount) > coin?.amount) {
      Alert.alert("Error", `Not Enough Coin to sell. Max : ${coin?.amount}`);
      console.log("Error", `Not Enough Coin to sell. Max : ${coin?.amount}`);
      return;
    }
    console.log("successfully");
  };
  return (
    <View style={styles.root}>
      <Text style={styles.mainTitle}>
        {isBuy ? "BUY " : "SELL"} {coin.name}
      </Text>
      <View style={styles.changeValue}>
        <Text>
          1 {coin?.symbol} : ${coin?.valueUSD}
        </Text>
      </View>
      <View>
        <Image style={styles.img} source={testImage}></Image>
      </View>

      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={setCoinAmount}
            placeholder="0"
            keyboardType="decimal-pad"
            value={coinAmount}
          ></TextInput>
          <Text>{coin?.symbol}</Text>
        </View>
        <Text style={styles.middleKey}>=</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={coinUSDValue}
            onChangeText={setCoinUSDValue}
            keyboardType="decimal-pad"
            placeholder="0"
          ></TextInput>
          <Text>USD</Text>
        </View>
      </View>
      <View style={styles.bottomPannel}>
        <Pressable onPress={handlePlaceItem} style={styles.btnWrapper}>
          <Text style={styles.btn}>Place Item</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CoinExchangeScreen;
