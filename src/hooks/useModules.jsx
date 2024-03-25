import useSWR from "swr";
import { SERVER_BASE_URL } from "../constants/urls";

export const useGetAllModules = () => {
  const { data, error, isLoading } = useSWR("/modules", () =>
    fetch(`${SERVER_BASE_URL}/modules`)
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
  );

  return {
    data,
    error,
    isLoading,
  };
};

export const useGetModule = (id) => {
  const { data, error, isLoading } = useSWR(
    `/modules/get-single-module/${id}`,
    () =>
      fetch(`${SERVER_BASE_URL}/modules/get-single-module/${id}`)
        .then((res) => res.json())
        .then((data) => {
          return data;
        })
        .catch((error) => {
          return error;
        })
  );

  return {
    module: data,
    error,
    isLoading,
  };
};

export const getModuleFile = (id) =>
  fetch(`${SERVER_BASE_URL}/modules/${id}`)
    .then((res) =>
      res
        .blob()
        .then((blob) => {
          return blob;
        })
        .catch((error) => {
          return error;
        })
    )
    .catch((error) => {
      return error;
    });

export const useGetModuleFile = (id) => {
  const { data, error, isLoading } = useSWR(`/modules/${id}`, () =>
    getModuleFile(id)
  );

  return {
    file: data,
    error,
    isLoading,
  };
};
