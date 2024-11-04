import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Suggested from "../(swipe)/suggested";
import Liked from "../(swipe)/liked";
import Library from "../(swipe)/library";

const Tab = createMaterialTopTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Suggested" component={Suggested} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Library" component={Library} />
    </Tab.Navigator>
  );
}
