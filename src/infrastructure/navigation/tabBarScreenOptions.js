import { Ionicons } from "@expo/vector-icons";
import { fonts } from "../theme/fonts";

export const screenOptions = ({ route, TAB_ICONS }) => ({
  headerShown: false,
  tabBarIcon: ({ color, size }) => (
    <Ionicons name={TAB_ICONS[route.name]} size={size} color={color} />
  ),
  tabBarActiveTintColor: "#b91c1c",
  tabBarInactiveTintColor: "gray",
  tabBarLabelStyle: {
    fontFamily: fonts.heading2,
    fontSize: 14,
  },
});
