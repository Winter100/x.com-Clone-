"use client";

import Item from "@/app/_components/item/Item";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "@/app/_components/loading/loading";
import Link from "next/link";
import { useHomeInfinite } from "@/app/util/tanstack-query/useHomeInfinite";

export interface ItemType {
  id: number;
  title?: string;
  url?: string;
  name?: string;
  body?: string;
}

export default function HomeCommend() {
  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useHomeInfinite();

  if (isLoading) return <Loading />;

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
            <Link href={`/history/status/${item.id}`}>
              <Item item={item} />
            </Link>
          </li>
        ));
      })}
    </InfiniteScroll>
  );
}
