/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  ClipboardListIcon,
  CogIcon,
  MenuAlt2Icon,
  NewspaperIcon,
  PhotographIcon,
  TemplateIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Link from "next/link";

import { useAuth } from "@/contexts/authContext";

const navigation = [
  { name: "Dashboard", href: "dashboard", icon: TemplateIcon, current: false },
  { name: "Banners", href: "banners", icon: PhotographIcon, current: true },
  { name: "News", href: "news", icon: NewspaperIcon, current: false },
  {
    name: "Articles",
    href: "articles",
    icon: ClipboardListIcon,
    current: false,
  },
  { name: "Events", href: "events", icon: CalendarIcon, current: false },
  // { name: "Settings", href: "settings", icon: CogIcon, current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

/* eslint-disable-next-line */
export interface AdminLayoutProps {}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const { pathname, replace } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    replace("/admin/login");
  };

  return (
    <>
      <div className="h-full flex">
        {/* Narrow sidebar */}
        <div className="hidden w-28 bg-primary-700 overflow-y-auto md:block">
          <div className="w-full pb-6 flex flex-col items-center">
            <div className="self-stretch flex-shrink-0 flex items-center justify-center bg-white h-16  border-b border-gray-200 shadow-sm">
              <Link href="/">
                <a>
                  <img className="h-14" src="/mini-logo.png" alt="ASHA IVF" />
                </a>
              </Link>
            </div>
            <div className="flex-1 mt-6 w-full px-2 space-y-1">
              {navigation.map((item) => (
                <Link key={item.name} href={`/admin/${item.href}`}>
                  <a
                    className={classNames(
                      pathname === `/admin/${item.href}`
                        ? "bg-primary-800 text-white"
                        : "text-primary-100 hover:bg-primary-800 hover:text-white",
                      "group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium"
                    )}
                    aria-current={
                      pathname === `/admin/${item.href}` ? "page" : undefined
                    }
                  >
                    <item.icon
                      className={classNames(
                        pathname === `/admin/${item.href}`
                          ? "text-white"
                          : "text-primary-300 group-hover:text-white",
                        "h-6 w-6"
                      )}
                      aria-hidden="true"
                    />
                    <span className="mt-2">{item.name}</span>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-40 flex md:hidden"
            onClose={setMobileMenuOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative max-w-xs w-full bg-primary-700 pt-5 pb-4 flex-1 flex flex-col">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-1 right-0 -mr-14 p-1">
                    <button
                      type="button"
                      className="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Close sidebar</span>
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-shrink-0 px-4 flex items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                    alt="Workflow"
                  />
                </div>
                <div className="mt-5 flex-1 h-0 px-2 overflow-y-auto">
                  <nav className="h-full flex flex-col">
                    <div className="space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            pathname === `/admin/${item.href}`
                              ? "bg-primary-800 text-white"
                              : "text-primary-100 hover:bg-primary-800 hover:text-white",
                            "group py-2 px-3 rounded-md flex items-center text-sm font-medium"
                          )}
                          aria-current={
                            pathname === `/admin/${item.href}`
                              ? "page"
                              : undefined
                          }
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-white"
                                : "text-primary-300 group-hover:text-white",
                              "mr-3 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          <span>{item.name}</span>
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Content area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="w-full">
            <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
              <button
                type="button"
                className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 md:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="flex-1 flex justify-between px-4 sm:px-6">
                <div className="flex-1 flex items-center">
                  <div>
                    <p className="text-xl font-bold text-primary-700">
                      Admin Website
                    </p>
                    <p className="text-sm text-gray-900 font-bold">ASHA IVF</p>
                  </div>
                </div>
                <div className="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative flex-shrink-0">
                    <div>
                      <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {/* {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))} */}
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              My Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                              )}
                              onClick={handleLogout}
                            >
                              Logout
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </header>

          {/* Main content */}
          <div className="flex-1 flex items-stretch overflow-hidden min-h-[calc(100vh-64px)]">
            <div className="w-full py-4 px-4 sm:px-6 lg:px-8 bg-gray-50">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
