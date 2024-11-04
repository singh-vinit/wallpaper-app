import { Button, Text, View } from "react-native";
import { BottomScreen } from "@/components/BottomScreen";
import Constants from "expo-constants";
import { useState } from "react";
export default function Explore() {
  const [openSheet, setOpenSheet] = useState(false);
  const openHandler = () => setOpenSheet(true);
  const closeHandler = () => setOpenSheet(false);
  return (
    <View
      style={{
        flex: 1,
        marginTop: Constants.statusBarHeight,
      }}
    >
      <Text>explore</Text>
      <Button title="open a sheet" onPress={openHandler}></Button>
      {openSheet && <BottomScreen onCloseSheet={closeHandler} />}
    </View>
  );
}
