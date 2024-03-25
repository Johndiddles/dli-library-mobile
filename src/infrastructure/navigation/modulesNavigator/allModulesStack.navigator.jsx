import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import AllModules from "../../../pages/modules/AllModules/AllModules.screen";
import SingleModule from "../../../pages/modules/SingleModule/SingleModule.screen";
import ViewModule from "../../../pages/modules/ViewModule/ViewModule.screen";

const ModuleStack = createStackNavigator();

const AllModulesStackNavigator = () => {
  return (
    <ModuleStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <ModuleStack.Screen name="All" component={AllModules} />
      <ModuleStack.Screen name="Module Details" component={SingleModule} />
      <ModuleStack.Screen name="Preview Module" component={ViewModule} />
    </ModuleStack.Navigator>
  );
};

export default AllModulesStackNavigator;
