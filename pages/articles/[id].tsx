/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { useArticle } from "@/hooks/article";

const Article = () => {
  const router = useRouter();
  const { data: article } = useArticle(String(router.query.id || ""));

  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h1 className="text-center font-bold text-3xl">{article?.title}</h1>
        {article?.createdAt ? (
          <p className="mt-2 text-primary-700 text-center">
            {new Date(article?.createdAt).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        ) : null}
        <p className="mt-2 text-center text-gray-600">{article?.description}</p>
        <div className="mt-6 flex justify-center">
          {article?.image ? (
            <img src={article?.image} alt={article?.title} />
          ) : null}
        </div>
        {article?.content ? (
          <div
            className="mx-auto mt-10 prose prose-headings:text-center"
            dangerouslySetInnerHTML={{ __html: article?.content }}
          ></div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default Article;
