import { Text, View } from "react-native";
import Constants from "expo-constants";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        marginTop: Constants.statusBarHeight,
      }}
    >
      <Text>About</Text>
      <Link href="/accountInfo">account information</Link>
    </View>
  );
}
