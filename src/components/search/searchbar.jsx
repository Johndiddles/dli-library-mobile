import React, { useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { View } from "react-native";

const SearchContainer = styled(View)`
  flex: 1;
`;

const Search = ({ onSubmit, type }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <SearchContainer>
      <Searchbar
        elevation={0}
        inputStyle={{
          padding: 0,
        }}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.65)",
        }}
        // onIconPress={() => onSubmit(searchKeyword)}
        placeholder={`search for ${type}`}
        mode="bar"
        value={searchKeyword}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        onSubmitEditing={() => {
          onSubmit(searchKeyword);
        }}
        onClearIconPress={() => {
          setSearchKeyword("");
          onSubmit("");
        }}
      />
    </SearchContainer>
  );
};

export default Search;
