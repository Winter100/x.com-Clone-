import Loading from "@/app/_components/loading/loading";
import { useHomeInfinite } from "@/app/util/tanstack-query/useHomeInfinite";
import InfiniteScroll from "react-infinite-scroll-component";
import Link from "next/link";
import Item from "@/app/_components/item/Item";
import { ItemType } from "./commend";
import styles from "./follow.module.css";

export default function Follow() {
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
      <h4 className={styles.h4}>추천과 동일한 데이터가 출력됩니다.</h4>
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
