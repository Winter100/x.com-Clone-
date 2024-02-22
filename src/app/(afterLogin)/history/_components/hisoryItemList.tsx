"use client";

import Comment from "@/app/_components/comment/comment";
import Item from "@/app/_components/item/Item";

export default function HisoryItemList({ data }: any) {
  const DUMMY = new Array(Math.floor(Math.random() * 5)).fill(1);
  return (
    <div style={{ margin: "auto" }}>
      <Item item={data?.data} />
      {DUMMY.map((_, idx) => (
        <Comment key={`key${idx}`} />
      ))}
    </div>
  );
}
