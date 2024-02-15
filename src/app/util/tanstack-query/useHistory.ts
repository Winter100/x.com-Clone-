import { useQuery } from "@tanstack/react-query";
import { getIdData } from "../axios/getData";

export function useHistoryData(id: string) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getIdData(id),
  });

  return { data, isLoading, isError, error };
}
