import React from "react";
import { ScreenContainer } from "../utility/ScreenContainer";
import { Dimensions, View } from "react-native";
import Pdf from "react-native-pdf";
import { Text } from "../typography/text.component";
import { BookDetails } from "./PreviewBook.styles";

const PreviewBook = ({ isLoading, error, bookDetails, type, file }) => {
  return (
    <ScreenContainer>
      {isLoading || (!isLoading && !error && !file) ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Loading {type}...</Text>
        </View>
      ) : (
        <>
          <BookDetails>
            <Text>
              {bookDetails.courseCode} - {bookDetails.courseTitle}
            </Text>
          </BookDetails>
          <Pdf
            source={{ uri: file }}
            style={{
              flex: 1,
              width: Dimensions.get("window").width - 16,
              height: Dimensions.get("window").height,
              borderRadius: 10,
            }}
          />
        </>
      )}
    </ScreenContainer>
  );
};

export default PreviewBook;
