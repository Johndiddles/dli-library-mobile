import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PastQuestionsStackNavigator from "./allPastQuestionsStack.navigator";
import { screenOptions } from "../tabBarScreenOptions";
import FavouritePastQuestionsStackNavigator from "./favouritePastQuestionsStack.navigator copy";
import DownloadedPastQuestionsStackNavigator from "./downloadedPastQuestionsStack.navigator copy 2";

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  "All Past Questions": "md-book",
  "Favourite Past Questions": "heart",
  Downloads: "cloud-download",
};

const PastQuestionsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => screenOptions({ route, TAB_ICONS })}
    >
      <Tab.Screen
        name="All Past Questions"
        component={PastQuestionsStackNavigator}
        options={{
          title: "All",
        }}
      />
      <Tab.Screen
        name="Favourite Past Questions"
        component={FavouritePastQuestionsStackNavigator}
        options={{
          title: "Liked",
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={DownloadedPastQuestionsStackNavigator}
        options={{
          title: "Downloads",
        }}
      />
    </Tab.Navigator>
  );
};

export default PastQuestionsNavigator;
