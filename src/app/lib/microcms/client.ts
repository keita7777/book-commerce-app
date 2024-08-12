import { BookType } from "@/app/types/types";
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN!,
  apiKey: process.env.NEXT_PUBLIC_API_KEY!,
  retry: true,
});

export const getAllBooks = async () => {
  const allBooks = await client.getList<BookType>({
    customRequestInit: {
      next: {
        revalidate: 3600,
      },
    },
    endpoint: "bookcommerce",
  });

  return allBooks;
};

export const getDetailBook = async (contentId: string) => {
  const detailBook = await client.getListDetail<BookType>({
    customRequestInit: {
      cache: "no-store",
    },
    endpoint: "bookcommerce",
    contentId,
  });

  return detailBook;
};
