import { useInfiniteQuery } from "@tanstack/react-query";
import { getComments } from "../axios/getData";

const initalUrl = "https://jsonplaceholder.typicode.com/comments?_page=1";

export function useSearchInfinte() {
  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfiniteQuery({
      queryKey: ["search"],
      queryFn: ({ pageParam }) => getComments(pageParam),
      initialPageParam: initalUrl,
      getNextPageParam: (_, pages) => {
        if (pages.length < 10) {
          return `${pages.length + 1}`;
        } else {
          return undefined;
        }
      },
    });

  return { data, fetchNextPage, hasNextPage, isLoading, isError };
}
