import { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fileSystem } from "../utils/fileSystem";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  // const [storagePermissions, setStoragePermissions] = useState(null);

  // const [isCheckingPermission, setIsCheckingPermission] = useState(true);

  // useEffect(() => {
  //   const getPermission = async () => {
  //     if (!storagePermissions) {
  //       const permission =
  //         await fileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

  //       if (permission.granted) {
  //         setStoragePermissions(permission);
  //       } else {
  //         setStoragePermissions({ granted: false });
  //       }
  //     }
  //   };

  //   !isCheckingPermission && storagePermissions === null && getPermission();
  // }, []);

  // const savePermissionToLocalStorage = async (value) => {
  //   try {
  //     const jsonValue = JSON.stringify(value);
  //     await AsyncStorage.setItem(`@storagePermissions`, jsonValue);
  //   } catch (error) {
  //     console.log("error saving module to local storage", { error });
  //   }
  // };

  // const loadStoragePermissions = async () => {
  //   try {
  //     const existingStoragePermissions = await AsyncStorage.getItem(
  //       `@storagePermissions`
  //     );

  //     if (existingStoragePermissions !== null) {
  //       setStoragePermissions(JSON.parse(existingStoragePermissions));
  //     }

  //     setIsCheckingPermission(false);
  //   } catch (error) {
  //     console.log("error loading storage permissions from local storage", {
  //       error,
  //     });
  //   }
  // };

  // useEffect(() => {
  //   !isCheckingPermission && savePermissionToLocalStorage(storagePermissions);
  // }, [storagePermissions, isCheckingPermission]);

  // useEffect(() => {
  //   loadStoragePermissions();
  // }, []);

  // AsyncStorage.removeItem("@storagePermissions");

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
export default AppProvider;
