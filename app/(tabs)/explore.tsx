import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function Explore() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SafeAreaView>
      <Text>explore</Text>
    </SafeAreaView>
  );
}
