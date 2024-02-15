"use client";

import Comment from "@/app/_components/comment/comment";
import Item from "@/app/_components/item/Item";
import Loading from "@/app/_components/loading/loading";
import { useHistoryData } from "@/app/util/tanstack-query/useHistory";
import { useParams } from "next/navigation";
import React from "react";

export default function HisoryItemList() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError, error } = useHistoryData(id);

  if (isLoading) return <Loading />;
  if (isError) return <p>{error?.message}</p>;

  const DUMMY = new Array(Math.floor(Math.random() * 5)).fill(1);
  return (
    <div style={{ margin: "auto" }}>
      <Item item={data?.data} />
      {DUMMY.map((_, idx) => (
        <Comment key={idx} />
      ))}
    </div>
  );
}
