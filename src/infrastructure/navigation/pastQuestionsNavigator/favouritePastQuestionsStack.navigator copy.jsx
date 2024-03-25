import { createStackNavigator } from "@react-navigation/stack";
import AllPastQuestions from "../../../pages/pastQuestions/AllPastQuestions/AllPastQuestions";
import SinglePastQuestion from "../../../pages/pastQuestions/SinglePastQuestion/SinglePastQuestion";
import ViewPastQuestion from "../../../pages/pastQuestions/ViewPastQuestion/ViewPastQuestion";
import FavouritePastQuestions from "../../../pages/pastQuestions/FavouritePastQuestions/FavouritePastQuestions";

const PastQuestionsStack = createStackNavigator();

const FavouritePastQuestionsStackNavigator = () => {
  return (
    <PastQuestionsStack.Navigator screenOptions={{ headerShown: false }}>
      <PastQuestionsStack.Screen
        name="All"
        component={FavouritePastQuestions}
      />
      <PastQuestionsStack.Screen
        name="Past Question Details"
        component={SinglePastQuestion}
      />
      <PastQuestionsStack.Screen
        name="Preview Past Question"
        component={ViewPastQuestion}
      />
    </PastQuestionsStack.Navigator>
  );
};

export default FavouritePastQuestionsStackNavigator;
