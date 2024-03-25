import React, { useEffect, useState } from "react";
import { getBase64 } from "../../../utils/getBase64";
import PreviewBook from "../../../components/singleBook/PreviewBook.component";
import { useGetPastQuestionFile } from "../../../hooks/usePastQuestions";
import * as FileSystem from "expo-file-system";

const ViewPastQuestion = ({ route }) => {
  const { book } = route.params;
  const [pastQuestion, setPastQuestion] = useState(null);
  const { file, error, isLoading } = useGetPastQuestionFile(book.id);
  const [isLoadingDownloadedFile, setIsLoadingDownloadedFile] = useState(true);

  useEffect(() => {
    async function getBase64File() {
      const base64File = await getBase64(file);
      setPastQuestion(
        base64File
          ?.split("data:application/octet-stream;base64")
          .join("data:application/pdf;base64")
      );
    }

    async function getDownloadedFile() {
      try {
        const document = await FileSystem.readAsStringAsync(book?.uri, {
          encoding: "base64",
        });
        setPastQuestion(`data:application/pdf;base64,${document}`);
        setIsLoadingDownloadedFile(false);
      } catch (error) {
        console.log("=================>", { error });
      }
    }
    !!book.uri
      ? getDownloadedFile()
      : !isLoading && !!file
      ? getBase64File()
      : setPastQuestion("error");
  }, [book, file]);

  return (
    <PreviewBook
      file={pastQuestion}
      bookDetails={book}
      isLoading={!!book.uri ? isLoadingDownloadedFile : isLoading}
      error={error}
      type="past question"
    />
  );
};

export default ViewPastQuestion;
