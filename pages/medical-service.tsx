/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const MedicalService: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <img
        className="h-80 object-cover w-full object-center"
        src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
        alt="bg"
      />
      <div className="max-w-3xl lg:max-w-7xl mx-auto  items-center py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center">Layanan Medis</h2>
        <div className="mt-10 grid grid-cols-3 gap-10 mb-10">
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow">
            <img
              className="aspect-[3/2] w-full object-cover"
              src="https://images.unsplash.com/photo-1577285930803-df9418bede68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1629&q=80"
              alt="IVF"
            />
            <div className="p-6">
              <h3 className="text-center font-bold text-2xl mb-2">
                Klinik IVF
              </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi maxime officiis debitis blanditiis qui quos
                perspiciatis doloremque officia nam recusandae?
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-sm font-semibold px-4 py-2 bg-primary-300 hover:bg-primary-100 transition text-primary-800 rounded-md"
              >
                Lihat Lebih
              </a>
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow">
            <img
              className="aspect-[3/2] w-full object-cover"
              src="https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt="Obgyn"
            />
            <div className="p-6">
              <h3 className="text-center font-bold text-2xl mb-2">
                Klinik Obgyn
              </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi maxime officiis debitis blanditiis qui quos
                perspiciatis doloremque officia nam recusandae?
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-sm font-semibold px-4 py-2 bg-primary-300 hover:bg-primary-100 transition text-primary-800 rounded-md"
              >
                Lihat Lebih
              </a>
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow">
            <img
              className="aspect-[3/2] w-full object-cover"
              src="https://images.unsplash.com/photo-1511948374796-056e8f289f34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Children"
            />
            <div className="p-6">
              <h3 className="text-center font-bold text-2xl mb-2">
                Klinik Anak
              </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi maxime officiis debitis blanditiis qui quos
                perspiciatis doloremque officia nam recusandae?
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-sm font-semibold px-4 py-2 bg-primary-300 hover:bg-primary-100 transition text-primary-800 rounded-md"
              >
                Lihat Lebih
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MedicalService;
