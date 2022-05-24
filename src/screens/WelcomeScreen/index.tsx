import { View, Text, Image, Pressable } from "react-native";

import React, { useContext, useEffect } from "react";
import styles from "./styles";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { Auth, Hub } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import AppContext from "../../utils/AppContext";

const images = require("../../../assets/images/Saly-1.png");
const imageGGLogin = require("../../../assets/images/google-button.png");


const WelcomeScreen = () => {
  const navigation = useNavigation();
  const { setUserId } = useContext(AppContext);
  
  useEffect(() => {
    const fetchUser = async () => {
      const user = await Auth.currentAuthenticatedUser();
      if (user) {
        setUserId(user.attributes.sub)
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              { name: 'Root' },
            ],
          })
        );
      }
    }

    fetchUser();
  }, [])

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      if (event === "signIn") {
        setUserId(data.signInUserSession.accessToken.payload.sub)
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              { name: 'Root' },
            ],
          })
        );
      }
    });
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
