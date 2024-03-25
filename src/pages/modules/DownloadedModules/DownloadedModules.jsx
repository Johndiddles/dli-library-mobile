import React, { useState, useMemo } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ScreenContainer } from "../../../components/utility/ScreenContainer";
import SingleBook from "../../../components/singleBook/SingleBookCard.component";
import Search from "../../../components/search/searchbar";
import { useDownloadsContext } from "../../../providers/DownloadsProvider";
import EmptyScreen from "../../../components/utility/EmptyScreen";

const DownloadedModules = ({ navigation }) => {
  const { downloadedModules } = useDownloadsContext();

  const [searchKeyword, setSearchKeyword] = useState("");

  const findModules = (keyword) => setSearchKeyword(keyword);

  const filteredModules = useMemo(
    () =>
      downloadedModules.filter(
        (question) =>
          question.courseTitle
            ?.toLowerCase()
            .includes(searchKeyword?.toLowerCase()) ||
          question.courseCode
            ?.toLowerCase()
            .includes(searchKeyword?.toLowerCase()) ||
          question.level?.includes(searchKeyword)
      ),
    [searchKeyword, downloadedModules]
  );

  return (
    <ScreenContainer>
      <Search onSubmit={findModules} type="modules" />
      {downloadedModules?.length === 0 ? (
        <EmptyScreen text="You have not downloaded any module" />
      ) : downloadedModules?.length > 0 && filteredModules?.length === 0 ? (
        <EmptyScreen text="No match found" />
      ) : (
        <FlatList
          data={filteredModules}
          renderItem={(item) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Module Details", {
                    pq_id: item.item.id,
                    book: item.item,
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

export default DownloadedModules;
