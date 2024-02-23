"use client";

import { ItemType } from "@/app/(afterLogin)/home/_components/commend";
import Item from "@/app/_components/item/Item";
import Loading from "@/app/_components/loading/loading";
import { useSearchInfinte } from "@/app/util/tanstack-query/useSearchInfinte";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import styels from "./SearchItemList.module.css";
import { useSearchParams } from "next/navigation";

export default function SearchItemList() {
  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useSearchInfinte();

  const searchParams = useSearchParams();

  const keyword = searchParams.get("keyword");
  if (isLoading) return <Loading />;

  return (
    <InfiniteScroll
      dataLength={data?.pages.length as number}
      next={fetchNextPage}
      loader={<Loading />}
      hasMore={hasNextPage}
      scrollThreshold={0.8}
    >
      <div className={styels.container}>
        <div>
          검색어는 <b>{keyword}</b> 이나 더미 데이터가 출력됩니다.
        </div>
      </div>
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
