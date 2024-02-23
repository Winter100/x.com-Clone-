"use client";

import { ItemType } from "@/app/(afterLogin)/home/_components/commend";
import Item from "@/app/_components/item/Item";
import Loading from "@/app/_components/loading/loading";
import { useSearchInfinte } from "@/app/util/tanstack-query/useSearchInfinte";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";

export default function SearchItemList() {
  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useSearchInfinte();

  if (isLoading) return <Loading />;

  console.log(data);

  return (
    <InfiniteScroll
      dataLength={data?.pages.length as number}
      next={fetchNextPage}
      loader={<Loading />}
      hasMore={hasNextPage}
      scrollThreshold={0.8}
    >
      {data?.pages.map((item, idx) => {
        return item?.data.map((item: ItemType) => (
          <li key={`t${item?.id}`}>
            <Link href={`/history/comment/${item.id}`}>
              <Item item={item} />
            </Link>
          </li>
        ));
      })}
    </InfiniteScroll>
  );
}
