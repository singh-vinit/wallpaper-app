import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue", headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "for you",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "explore",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="explore" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "account",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-circle" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
