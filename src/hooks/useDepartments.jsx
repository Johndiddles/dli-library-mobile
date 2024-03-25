import useSWR from "swr";
import { SERVER_BASE_URL } from "../constants/urls";

export const useGetAllDepartments = () => {
  const { data, error, isLoading } = useSWR("/departments", () =>
    fetch(`${SERVER_BASE_URL}/departments`)
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log({ error });
        return error;
      })
  );

  return {
    departments: data,
    error,
    isLoading,
  };
};
