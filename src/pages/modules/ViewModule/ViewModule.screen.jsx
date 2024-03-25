import React, { useEffect, useState } from "react";
import { useGetModuleFile } from "../../../hooks/useModules";
import { getBase64 } from "../../../utils/getBase64";
import PreviewBook from "../../../components/singleBook/PreviewBook.component";
import { useDownloadsContext } from "../../../providers/DownloadsProvider";

import * as FileSystem from "expo-file-system";

const ViewModule = ({ route }) => {
  const { book } = route.params;
  const [module, setModule] = useState(null);

  const { file = {}, error, isLoading } = useGetModuleFile(book.id);

  const downloadedFile = !!book?.uri
    ? FileSystem.readAsStringAsync(book?.uri)
    : file;


  useEffect(() => {
    async function getBase64File() {
      const base64File = await getBase64(file);
      setModule(
        base64File
          ?.split("data:application/octet-stream;base64")
          .join("data:application/pdf;base64")
      );
    }

    !isLoading && file && getBase64File();
  }, [file]);

  return (
    <PreviewBook
      file={module}
      bookDetails={book}
      isLoading={isLoading}
      error={error}
      type="module"
    />
  );
};

export default ViewModule;
