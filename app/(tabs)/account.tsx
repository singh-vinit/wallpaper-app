import { Text, View } from "react-native";
import Constants from "expo-constants";

export default function Home() {
  return (
    <View
      style={{
        marginTop: Constants.statusBarHeight,
        flex: 1,
      }}
    >
      <Text>Account</Text>
    </View>
  );
}
