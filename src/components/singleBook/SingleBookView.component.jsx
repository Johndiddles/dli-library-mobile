import React from "react";
import {
  DownloadButton,
  DownloadButtonText,
  ModuleDetailsWrapper,
  PreviewButton,
  PreviewButtonText,
  SingleModuleWrapper,
  ThumbnailPreview,
} from "./SingleBookView.styles";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "../typography/text.component";

const SingleBookView = ({ book, isLoading, error, navigation, type }) => {
  return (
    <SingleModuleWrapper>
      <ScrollView>
        {isLoading ? (
          <Text>
            loading {`${type === "module" ? "module" : "past question"}`}...
          </Text>
        ) : (
          <>
            <ThumbnailPreview source={{ uri: book.thumbnail }} />
            <ModuleDetailsWrapper>
              <Text>Couse Code: {book.courseCode}</Text>
              <Text>Course Title: {book.courseTitle}</Text>
              <Text>Department: {book.department}</Text>
              <Text>Level: {book.level}</Text>
            </ModuleDetailsWrapper>
            <ModuleDetailsWrapper>
              <DownloadButton>
                <DownloadButtonText>Download</DownloadButtonText>
              </DownloadButton>

              <PreviewButton
                onPress={() => {
                  navigation.navigate(
                    type === "module"
                      ? "Preview Module"
                      : "Preview Past Question",
                    {
                      book: book,
                    }
                  );
                }}
              >
                <PreviewButtonText>Preview</PreviewButtonText>
              </PreviewButton>
            </ModuleDetailsWrapper>
          </>
        )}
      </ScrollView>
    </SingleModuleWrapper>
  );
};

export default SingleBookView;
