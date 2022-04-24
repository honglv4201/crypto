import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
const image = require("../../assets/images/Saly-17.png");

const ProfileScreen = () => {
  const [user, setUser] = useState({
    id: 1,
    name: "lamHong",
    avatar:
      "https://i.pinimg.com/736x/da/27/23/da272343e779d4ba65e1b01de268f769.jpg",
    email: "vanhong42201@gmail.com",
    netWorth: 195232,
  });
  const signOut = () => {
    console.warn("sign out");
  };

  return (
    <View style={styles.root}>
      <View style={styles.root2}>
        <Image style={styles.img} source={image}></Image>
        <View style={styles.card}>
          <View style={styles.infoWrapper}>
            <Image style={styles.avatar} source={{ uri: user.avatar }}></Image>
            <View style={styles.nameWrapper}>
              <Text style={styles.name}>Hong Lam</Text>
              <Text style={styles.email}>vanhong4220@gmail.com</Text>
            </View>
          </View>
          <Text style={styles.netWordth}>{user.netWorth}</Text>
        </View>
      </View>

      <Pressable style={styles.btn_wrapper} onPress={signOut}>
        <Text style={styles.btn}>Sign out</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
