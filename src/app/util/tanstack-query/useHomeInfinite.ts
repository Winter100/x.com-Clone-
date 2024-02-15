import { useInfiniteQuery } from "@tanstack/react-query";
import { getPhotos } from "../axios/getData";

const initalUrl = "https://jsonplaceholder.typicode.com/photos?_page=1";

export function useHomeInfinite() {
  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfiniteQuery({
      queryKey: ["photos"],
      queryFn: ({ pageParam }) => getPhotos(pageParam),
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
