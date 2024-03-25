import React, { useState, useMemo } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ScreenContainer } from "../../../components/utility/ScreenContainer";
import SingleBook from "../../../components/singleBook/SingleBookCard.component";
import Search from "../../../components/search/searchbar";
import { useGetAllModules } from "../../../hooks/useModules";
import EmptyScreen from "../../../components/utility/EmptyScreen";
import LoadingScreen from "../../../components/loadingScreen/LoadingScreen";
import {
  FilterButton,
  FilterWrapper,
  SearchWrapper,
} from "../../../components/utility/FilterWrapper";
import { useGetAllDepartments } from "../../../hooks/useDepartments";
import { Picker } from "@react-native-picker/picker";

const AllModules = ({ navigation }) => {
  const { data: modules = [], error, isLoading } = useGetAllModules();
  const {
    departments,
    error: departmentError,
    isLoading: isDepartmentLoading,
  } = useGetAllDepartments();
  console.log({ departments });

  const [searchKeyword, setSearchKeyword] = useState("");

  const findModule = (keyword) => setSearchKeyword(keyword);

  const filteredModules = useMemo(
    () =>
      modules.filter(
        (module) =>
          module.courseTitle
            ?.toLowerCase()
            .includes(searchKeyword?.toLowerCase()) ||
          module.courseCode
            ?.toLowerCase()
            .includes(searchKeyword?.toLowerCase()) ||
          module.level?.includes(searchKeyword)
      ),
    [searchKeyword, modules]
  );

  return (
    <ScreenContainer>
      <FilterWrapper>
        <SearchWrapper>
          <Search onSubmit={findModule} type="modules" />
          <FilterButton />
        </SearchWrapper>
        <Picker>
          <Picker.Item label="Select a department" value="" />
          {departments.map((department) => (
            <Picker.Item
              key={department.id}
              label={department.title}
              value={department.value}
            />
          ))}
        </Picker>
      </FilterWrapper>

      {isLoading ? (
        <LoadingScreen text="Loading modules..." />
      ) : modules?.length === 0 ? (
        <EmptyScreen text="No modules found" />
      ) : modules?.length > 0 && filteredModules?.length === 0 ? (
        <EmptyScreen text="No match found" />
      ) : (
        <>
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
        </>
      )}
    </ScreenContainer>
  );
};

export default AllModules;
