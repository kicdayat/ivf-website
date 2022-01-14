/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const Location: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center py-10 flex-col items-center mb-20">
          <h2 className="mb-6 text-3xl font-bold">Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9008118968436!2d107.61650741477274!3d-6.902464195012473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64c5e8866e5%3A0x37be7ac9d575f7ed!2sGedung%20Sate!5e0!3m2!1sid!2sid!4v1642146653461!5m2!1sid!2sid"
            className="aspect-video max-w-3xl w-full"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>
        <div className="mb-20">
          <h3 className="mb-4 text-2xl font-bold">Akses Menuju Klinik</h3>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <img
                className="aspect-video object-cover rounded-2xl"
                src="https://images.unsplash.com/photo-1527295110-5145f6b148d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
                alt="Transportation"
              />
            </div>
            <div>
              <p className="leading-loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                blanditiis provident non, quisquam sed optio dignissimos
                perferendis recusandae! Sed accusamus nesciunt sequi deserunt
                nisi earum tenetur fugit distinctio laborum pariatur culpa,
                molestiae accusantium libero minus vitae vel laudantium quia a
                dolores provident saepe soluta voluptates inventore! Minima est
                dolore pariatur! Beatae quibusdam nemo, provident nam
                necessitatibus maxime a qui nostrum quam numquam facere?
                Accusantium perferendis, officia et minus architecto
                exercitationem ea doloribus fugit, ab tempore voluptatum! Magni
                earum dolorum tenetur sint adipisci necessitatibus quidem sit,
                aliquam inventore esse itaque autem?
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Location;
