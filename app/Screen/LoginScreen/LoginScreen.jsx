import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";

export default function LoginScreen() {
  return (
    <View
      style={{
        display: "",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 80,
      }}
    >
      <Image
        source={require("./../../../assets/images/logo.png")}
        style={styles.logoImage}
      />
      <Image
        source={require("./../../../assets/images/ev-charging.jpg.webp")}
        style={styles.bgImage}
      />
      <View style={{}}>
        <Text style={styles.heading}>
          Your Ultimate EV Charging Station Finder
        </Text>
        <Text style={styles.desc}>
          Find Ev charging stations near you, plan a trip and much more with one
          click
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert("Button Clicked")}
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontFamily: "poppins",
              fontSize: 17,
            }}
          >
            Sign in with Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoImage: {
    width: 200,
    height: 40,
    objectFit: "contain",
  },
  bgImage: {
    width: "120%",
    height: 240,
    marginTop: 20,
    objectFit: "cover",
  },
  heading: {
    fontSize: 22,
    fontFamily: "poppins-bold",
    textAlign: "center",
    marginTop: 20,
  },
  desc: {
    fontSize: 17,
    fontFamily: "poppins",
    marginTop: 15,
    textAlign: "center",
    color: Colors.GRAY,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 16,
    display: "flex",
    borderRadius: 99,
    marginTop: 70,
  },
});
