import { createStackNavigator } from "@react-navigation/stack";
import AllPastQuestions from "../../../pages/pastQuestions/AllPastQuestions/AllPastQuestions";
import SinglePastQuestion from "../../../pages/pastQuestions/SinglePastQuestion/SinglePastQuestion";
import ViewPastQuestion from "../../../pages/pastQuestions/ViewPastQuestion/ViewPastQuestion";

const PastQuestionsStack = createStackNavigator();

const AllPastQuestionsStackNavigator = () => {
  return (
    <PastQuestionsStack.Navigator screenOptions={{ headerShown: false }}>
      <PastQuestionsStack.Screen name="All" component={AllPastQuestions} />
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

export default AllPastQuestionsStackNavigator;
