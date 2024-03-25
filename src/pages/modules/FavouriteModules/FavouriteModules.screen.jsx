import React, { useState, useMemo } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ScreenContainer } from "../../../components/utility/ScreenContainer";
import SingleBook from "../../../components/singleBook/SingleBookCard.component";
import Search from "../../../components/search/searchbar";
import { useFavouritesContext } from "../../../providers/FavouritesProvider";
import EmptyScreen from "../../../components/utility/EmptyScreen";
import { AntDesign } from "@expo/vector-icons";
import {
  FilterButton,
  FilterWrapper,
} from "../../../components/utility/FilterWrapper";

const FavouriteModules = ({ navigation }) => {
  const { favouriteModules } = useFavouritesContext();

  const [searchKeyword, setSearchKeyword] = useState("");

  const findModule = (keyword) => setSearchKeyword(keyword);

  const filteredModules = useMemo(
    () =>
      favouriteModules.filter(
        (module) =>
          module.courseTitle
            ?.toLowerCase()
            .includes(searchKeyword?.toLowerCase()) ||
          module.courseCode
            ?.toLowerCase()
            .includes(searchKeyword?.toLowerCase()) ||
          module.level?.includes(searchKeyword)
      ),
    [searchKeyword, favouriteModules]
  );

  return (
    <ScreenContainer>
      <FilterWrapper>
        <Search onSubmit={findModule} type="modules" />
        <FilterButton />
      </FilterWrapper>
      {favouriteModules?.length === 0 ? (
        <EmptyScreen text="You have not liked any module" />
      ) : favouriteModules?.length > 0 && filteredModules?.length === 0 ? (
        <EmptyScreen text="No match found" />
      ) : (
        <FlatList
          data={filteredModules}
          renderItem={(item) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Module Details", {
                    module: item.item.id,
                  });
                }}
              >
                <SingleBook book={item.item} type="module" />
              </TouchableOpacity>
            );
          }}
        />
      )}
    </ScreenContainer>
  );
};

export default FavouriteModules;
