import { View, Text, StyleSheet, Image } from "react-native";

export function WallpaperCard({ image }: any) {
  return (
    <View style={styles.container}>
      <Image style={{ flex: 1 }} source={image} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {},
  container: {
    height: 100,
    width: 100,
  },
});
