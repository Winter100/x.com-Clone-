import { useQuery } from "@tanstack/react-query";
import { getCommentData } from "../axios/getData";

export function useKeyword(id: string) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["searchkey", id],
    queryFn: () => getCommentData(id),
  });

  return { data, isLoading, isError, error };
}
