/* eslint-disable @next/next/no-img-element */
import { FaTwitter, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
const navigation = {
  departments: [
    { name: "Layanan Penunjang", href: "#" },
    { name: "Fasilitas Klinik", href: "#" },
    { name: "Dokter Kami", href: "#" },
  ],
  patients: [
    { name: "Semua Fitur Pasien", href: "#" },
    { name: "Download Apps", href: "#" },
    { name: "Promosi", href: "#" },
    { name: "Saran", href: "#" },
    { name: "FAQ", href: "#" },
  ],
  articles: [
    { name: "Update Terbaru", href: "#" },
    { name: "Acara", href: "#" },
    { name: "News", href: "#" },
    { name: "Artikel Kesehatan", href: "#" },
    { name: "Majalah", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: FaFacebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: FaInstagram,
    },
    {
      name: "Twitter",
      href: "#",
      icon: FaTwitter,
    },
    {
      name: "Youtube",
      href: "#",
      icon: FaYoutube,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-gray" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                  departments
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.departments.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-100 hover:text-primary"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                  patients
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.patients.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-100 hover:text-primary"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                  articles
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.articles.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-100 hover:text-primary"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                  Legal
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-200 hover:text-primary"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            {/* <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
              Subscribe to our newsletter
            </h3>
            <p className="mt-4 text-base text-gray-100">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-primary-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary-500"
                >
                  Subscribe
                </button>
              </div>
            </form> */}

            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
              Download Apps
            </h3>
            <button>
              <img
                className="h-20"
                src="/google-play-badge.png"
                alt="google play"
              />
            </button>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-500 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-200 hover:text-primary"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-gray-200 md:mt-0 md:order-1">
            &copy; 2022 ASHA IVF Indonesia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
