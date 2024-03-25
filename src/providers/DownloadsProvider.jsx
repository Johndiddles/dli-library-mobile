import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useState, useEffect } from "react";
import { Platform } from "react-native";
import { getModuleFile } from "../hooks/useModules";
import { getPastQuestionFile } from "../hooks/usePastQuestions";
import { getBase64 } from "../utils/getBase64";

import * as FileSystem from "expo-file-system";

const DownloadsContext = createContext();

const DownloadsContextProvider = ({ children }) => {
  const [downloadedModules, setDownloadedModules] = useState([]);
  const [downloadedPastQuestions, setDownloadedPastQuestions] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);

  const add = (item, type) => {
    if (type === "module") setDownloadedModules((prev) => [...prev, item]);
    if (type === "past-question")
      setDownloadedPastQuestions((prev) => [...prev, item]);
  };

  const remove = (item, type) => {
    if (type === "module")
      setDownloadedModules((prev) => prev.filter((x) => x.id !== item.id));
    if (type === "past-question")
      setDownloadedPastQuestions((prev) =>
        prev.filter((x) => x.id !== item.id)
      );
  };

  const saveDownloadedModules = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@downloadedModules`, jsonValue);
    } catch (error) {
      console.log("error saving module to local storage", { error });
    }
  };

  const saveDownloadedPastQuestions = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@downloadedPastQuestions`, jsonValue);
    } catch (error) {
      console.log("error saving past question to local storage", { error });
    }
  };

  const saveFile = async (book, type) => {
    try {
      const file =
        type === "module"
          ? await getModuleFile(book.id)
          : await getPastQuestionFile(book.id);

      if (file) {
        const base64file = await getBase64(file);

        if (Platform.OS === "android") {
          const permissions =
            await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
          if (permissions.granted) {
            await FileSystem.StorageAccessFramework.createFileAsync(
              permissions.directoryUri,
              `${type === "module" ? "" : "PQ -"} ${book.courseCode} - ${
                book.courseTitle
              }.pdf`,
              "application/pdf"
            )
              .then(async (uri) => {
                await FileSystem.writeAsStringAsync(
                  uri,
                  base64file
                    ?.split("data:application/octet-stream;base64,")
                    .join(""),
                  {
                    encoding: FileSystem.EncodingType.Base64,
                  }
                );

                add({ ...book, uri }, type);
              })
              .catch((error) =>
                console.log("!!!!!!!!!!!!********!!!!!!!!!!!", { error })
              );
          }
        }
      } else {
        console.log("!!!!!!!!!!!!!!!!!!!! => error");
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const loadDownloads = async () => {
    try {
      const modules = await AsyncStorage.getItem(`@downloadedModules`);
      const pastQuestions = await AsyncStorage.getItem(
        `@downloadedPastQuestions`
      );

      if (modules !== null) {
        setDownloadedModules(JSON.parse(modules));
      }
      if (pastQuestions !== null) {
        setDownloadedPastQuestions(JSON.parse(pastQuestions));
      }

      setisLoaded(true);
    } catch (error) {
      console.log("error loading downloads from local storage", { error });
    }
  };

  useEffect(() => {
    loadDownloads();
  }, []);

  useEffect(() => {
    isLoaded && saveDownloadedModules(downloadedModules);
  }, [isLoaded, downloadedModules]);

  useEffect(() => {
    isLoaded && saveDownloadedPastQuestions(downloadedPastQuestions);
  }, [isLoaded, downloadedPastQuestions]);

  return (
    <DownloadsContext.Provider
      value={{
        downloadedModules,
        downloadedPastQuestions,
        // addToDownloads: add,
        removeFromDownloads: remove,
        saveFile,
      }}
    >
      {children}
    </DownloadsContext.Provider>
  );
};

export const useDownloadsContext = () => useContext(DownloadsContext);

export default DownloadsContextProvider;
