"use client";

import HomeCommend from "./commend";
import Follow from "./follow";
import { useUpdateContentName } from "@/app/util/zustand/useUpdateContentName";

export default function HomeItemList() {
  const content = useUpdateContentName((state) => state.content);
  return <div>{content === "추천" ? <HomeCommend /> : <Follow />}</div>;
}
