import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BookType } from "../types/types";

type PurchaseDetailBookProps = {
  purchasesDetailBook: BookType;
};

const PurchaseDetailBook = ({
  purchasesDetailBook,
}: PurchaseDetailBookProps) => {
  return (
    <Link
      href={`/book/${purchasesDetailBook.id}`}
      className="cursor-pointer shadow-2xl duration-300 hover:translate-y-1 hover:shadow-none"
    >
      <Image
        priority
        src={purchasesDetailBook.thumbnail.url}
        alt={purchasesDetailBook.title}
        width={450}
        height={350}
        className="rounded-t-md"
      />
      <div className="px-4 py-4 bg-slate-100 rounded-b-md">
        <h2 className="text-lg font-semibold">{purchasesDetailBook.title}</h2>
        {/* <p className="mt-2 text-lg text-slate-600">この本は○○...</p> */}
        <p className="mt-2 text-md text-slate-700">
          値段：{purchasesDetailBook.price}円
        </p>
      </div>
    </Link>
  );
};

export default PurchaseDetailBook;
