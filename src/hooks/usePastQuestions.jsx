import useSWR from "swr";
import { SERVER_BASE_URL } from "../constants/urls";

export const useGetAllPastQuestions = () => {
  const { data, error, isLoading } = useSWR("/past-questions", () =>
    fetch(`${SERVER_BASE_URL}/past-questions`)
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

export const useGetPastQuestion = (id) => {
  const { data, error, isLoading } = useSWR(
    `/past-questions/get-single-past-question/${id}`,
    () =>
      fetch(`${SERVER_BASE_URL}/past-questions/get-single-past-question/${id}`)
        .then((res) => res.json())
        .then((data) => {
          return data;
        })
        .catch((error) => {
          return error;
        })
  );

  return {
    data,
    error,
    isLoading,
  };
};

export const getPastQuestionFile = async (id) =>
  fetch(`${SERVER_BASE_URL}/past-questions/${id}`)
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

export const useGetPastQuestionFile = (id) => {
  const { data, error, isLoading } = useSWR(`/past-questions/${id}`, () =>
    getPastQuestionFile(id)
  );

  return {
    file: data,
    error,
    isLoading,
  };
};
