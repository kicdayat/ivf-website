/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { useNews } from "@/hooks/news";
import { CalendarIcon } from "@heroicons/react/outline";

// const articles = [
//   {
//     title: "Boost your conversion rate",
//     href: "#",
//     category: { name: "Article", href: "#" },
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
//     date: "Mar 16, 2020",
//     datetime: "2020-03-16",
//     imageUrl:
//       "https://images.unsplash.com/flagged/photo-1572531186838-27a5459566f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
//     readingTime: "6 min",
//     author: {
//       name: "Roel Aufderehar",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
//     },
//   },
//   {
//     title: "How to use search engine optimization to drive sales",
//     href: "#",
//     category: { name: "News", href: "#" },
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
//     date: "Mar 10, 2020",
//     datetime: "2020-03-10",
//     imageUrl:
//       "https://images.unsplash.com/photo-1511948374796-056e8f289f34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
//     readingTime: "4 min",
//     author: {
//       name: "Brenna Goyette",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
//     },
//   },
//   {
//     title: "Improve your customer experience",
//     href: "#",
//     category: { name: "Case Study", href: "#" },
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
//     date: "Feb 12, 2020",
//     datetime: "2020-02-12",
//     imageUrl:
//       "https://images.unsplash.com/photo-1577285930803-df9418bede68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
//     readingTime: "11 min",
//     author: {
//       name: "Daniela Metz",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
//     },
//   },
// ];

const News = () => {
  const { data: news, isSuccess } = useNews();

  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h1 className="text-center text-4xl font-bold">News</h1>
        <p className="mt-4 text-center max-w-xl mx-auto text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque
          quasi et exercitationem voluptas ex officiis aut qui aperiam ducimus?
        </p>
      </div>
      <div className="py-10 grid md:grid-cols-2 gap-10 lg:gap-20 ">
        <div>
          <img
            className="aspect-[3/2] object-cover rounded-r-3xl"
            src="https://images.unsplash.com/photo-1628061571924-9b237322759f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Article"
          />
        </div>
        <div className="flex items-center max-w-lg">
          <div>
            <h2 className="text-2xl md:text-3xl text-center md:text-left font-bold md:max-w-sm">
              Booster Vaksin Covid-19 Mulai 12 Januari, Ini Syarat, Biaya, dan
              Jenis Vaksinnya!
            </h2>
            <p className="mt-4 text-lg text-gray-600 px-6 md:px-0">
              Pemerintah Indonesia sudah memutuskan bahwa pemberian booster
              vaksin Covid-19 akan mulai diberikan pada masyarakat umum mulai 12
              Januari 2022. Namun, terdapat sejumlah kriteria dan syarat
              penerima vaksin booster. Siapa yang berhak
            </p>
            <div className="mt-6 flex justify-center md:justify-start">
              <button className=" text-primary-700 font-semibold px-4 py-2 rounded-md bg-primary-100 hover:bg-primary-50 shadow">
                Baca lebih lanjut
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">Acara Terbaru</h3>
          <div>
            <div>
              <label htmlFor="category" className="sr-only">
                Select category
              </label>
              <select
                name="category"
                id="category"
                autoComplete="family-name"
                className="focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              >
                <option value="Category 1">Category 1</option>
                <option value="Category 2">Category 2</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {isSuccess &&
            news?.map((singleNews) => (
              <div
                key={singleNews.title}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={singleNews.image}
                    alt={singleNews.title}
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between relative">
                  <div className="flex-1">
                    <div className="flex space-x-2">
                      {singleNews.tags.split(",").map((tag) => (
                        <p
                          key={tag}
                          className="text-sm font-medium text-primary-600"
                        >
                          <span className="hover:underline">{tag}</span>
                        </p>
                      ))}
                    </div>
                    <Link href={`/news/${singleNews.id}`}>
                      <a className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">
                          {singleNews.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {singleNews.description}
                        </p>
                      </a>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <div>
                        <span className="sr-only">Dayat</span>
                        <img
                          className="h-10 w-10 rounded-full object-cover"
                          src="https://github.com/dayatwork.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <span className="hover:underline">Dayat</span>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={singleNews.createdAt}>
                          {new Date(singleNews.createdAt).toLocaleDateString(
                            "id-ID",
                            {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </time>
                        {/* <span aria-hidden="true">&middot;</span>
                      <span>{article.readingTime} read</span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-md"
          >
            Lihat Semua
          </a>
        </div>
      </div>

      {/* <div className="max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">Acara Mendatang</h3>
          <div>
            <div>
              <label htmlFor="category" className="sr-only">
                Select category
              </label>
              <select
                name="category"
                id="category"
                autoComplete="family-name"
                className="focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              >
                <option value="Category 1">Category 1</option>
                <option value="Category 2">Category 2</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {articles.map((article) => (
            <div
              key={article.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={article.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary-600">
                    <a href={article.category.href} className="hover:underline">
                      {article.category.name}
                    </a>
                  </p>
                  <a href={article.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {article.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {article.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={article.author.href}>
                      <span className="sr-only">{article.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={article.author.imageUrl}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={article.author.href} className="hover:underline">
                        {article.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={article.datetime}>{article.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{article.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-md"
          >
            Lihat Semua
          </a>
        </div>
      </div> */}

      {/* <div className="max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">Acara Sebelumnya</h3>
          <div>
            <div>
              <label htmlFor="category" className="sr-only">
                Select category
              </label>
              <select
                name="category"
                id="category"
                autoComplete="family-name"
                className="focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              >
                <option value="Category 1">Category 1</option>
                <option value="Category 2">Category 2</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {articles.map((article) => (
            <div
              key={article.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={article.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary-600">
                    <a href={article.category.href} className="hover:underline">
                      {article.category.name}
                    </a>
                  </p>
                  <a href={article.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {article.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {article.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={article.author.href}>
                      <span className="sr-only">{article.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={article.author.imageUrl}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={article.author.href} className="hover:underline">
                        {article.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={article.datetime}>{article.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{article.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-md"
          >
            Lihat Semua
          </a>
        </div>
      </div> */}

      <Footer />
    </div>
  );
};

export default News;
