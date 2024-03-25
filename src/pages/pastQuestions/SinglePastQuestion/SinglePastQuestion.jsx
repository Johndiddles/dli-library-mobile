import React from "react";
import SingleBookView from "../../../components/singleBook/SingleBookView.component";
import { useGetPastQuestion } from "../../../hooks/usePastQuestions";

const SinglePastQuestion = ({ route, navigation }) => {
  const { book } = route.params;
  const { data = {}, error, isLoading } = useGetPastQuestion(book.id);

  return (
    <SingleBookView
      book={book ? book : data}
      isLoading={book ? false : isLoading}
      error={error}
      navigation={navigation}
      type="past question"
    />
  );
};

export default SinglePastQuestion;
