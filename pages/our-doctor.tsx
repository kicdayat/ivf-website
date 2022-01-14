/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const doctors = [
  {
    name: "Dr. Whitney Francis",
    role: "Dokter Obgyn",
    imageUrl:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Dr. Vincenzo",
    role: "Dokter Obgyn",
    imageUrl:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Dr. Alice",
    role: "Dokter Obgyn",
    imageUrl:
      "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=676&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  // More doctors...
];

const OurDoctor: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-3xl lg:max-w-7xl mx-auto  items-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 p-8 bg-gray-100 rounded-2xl mb-20">
          <div>
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/Kykj3k2wBXg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Sambutan Direktur</h2>
            <p className="leading-loose mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              mollitia in dignissimos voluptate labore reprehenderit possimus
              fugit ipsam delectus explicabo sed cum, unde vero quaerat velit
              voluptatem ullam natus consectetur nihil voluptatum? Placeat natus
              sunt reiciendis fuga incidunt distinctio, vero esse saepe tempora
              excepturi quo quasi eaque ex officia inventore totam minima
              impedit, voluptatibus sed. Amet voluptatum ipsa cumque vero
              molestiae eligendi maiores, ducimus ullam nostrum ipsam. Quos,
              deserunt autem.
            </p>
          </div>
        </div>
        <div className="space-y-12 mb-20">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-center">
              Tim Klinik
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-center">
              Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet
              lectus sit pretium egestas vel mattis neque.
            </p>
          </div>
          <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
            {doctors.map((doctor) => (
              <li key={doctor.name}>
                <div className="space-y-6">
                  <img
                    className="mx-auto h-40 w-40 rounded-2xl xl:w-56 xl:h-56 object-cover"
                    src={doctor.imageUrl}
                    alt=""
                  />
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3 className="text-center">{doctor.name}</h3>
                      <p className="text-primary-600 text-center">
                        {doctor.role}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurDoctor;
