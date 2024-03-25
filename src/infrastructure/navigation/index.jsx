import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import PastQuestionsNavigator from "./pastQuestionsNavigator/pastQuestions.navigator";
import { Ionicons } from "@expo/vector-icons";
import { fonts } from "../theme/fonts";
import FavouritesContextProvider from "../../providers/FavouritesProvider";
import DownloadsContextProvider from "../../providers/DownloadsProvider";
import ModulesNavigator from "./modulesNavigator/modules.navigator";

const Drawer = createDrawerNavigator();

const DRAWER_ICONS = {
  Modules: "md-book",
  "Past Questions": "shield-checkmark",
};

const Navigation = () => {
  return (
    <FavouritesContextProvider>
      <DownloadsContextProvider>
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={({ route }) => ({
              backgroundColor: "black",
              drawerIcon: ({ color, size }) => (
                <Ionicons
                  name={DRAWER_ICONS[route.name]}
                  size={size}
                  color={color}
                />
              ),
              drawerActiveTintColor: "white",
              drawerActiveBackgroundColor: "#0a7230",
              headerTitleStyle: {
                fontFamily: fonts.heading1,
                color: "white",
              },
              headerStyle: {
                backgroundColor: "#0a7230",
              },
              headerIconColor: "white",
              drawerLabelStyle: {
                fontFamily: fonts.heading2,
                fontSize: 16,
              },
            })}
          >
            <Drawer.Screen name="Modules" component={ModulesNavigator} />
            <Drawer.Screen
              name="Past Questions"
              component={PastQuestionsNavigator}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </DownloadsContextProvider>
    </FavouritesContextProvider>
  );
};

export default Navigation;
