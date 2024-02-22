"use client";

import HistoryTopBar from "../../_components/historyTopBar";
import HisoryItemList from "../../_components/hisoryItemList";
import Loading from "@/app/_components/loading/loading";
import { useParams } from "next/navigation";
import { useKeyword } from "@/app/util/tanstack-query/useKeyword";

export default function Page() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError, error } = useKeyword(id);

  if (isLoading) return <Loading />;
  if (isError) return <p>{error?.message}</p>;

  return (
    <div>
      <HistoryTopBar />
      <HisoryItemList data={data} />
    </div>
  );
}
