import React from "react";
import { useGetModule } from "../../../hooks/useModules";
import SingleBookView from "../../../components/singleBook/SingleBookView.component";

const SingleModule = ({ route, navigation }) => {
  const { module: id, book } = route.params;
  const { module = {}, error, isLoading } = useGetModule(id);

  return (
    <SingleBookView
      book={book ? book : module}
      isLoading={isLoading}
      error={error}
      navigation={navigation}
      type="module"
    />
  );
};

export default SingleModule;
