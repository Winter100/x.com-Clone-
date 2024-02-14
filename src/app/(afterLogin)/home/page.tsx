import React from "react";
import HomeTopBar from "./_components/homeTopBar";
import Write from "./_components/write";
import HomeItemList from "./_components/homeItemList";

export default function HomePage() {
  return (
    <div>
      <HomeTopBar />
      <Write />
      <HomeItemList />
    </div>
  );
}
