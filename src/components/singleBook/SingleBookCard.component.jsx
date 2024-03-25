import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { Text } from "../typography/text.component";
import { Ionicons } from "@expo/vector-icons";
import { useFavouritesContext } from "../../providers/FavouritesProvider";
import { useDownloadsContext } from "../../providers/DownloadsProvider";

const BookCard = styled(Card)`
  margin-bottom: ${(props) => props.theme.space[3]};
  background-color: #fbfbfb;
`;

const BookCardCover = styled(BookCard.Cover).attrs({
  resizeMode: "cover",
})`
  object-fit: cover;
  object-position: top;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
`;

const BookInfo = styled(View)`
  padding: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[3]};
  flex-direction: row;
  justify-content: space-between;
`;

const ActionButtonsWrapper = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
`;

const ActionButton = styled(TouchableOpacity)`
  align-items: center;
`;

const SingleBookCard = ({ book, type }) => {
  const {
    addFavourites,
    removeFavourites,
    favouriteModules,
    favouritePastQuestions,
  } = useFavouritesContext();
  const { saveFile, downloadedPastQuestions, downloadedModules } =
    useDownloadsContext();
  const isFavourite =
    type === "module"
      ? !!favouriteModules?.find((f) => f.id === book.id)
      : !!favouritePastQuestions?.find((f) => f.id === book.id);

  const isDownloaded =
    type === "module"
      ? !!downloadedModules?.find((f) => f.id === book.id)
      : !!downloadedPastQuestions?.find((f) => f.id === book.id);

  return (
    <BookCard>
      <View>
        <BookCardCover
          key={book.courseCode}
          source={
            book.thumbnail && book.thumbnail !== "undefined"
              ? { uri: book.thumbnail }
              : require("../../../assets/book.png")
          }
        />
      </View>
      <BookInfo>
        <View>
          <Text>
            {book.courseCode} {type === "past-question" && `- ${book.session}`}
          </Text>
          <Text>{book.courseTitle}</Text>
        </View>

        <ActionButtonsWrapper>
          <ActionButton
            onPress={() =>
              !isFavourite
                ? addFavourites(module, type)
                : removeFavourites(module, type)
            }
          >
            <Ionicons
              name="heart"
              size={20}
              color={isFavourite ? "#b91c1c" : "#0a7230"}
            />
            <Text
              style={{
                color: isFavourite ? "#b91c1c" : "#0a7230",
                fontSize: 12,
              }}
            >
              {isFavourite ? "Liked" : "Like"}
            </Text>
          </ActionButton>
          <ActionButton
            onPress={() => {
              !isDownloaded && saveFile(module, type);
            }}
          >
            <Ionicons
              name={isDownloaded ? "checkmark-circle" : "cloud-download"}
              size={20}
              color="gray"
            />
            <Text style={{ color: "gray", fontSize: 12 }}>
              {isDownloaded ? "Downloaded" : "Download"}
            </Text>
          </ActionButton>
        </ActionButtonsWrapper>
      </BookInfo>
    </BookCard>
  );
};

export default SingleBookCard;
