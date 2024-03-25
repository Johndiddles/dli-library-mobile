import { createStackNavigator } from "@react-navigation/stack";
import AllPastQuestions from "../../../pages/pastQuestions/AllPastQuestions/AllPastQuestions";
import SinglePastQuestion from "../../../pages/pastQuestions/SinglePastQuestion/SinglePastQuestion";
import ViewPastQuestion from "../../../pages/pastQuestions/ViewPastQuestion/ViewPastQuestion";
import DownloadedPastQuestions from "../../../pages/pastQuestions/DownloadedPastQuestions/DownloadedPastQuestions";

const PastQuestionsStack = createStackNavigator();

const DownloadedPastQuestionsStackNavigator = () => {
  return (
    <PastQuestionsStack.Navigator screenOptions={{ headerShown: false }}>
      <PastQuestionsStack.Screen
        name="All"
        component={DownloadedPastQuestions}
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

export default DownloadedPastQuestionsStackNavigator;
