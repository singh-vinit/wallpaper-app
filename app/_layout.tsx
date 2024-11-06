import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="accountInfo"
          options={{ headerShown: true, headerTitle: "Account Info" }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
