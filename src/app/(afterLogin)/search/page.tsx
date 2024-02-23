import TopBarProvider from "@/app/_components/inbar/topbarProvider";
import ExploreTopBar from "../explore/_components/exploreTopBar";
import SearchItemList from "./_components/item/SearchItemList";
import { Suspense } from "react";

export default function SearchPage() {
  return (
    <div>
      <TopBarProvider>
        <ExploreTopBar />
      </TopBarProvider>
      <Suspense>
        <SearchItemList />
      </Suspense>
    </div>
  );
}
