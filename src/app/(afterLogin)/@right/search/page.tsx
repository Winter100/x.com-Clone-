import TrendItem from "@/app/_components/trend/trendItem";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link href="search?keyword=연예인">
        <TrendItem story="연예인" />
      </Link>
      <Link href="search?keyword=가수">
        <TrendItem story="가수" />
      </Link>
      <Link href="search?keyword=치킨">
        <TrendItem story="치킨" />
      </Link>
    </div>
  );
}
