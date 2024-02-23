"use client";

import Link from "next/link";
import TrendItem from "./trendItem";

export default function TrendList() {
  return (
    <div>
      <Link href="search?keyword=연예인">
        <TrendItem story="연예인" />
      </Link>
      <Link href="search?keyword=고기">
        <TrendItem story="고기" />
      </Link>
      <Link href="search?keyword=커피">
        <TrendItem story="커피" />
      </Link>
    </div>
  );
}
