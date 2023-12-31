"use client";

import { FC } from "react";
import Header from "../shared/Header";
import ScrollToTop from "react-scroll-to-top";
import BookCard from "./BookCard";

const AllBooksWrapper: FC = () => {
  return (
    <>
      <Header text="Všetky knihy" />
      <div className="container mt-8 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
      <ScrollToTop />
    </>
  );
};

export default AllBooksWrapper;
