import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllModulesStackNavigator from "./allModulesStack.navigator";
import { screenOptions } from "../tabBarScreenOptions";
import FavouriteModulesStackNavigator from "./favouriteModulesStack.navigator";
import DownloadedModulesStackNavigator from "./downloadedModulesStack.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  "All Modules": "md-book",
  "Favourite Modules": "heart",
  Downloads: "cloud-download",
};

const ModulesNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => screenOptions({ route, TAB_ICONS })}
    >
      <Tab.Screen
        name="All Modules"
        component={AllModulesStackNavigator}
        options={{
          title: "All",
        }}
      />
      <Tab.Screen
        name="Favourite Modules"
        component={FavouriteModulesStackNavigator}
        options={{
          title: "Liked",
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={DownloadedModulesStackNavigator}
        options={{
          title: "Downloads",
        }}
      />
    </Tab.Navigator>
  );
};

export default ModulesNavigator;
