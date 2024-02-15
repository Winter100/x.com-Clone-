"use client";

import Item from "@/app/_components/item/Item";
import styles from "./homeItemList.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "@/app/_components/loading/loading";
import Link from "next/link";
import { useHomeInfinite } from "@/app/util/tanstack-query/useHomeInfinite";

export interface ItemType {
  id: number;
  title: string;
  url: string;
}

export default function HomeCommend() {
  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useHomeInfinite();

  const LoadingNum = new Array(3).fill("");

  if (isLoading) return LoadingNum.map((item) => <Loading key={item} />);

  return (
    <InfiniteScroll
      dataLength={data?.pages.length as number}
      next={fetchNextPage}
      loader={<Loading />}
      hasMore={hasNextPage}
      scrollThreshold={0.8}
    >
      {data?.pages.map((item) => {
        return item?.data.map((item: ItemType) => (
          <li key={item?.id} className={styles.container}>
            <Link href={`/history/status/${item.id}`}>
              <Item item={item} />
            </Link>
          </li>
        ));
      })}
    </InfiniteScroll>
  );
}
