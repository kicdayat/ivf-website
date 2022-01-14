/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";
import { CheckIcon } from "@heroicons/react/outline";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/home/Hero";
import { useArticles } from "@/hooks/article";

const patientFeatures = [
  "Potenti felis, in cras at at ligula nunc. ",
  "Orci neque eget pellentesque.",
  "Donec mauris sit in eu tincidunt etiam.",
  "Faucibus volutpat magna.",
];

const doctorFeatures = [
  "Id sed tellus in varius quisque.",
  "Risus egestas faucibus.",
  "Risus cursus ullamcorper.",
];

const Home: NextPage = () => {
  const { data: articles, isSuccess } = useArticles();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div className="max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 py-10 mb-10 mt-6">
          <Link href="/our-doctor">
            <a className="bg-gray-100 shadow p-6 text-center font-semibold text-lg group">
              <span className="pb-2 border-b-4 border-transparent group-hover:border-primary-500 transition">
                Dokter Kami
              </span>
            </a>
          </Link>
          <Link href="/location">
            <a className="bg-gray-100 shadow p-6 text-center font-semibold text-lg group">
              <span className="pb-2 border-b-4 border-transparent group-hover:border-primary-500 transition">
                Petunjuk Arah Menuju Klinik
              </span>
            </a>
          </Link>
          <a
            href={`${process.env.NEXT_PUBLIC_PATIENT_APP_URL}/booking`}
            className="bg-gray-100 shadow p-6 text-center font-semibold text-lg group"
          >
            <span className="pb-2 border-b-4 border-transparent group-hover:border-primary-500 transition">
              Buat Janji
            </span>
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 mb-10">
          <div>
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/F_ssj7-8rYg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">In-Vitro Fertilization</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
              quam ipsa eius blanditiis aliquam similique nostrum, magnam facere
              nisi autem reiciendis maiores ad maxime inventore. Deserunt
              dolores praesentium sint, aperiam vel voluptates eaque, corporis
              commodi, facilis ad amet quae sed minima voluptatum doloribus quos
              veritatis consectetur atque! Accusamus laudantium voluptatibus
              recusandae animi quibusdam. Officia non quisquam optio, saepe
              magnam rem dolores. Nobis sint non sapiente ipsam doloribus
              architecto culpa saepe, modi impedit repellat iste, nesciunt
              fugiat? Voluptates labore similique soluta possimus fugiat iure
              sed, totam non ut laboriosam error nesciunt.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 mb-10 py-10 max-w-5xl mx-auto">
          <div className="bg-gray-100 py-6 px-8 rounded-xl shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Untuk pasien
            </h3>
            <div className="flex justify-center">
              <a className="px-6 py-2 bg-primary-500 font-semibold hover:bg-primary-400 text-sm rounded-md cursor-pointer">
                Daftar Sebagai Pasien
              </a>
            </div>
            <ul className="mt-8 space-y-4">
              {patientFeatures.map((feature) => (
                <li key={feature} className="flex space-x-3">
                  <CheckIcon
                    className="flex-shrink-0 h-6 w-6 text-primary-500"
                    aria-hidden="true"
                  />
                  <span className="text-gray-500">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-100 py-6 px-8 rounded-xl shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Untuk Dokter
            </h3>
            <div className="flex justify-center">
              <a className="px-6 py-2 bg-primary-500 font-semibold hover:bg-primary-400 text-sm rounded-md cursor-pointer">
                Daftar Sebagai Dokter
              </a>
            </div>
            <ul className="mt-8 space-y-4">
              {doctorFeatures.map((feature) => (
                <li key={feature} className="flex space-x-3">
                  <CheckIcon
                    className="flex-shrink-0 h-6 w-6 text-primary-500"
                    aria-hidden="true"
                  />
                  <span className="text-gray-500">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="px-6 mb-10">
          <h3 className="mb-4 text-2xl font-bold">Artikel Terbaru</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {isSuccess &&
              articles?.map((event) => (
                <div
                  key={event.title}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={event.image}
                      alt={event.title}
                    />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between relative">
                    <div className="flex-1">
                      <div className="flex space-x-2">
                        {event.tags.split(",").map((tag) => (
                          <p
                            key={tag}
                            className="text-sm font-medium text-primary-600"
                          >
                            <span className="hover:underline">{tag}</span>
                          </p>
                        ))}
                      </div>
                      <Link href={`/articles/${event.id}`}>
                        <a className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900">
                            {event.title}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            {event.description}
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
                          <time dateTime={event.createdAt}>
                            {new Date(event.createdAt).toLocaleDateString(
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
        </div>
        <div className="relative sm:py-16">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative rounded-2xl px-6 py-10 bg-primary-600 overflow-hidden shadow-xl sm:px-12 sm:py-20">
              <div className="relative">
                <div className="sm:text-center">
                  <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                    Get Update For Our Event Everyday
                  </h2>
                  <p className="mt-6 mx-auto max-w-2xl text-lg text-primary-100">
                    Sagittis scelerisque nulla cursus in enim consectetur quam.
                    Dictum urna sed consectetur neque tristique pellentesque.
                  </p>
                </div>
                <form
                  action="#"
                  className="mt-12 sm:mx-auto sm:max-w-lg sm:flex"
                >
                  <div className="min-w-0 flex-1">
                    <label htmlFor="cta-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="cta-email"
                      type="email"
                      className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="block w-full rounded-md border border-transparent px-5 py-3 bg-primary-500 text-base font-medium text-white shadow hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 sm:px-10"
                    >
                      Notify me
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
