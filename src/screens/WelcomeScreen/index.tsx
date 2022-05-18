import { View, Text, Image, Pressable } from "react-native";

import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
const images = require("../../../assets/images/Saly-1.png");
const imageGGLogin = require("../../../assets/images/google-button.png");

const WelcomeScreen = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    const fetchUser = async () => {
      const user = await Auth.currentAuthenticatedUser();
      if (user) {
        navigation.navigate("Root");
      }
    };

    fetchUser();
  }, []);

  const handleGoHome = () => {
    navigation.navigate("Root");
  };

  const signInGoogle = async () => {
    await Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Google,
    });
  };

  return (
    <View style={styles.root}>
      <Image style={styles.img} source={images}></Image>
      <Text style={styles.title}>Welcome sto Crypto</Text>
      <Text style={styles.description}>
        Invest your virtual $10.000 and compete with others
      </Text>
      <Pressable onPress={signInGoogle} style={styles.btnWrapper}>
        <Image style={styles.btnLogin} source={imageGGLogin}></Image>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;
