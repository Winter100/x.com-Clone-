import TopBarProvider from "@/app/_components/inbar/topbarProvider";
import Search from "@/app/_components/search/search";
import React from "react";

export default function ExploreTopBar() {
  return (
    <TopBarProvider>
      <Search />
    </TopBarProvider>
  );
}
