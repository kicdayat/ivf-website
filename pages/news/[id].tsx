/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { useSingleNews } from "@/hooks/news";

const News = () => {
  const router = useRouter();
  const { data: news } = useSingleNews(String(router.query.id || ""));

  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h1 className="text-center font-bold text-3xl">{news?.title}</h1>
        {news?.createdAt ? (
          <p className="mt-2 text-primary-700 text-center">
            {new Date(news?.createdAt).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        ) : null}
        <p className="mt-2 text-center text-gray-600">{news?.description}</p>
        <div className="mt-6 flex justify-center">
          {news?.image ? <img src={news?.image} alt={news?.title} /> : null}
        </div>
        {news?.content ? (
          <div
            className="mx-auto mt-10 prose prose-headings:text-center"
            dangerouslySetInnerHTML={{ __html: news?.content }}
          ></div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default News;
