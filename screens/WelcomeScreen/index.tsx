import { View, Text, Image, Pressable } from "react-native";

import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
const images = require("../../assets/images/Saly-1.png");
const imageGGLogin = require("../../assets/images/google-button.png");

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const handleGoHome = () => {
    navigation.navigate("Root");
  };
  return (
    <View style={styles.root}>
      <Image style={styles.img} source={images}></Image>
      <Text style={styles.title}>Welcome sto Crypto</Text>
      <Text style={styles.description}>
        Invest your virtual $10.000 and compete with others
      </Text>
      <Pressable onPress={handleGoHome} style={styles.btnWrapper}>
        <Image style={styles.btnLogin} source={imageGGLogin}></Image>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;
