import React, { useState, useMemo } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ScreenContainer } from "../../../components/utility/ScreenContainer";
import SingleBook from "../../../components/singleBook/SingleBookCard.component";
import Search from "../../../components/search/searchbar";
import { useFavouritesContext } from "../../../providers/FavouritesProvider";
import { Text } from "../../../components/typography/text.component";
import EmptyScreen from "../../../components/utility/EmptyScreen";

const FavouritePastQuestions = ({ navigation }) => {
  const { favouritePastQuestions } = useFavouritesContext();

  const [searchKeyword, setSearchKeyword] = useState("");

  const findPastQuestions = (keyword) => setSearchKeyword(keyword);

  const filteredPastQuestions = useMemo(
    () =>
      favouritePastQuestions.filter(
        (question) =>
          question.courseTitle
            ?.toLowerCase()
            .includes(searchKeyword?.toLowerCase()) ||
          question.courseCode
            ?.toLowerCase()
            .includes(searchKeyword?.toLowerCase()) ||
          question.level?.includes(searchKeyword)
      ),
    [searchKeyword, favouritePastQuestions]
  );

  return (
    <ScreenContainer>
      <Search onSubmit={findPastQuestions} type="past questions" />
      {favouritePastQuestions?.length === 0 ? (
        <EmptyScreen text="You have not liked any past question" />
      ) : favouritePastQuestions?.length > 0 &&
        filteredPastQuestions?.length === 0 ? (
        <EmptyScreen text="No match found" />
      ) : (
        <>
          <FlatList
            data={filteredPastQuestions}
            renderItem={(item) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Past Question Details", {
                      pq_id: item.item.id,
                      book: item.item,
                    });
                  }}
                >
                  <SingleBook book={item.item} type="past-question" />
                </TouchableOpacity>
              );
            }}
          />
        </>
      )}
    </ScreenContainer>
  );
};

export default FavouritePastQuestions;
