"use client";

import HistoryTopBar from "../../_components/historyTopBar";
import HisoryItemList from "../../_components/hisoryItemList";
import { useParams } from "next/navigation";
import { useHistoryData } from "@/app/util/tanstack-query/useHistory";
import Loading from "@/app/_components/loading/loading";

export default function Page() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError, error } = useHistoryData(id);

  if (isLoading) return <Loading />;
  if (isError) return <p>{error?.message}</p>;

  return (
    <div>
      <HistoryTopBar />
      <HisoryItemList data={data} />
    </div>
  );
}
