"use client";

import Item from "@/app/_components/item/Item";
import { getPhotos } from "@/app/util/axios/getData";
import { useInfiniteQuery } from "@tanstack/react-query";
import styles from "./homeItemList.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "@/app/_components/loading/loading";
import Link from "next/link";

export interface ItemType {
  id: number;
  title: string;
  url: string;
}

export default function HomeCommend() {
  const initalUrl = "https://jsonplaceholder.typicode.com/photos?_page=1";

  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfiniteQuery({
      queryKey: ["photos"],
      queryFn: ({ pageParam }) => getPhotos(pageParam),
      initialPageParam: initalUrl,
      getNextPageParam: (_, pages) => {
        if (pages.length < 10) {
          return `${pages.length + 1}`;
        } else {
          return undefined;
        }
      },
    });

  if (isLoading) return <Loading />;

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
