import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import LoginScreen from "./Screen/LoginScreen/LoginScreen";

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 25 }}>
      <LoginScreen />
      <StatusBar style="auto" />
    </View>
  );
}
