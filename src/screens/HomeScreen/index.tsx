import { View, Text, Image } from "react-native";

import React from "react";
import styles from "./styles";
const images = require("../../../assets/images/Saly-1.png");

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <Image style={styles.img} source={images}></Image>
      <Text style={styles.title}>Welcome to Crypto</Text>
      <Text style={styles.description}>
        Invest your virtual $10.000 and compete with others
      </Text>
    </View>
  );
};

export default HomeScreen;
