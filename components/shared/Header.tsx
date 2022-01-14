/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from "react";
import Link from "next/link";
import { Disclosure, Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import Banner from "./Banner";

const departmentsAndServices = [
  {
    name: "Layanan Medis",
    description: "Learn about tips, product updates and company culture.",
    href: "/medical-service",
  },
  {
    name: "Layanan Penunjang",
    description: "Learn about tips, product updates and company culture.",
    href: "/support-service",
  },
  {
    name: "Fasilitas Klinik",
    description:
      "Get all of your questions answered in our forums of contact support.",
    href: "/facility",
  },
];

const patients = [
  {
    name: "Semua Fitur Pasien",
    description: "Learn about tips, product updates and company culture.",
    href: "#",
  },
  {
    name: "Download Apps",
    description:
      "Get all of your questions answered in our forums of contact support.",
    href: "#",
  },
  {
    name: "Promosi",
    description:
      "Get all of your questions answered in our forums of contact support.",
    href: "#",
  },
  {
    name: "Berikan Saran",
    description:
      "Get all of your questions answered in our forums of contact support.",
    href: "#",
  },
  {
    name: "FAQ",
    description:
      "Get all of your questions answered in our forums of contact support.",
    href: "#",
  },
];

const articles = [
  // {
  //   name: "Update Terbaru",
  //   description: "Learn about tips, product updates and company culture.",
  //   href: "/latest-articles",
  // },
  {
    name: "Acara",
    description:
      "Get all of your questions answered in our forums of contact support.",
    href: "/events",
  },
  {
    name: "News",
    description:
      "Get all of your questions answered in our forums of contact support.",
    href: "/news",
  },
  {
    name: "Artikel Kesehatan",
    description:
      "Get all of your questions answered in our forums of contact support.",
    href: "/articles",
  },
  {
    name: "Majalah",
    description:
      "Get all of your questions answered in our forums of contact support.",
    href: "/magazines",
  },
];

const accessAndBook = [
  {
    name: "Lokasi & Petunjuk Arah",
    description: "Learn about tips, product updates and company culture.",
    href: "#",
  },
  {
    name: "Buat Janji",
    description:
      "Get all of your questions answered in our forums of contact support.",
    href: "#",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {showBanner && <Banner onClose={() => setShowBanner(false)} />}
      {/* <Banner onClose={() => setShowBanner(false)} /> */}
      <div className="bg-white">
        <div className="max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <ul className="flex justify-end space-x-6 text-sm py-3 px-2">
            <li>031-123123</li>
            <li>
              <Link href="/about-us">
                <a className="hover:underline">Tentang Kami</a>
              </Link>
            </li>
            <li>
              <Link href="/help">
                <a className="hover:underline">Butuh Bantuan?</a>
              </Link>
            </li>
            <li>
              <Link href="/career">
                <a className="hover:underline">Karir</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Popover as="header" className="bg-white">
        {({ open }) => (
          <>
            <div className="">
              <div className="max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-0 pb-3 flex items-center justify-center lg:justify-between">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <Link href="/">
                    <a>
                      <span className="sr-only">ASHA IVF</span>
                      <img
                        className="h-8 w-auto"
                        src="/asha-ivf.png"
                        alt="ASHA IVF"
                      />
                    </a>
                  </Link>
                </div>

                {/* Right section on desktop */}
                <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5 space-x-2">
                  <div className="max-w-xs w-full mx-auto">
                    <label htmlFor="desktop-search" className="sr-only">
                      Search
                    </label>
                    <div className="relative text-white focus-within:text-gray-600">
                      <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                        <SearchIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="desktop-search"
                        className="block w-full bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-gray-300 rounded-md leading-5 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-opacity-100 focus:placeholder-gray-500 sm:text-sm focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Search"
                        type="search"
                        name="search"
                      />
                    </div>
                  </div>

                  <div className="w-28">
                    <label htmlFor="language" className="sr-only">
                      Select Language
                    </label>
                    <select
                      name="language"
                      id="language"
                      autoComplete="family-name"
                      className="focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    >
                      <option value="ID">ID</option>
                      <option value="EN">EN</option>
                    </select>
                  </div>

                  {/* Profile dropdown */}
                  <a
                    href={process.env.NEXT_PUBLIC_PATIENT_APP_URL}
                    className="px-4 py-1.5 bg-primary-500 hover:bg-primary-400 transition font-semibold rounded-md"
                  >
                    Login
                  </a>
                </div>

                {/* Search */}
                <div className="flex-1 min-w-0 px-12 lg:hidden">
                  <div className="max-w-xs w-full mx-auto">
                    <label htmlFor="desktop-search" className="sr-only">
                      Search
                    </label>
                    <div className="relative text-gray-400 focus-within:text-gray-600">
                      <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                        <SearchIcon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <input
                        id="desktop-search"
                        className="block w-full bg-gray-100 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:ring-2 focus:ring-primary-500 sm:text-sm"
                        placeholder="Search"
                        type="search"
                        name="search"
                      />
                    </div>
                  </div>
                </div>

                {/* Menu button */}
                <div className="absolute right-4 flex-shrink-0 lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="bg-transparent p-2 rounded-md inline-flex items-center justify-center text-primary-500 hover:text-black hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
              </div>
              <div className="px-4 sm:px-6 lg:px-8 hidden lg:block bg-primary-500 border-t border-white border-opacity-20 py-3 ">
                <div className="max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  {/* Navbar */}
                  <Popover.Group
                    as="nav"
                    className="hidden md:flex space-x-4 justify-between"
                  >
                    <Link href="/">
                      <a className="text-base font-medium text-primary-900 hover:text-white p-2">
                        Home
                      </a>
                    </Link>
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open ? "text-primary-900" : "text-primary-900",
                              "group bg-transparent rounded-md inline-flex items-center text-base font-medium hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 p-2"
                            )}
                          >
                            <span>Departemen & Layanan</span>
                            <ChevronDownIcon
                              className={classNames(
                                open ? "text-primary-900" : "text-primary-900",
                                "ml-2 h-5 w-5 group-hover:text-white"
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                  {departmentsAndServices.map((item) => (
                                    <Link key={item.name} href={item.href}>
                                      <a className="-m-3 p-2 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                                        <p className="text-base font-medium text-gray-900">
                                          {item.name}
                                        </p>
                                        {/* <p className="mt-1 text-sm text-gray-500">
                                          {item.description}
                                        </p> */}
                                      </a>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                    <Link href="/our-doctor">
                      <a className="text-base font-medium text-primary-900 hover:text-white p-2">
                        Dokter Kami
                      </a>
                    </Link>

                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open ? "text-primary-900" : "text-primary-900",
                              "group bg-transparent rounded-md inline-flex items-center text-base font-medium hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 p-2"
                            )}
                          >
                            <span>Pasien & Pengunjung</span>
                            <ChevronDownIcon
                              className={classNames(
                                open ? "text-primary-900" : "text-primary-900",
                                "ml-2 h-5 w-5 group-hover:text-white"
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                  {patients.map((item) => (
                                    <a
                                      key={item.name}
                                      href={item.href}
                                      className="-m-3 p-2 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                                    >
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                      {/* <p className="mt-1 text-sm text-gray-500">
                                          {item.description}
                                        </p> */}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>

                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open ? "text-primary-900" : "text-primary-900",
                              "group bg-transparent rounded-md inline-flex items-center text-base font-medium hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 p-2"
                            )}
                          >
                            <span>Artikel & Berita</span>
                            <ChevronDownIcon
                              className={classNames(
                                open ? "text-primary-900" : "text-primary-900",
                                "ml-2 h-5 w-5 group-hover:text-white"
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                  {articles.map((item) => (
                                    <Link key={item.name} href={item.href}>
                                      <a className="-m-3 p-2 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                                        <p className="text-base font-medium text-gray-900">
                                          {item.name}
                                        </p>
                                        {/* <p className="mt-1 text-sm text-gray-500">
                                          {item.description}
                                        </p> */}
                                      </a>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>

                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open ? "text-primary-900" : "text-primary-900",
                              "group bg-transparent rounded-md inline-flex items-center text-base font-medium hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 p-2"
                            )}
                          >
                            <span>Akses & Buat Janji</span>
                            <ChevronDownIcon
                              className={classNames(
                                open ? "text-primary-900" : "text-primary-900",
                                "ml-2 h-5 w-5 group-hover:text-white"
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                  <Link href="/location">
                                    <a className="-m-3 p-2 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                                      <p className="text-base font-medium text-gray-900">
                                        Lokasi & Petunjuk Arah
                                      </p>
                                      {/* <p className="mt-1 text-sm text-gray-500">
                                          {item.description}
                                        </p> */}
                                    </a>
                                  </Link>
                                  <a
                                    href={`${process.env.NEXT_PUBLIC_PATIENT_APP_URL}/booking`}
                                    className="-m-3 p-2 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                                  >
                                    <p className="text-base font-medium text-gray-900">
                                      Buat Janji
                                    </p>
                                    {/* <p className="mt-1 text-sm text-gray-500">
                                          {item.description}
                                        </p> */}
                                  </a>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  </Popover.Group>
                </div>
              </div>
            </div>

            <Transition.Root as={Fragment}>
              <div className="lg:hidden">
                <Transition.Child
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="duration-150 ease-in"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Overlay className="z-20 fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <Transition.Child
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-150 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    className="z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"
                  >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
                      <div className="pt-3 pb-2">
                        <div className="flex items-center justify-between px-4">
                          <div>
                            <a href="#">
                              <span className="sr-only">ASHA IVF</span>
                              <img
                                className="h-8 w-auto"
                                src="/logo-asli.png"
                                alt="ASHA IVF"
                              />
                            </a>
                          </div>
                          <div className="-mr-2">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                              <span className="sr-only">Close menu</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                          </div>
                        </div>
                        <div className="mt-3 px-2 space-y-3">
                          <div>
                            <a
                              href="#"
                              className={classNames(
                                false
                                  ? "bg-gray-100 text-gray-900"
                                  : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                "group w-full flex items-center pl-7 pr-2 py-2 text-base font-medium rounded-md"
                              )}
                            >
                              Home
                            </a>
                          </div>
                          <Disclosure as="div" className="space-y-1">
                            {({ open }) => (
                              <>
                                <Disclosure.Button
                                  className={classNames(
                                    false
                                      ? "bg-gray-100 text-gray-900"
                                      : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                    "group w-full flex items-center pr-2 py-2 text-left text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                  )}
                                >
                                  <svg
                                    className={classNames(
                                      open
                                        ? "text-gray-400 rotate-90"
                                        : "text-gray-300",
                                      "mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                                    )}
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M6 6L14 10L6 14V6Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                  Department & Layanan
                                </Disclosure.Button>
                                <Disclosure.Panel className="space-y-1">
                                  {departmentsAndServices.map((subItem) => (
                                    <Disclosure.Button
                                      key={subItem.name}
                                      as="a"
                                      href={subItem.href}
                                      className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                                    >
                                      {subItem.name}
                                    </Disclosure.Button>
                                  ))}
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                          <div>
                            <a
                              href="#"
                              className={classNames(
                                false
                                  ? "bg-gray-100 text-gray-900"
                                  : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                "group w-full flex items-center pl-7 pr-2 py-2 text-base font-medium rounded-md"
                              )}
                            >
                              Dokter Kami
                            </a>
                          </div>
                          <Disclosure as="div" className="space-y-1">
                            {({ open }) => (
                              <>
                                <Disclosure.Button
                                  className={classNames(
                                    false
                                      ? "bg-gray-100 text-gray-900"
                                      : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                    "group w-full flex items-center pr-2 py-2 text-left text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                  )}
                                >
                                  <svg
                                    className={classNames(
                                      open
                                        ? "text-gray-400 rotate-90"
                                        : "text-gray-300",
                                      "mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                                    )}
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M6 6L14 10L6 14V6Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                  Pasien & Pengunjung
                                </Disclosure.Button>
                                <Disclosure.Panel className="space-y-1">
                                  {patients.map((subItem) => (
                                    <Disclosure.Button
                                      key={subItem.name}
                                      as="a"
                                      href={subItem.href}
                                      className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                                    >
                                      {subItem.name}
                                    </Disclosure.Button>
                                  ))}
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                          <Disclosure as="div" className="space-y-1">
                            {({ open }) => (
                              <>
                                <Disclosure.Button
                                  className={classNames(
                                    false
                                      ? "bg-gray-100 text-gray-900"
                                      : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                    "group w-full flex items-center pr-2 py-2 text-left text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                  )}
                                >
                                  <svg
                                    className={classNames(
                                      open
                                        ? "text-gray-400 rotate-90"
                                        : "text-gray-300",
                                      "mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                                    )}
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M6 6L14 10L6 14V6Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                  Artikel & Berita
                                </Disclosure.Button>
                                <Disclosure.Panel className="space-y-1">
                                  {articles.map((subItem) => (
                                    <Disclosure.Button
                                      key={subItem.name}
                                      as="a"
                                      href={subItem.href}
                                      className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                                    >
                                      {subItem.name}
                                    </Disclosure.Button>
                                  ))}
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                          <Disclosure as="div" className="space-y-1">
                            {({ open }) => (
                              <>
                                <Disclosure.Button
                                  className={classNames(
                                    false
                                      ? "bg-gray-100 text-gray-900"
                                      : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                    "group w-full flex items-center pr-2 py-2 text-left text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                  )}
                                >
                                  <svg
                                    className={classNames(
                                      open
                                        ? "text-gray-400 rotate-90"
                                        : "text-gray-300",
                                      "mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                                    )}
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M6 6L14 10L6 14V6Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                  Akses & Buat Janji
                                </Disclosure.Button>
                                <Disclosure.Panel className="space-y-1">
                                  {accessAndBook.map((subItem) => (
                                    <Disclosure.Button
                                      key={subItem.name}
                                      as="a"
                                      href={subItem.href}
                                      className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                                    >
                                      {subItem.name}
                                    </Disclosure.Button>
                                  ))}
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        </div>
                        <div className="px-4 mt-2 mb-2">
                          <a
                            href="http://localhost:3001"
                            className="px-4 py-2 bg-primary-500 hover:bg-primary-400 transition font-semibold rounded-md w-full"
                          >
                            Login
                          </a>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition.Child>
              </div>
            </Transition.Root>
          </>
        )}
      </Popover>
    </>
  );
}
