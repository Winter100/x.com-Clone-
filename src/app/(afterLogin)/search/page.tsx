"use client";

import TopBarProvider from "@/app/_components/inbar/topbarProvider";
import { useSearchParams } from "next/navigation";
import ExploreTopBar from "../explore/_components/exploreTopBar";
import styels from "./page.module.css";
import SearchItemList from "./_components/item/SearchItemList";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");

  return (
    <div>
      <TopBarProvider>
        <ExploreTopBar />
      </TopBarProvider>
      <div className={styels.container}>
        <div>
          검색어는 <b>{keyword}</b> 이나 더미 데이터가 출력됩니다.
        </div>
      </div>
      <SearchItemList />
    </div>
  );
}
