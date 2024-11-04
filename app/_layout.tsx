import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Slot } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  return (
    <GestureHandlerRootView>
        <Slot />
    </GestureHandlerRootView>
  );
}
