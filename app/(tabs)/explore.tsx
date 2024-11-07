import { Button, Text, View, Image, FlatList, StyleSheet } from "react-native";
import { BottomScreen } from "@/components/BottomScreen";
import Constants from "expo-constants";
import { useState } from "react";
import { WallpaperCard } from "@/components/WallpaperCard";
import { useWallpaper } from "@/hooks/useWallpaper";
import ParallaxScrollView from "@/components/ParallaxScrollView";

export default function Explore() {
  const [openSheet, setOpenSheet] = useState(false);
  const openHandler = () => setOpenSheet(true);
  const closeHandler = () => setOpenSheet(false);
  const wallpapers = useWallpaper();

  return (
    <View
      style={{
        flex: 1,
        marginTop: Constants.statusBarHeight,
      }}
    >
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={
          <Image
            style={{ flex: 1, resizeMode: "cover" }}
            source={{
              uri: "https://ideogram.ai/assets/progressive-image/balanced/response/X9i01fXuRLKEMvobwaUPYg",
            }}
          />
        }
      >
        <View style={styles.container}>
          <FlatList
            data={wallpapers}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item.source.uri }}
                style={{ flex: 1, height: 150, width: 150 }}
              />
            )}
            keyExtractor={({ source }) => source.id}
          />
        </View>
      </ParallaxScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});
