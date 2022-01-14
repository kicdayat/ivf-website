/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const AboutUs: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-3xl lg:max-w-7xl mx-auto  items-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 p-8 bg-gray-100 rounded-2xl mb-20">
          <div>
            <h2 className="text-3xl font-bold">Asha IVF Indonesia</h2>
            <p className="leading-loose mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
              eos deserunt ducimus laborum molestias quaerat quae consequatur
              cupiditate tempora? Fugit, sit saepe voluptates, fuga voluptatem
              dolores tempore illo iste doloremque consequuntur ex, quasi
              similique exercitationem quaerat nihil perferendis possimus.
              Reiciendis at, a placeat, aliquid excepturi sequi tenetur nostrum
              qui consectetur sint doloremque optio. Est eius voluptatem iste
              minima consequatur error, eaque alias commodi aspernatur libero
              ducimus suscipit tempore adipisci ipsa officia assumenda
              necessitatibus aliquam, eum accusamus. Perspiciatis quibusdam
              laudantium ipsam.
            </p>
            <a
              href={`${process.env.NEXT_PUBLIC_PATIENT_APP_URL}/booking`}
              className="mt-4 inline-block text-sm font-semibold px-6 py-2 rounded-md bg-primary-300 text-primary-800 hover:bg-primary-100 shadow"
            >
              Buat Janji Temu Dokter
            </a>
          </div>
          <div>
            <img
              className="rounded-2xl"
              src="https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt="ASHA IVF"
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-center mb-10">Visi</h2>
          <div className="grid grid-cols-3 gap-10">
            <div className="bg-gray-100 py-6 px-8 rounded-lg shadow">
              <p className="text-3xl font-bold text-primary-500 mb-4 border-b-4 pb-1 border-brand-gray inline-block">
                01
              </p>
              <h3 className="text-xl font-bold  mb-3 text-center">
                Klinik Terbaik
              </h3>
              <p className="mt-4 leading-loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                asperiores eaque nisi libero laboriosam soluta delectus harum
                consequuntur in, sit nulla quam ea fugiat illo natus quisquam
                provident incidunt doloribus!
              </p>
            </div>
            <div className="bg-gray-100 py-6 px-8 rounded-lg shadow">
              <p className="text-3xl font-bold text-primary-500 mb-4 border-b-4 pb-1 border-brand-gray inline-block">
                02
              </p>
              <h3 className="text-xl font-bold  mb-3 text-center">
                Klinik Terbersih
              </h3>
              <p className="mt-4 leading-loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                asperiores eaque nisi libero laboriosam soluta delectus harum
                consequuntur in, sit nulla quam ea fugiat illo natus quisquam
                provident incidunt doloribus!
              </p>
            </div>
            <div className="bg-gray-100 py-6 px-8 rounded-lg shadow">
              <p className="text-3xl font-bold text-primary-500 mb-4 border-b-4 pb-1 border-brand-gray inline-block">
                03
              </p>
              <h3 className="text-xl font-bold  mb-3 text-center">
                Klinik Terpercaya
              </h3>
              <p className="mt-4 leading-loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                asperiores eaque nisi libero laboriosam soluta delectus harum
                consequuntur in, sit nulla quam ea fugiat illo natus quisquam
                provident incidunt doloribus!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 bg-brand-gray">
        <div className="max-w-3xl lg:max-w-7xl mx-auto  items-center py-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">
            Misi
          </h2>
          <ul className="max-w-xl mx-auto space-y-6">
            <li className="flex items-start space-x-6">
              <p className="text-3xl font-bold text-white mb-4 border-b-4 pb-1 border-primary-500 inline-block">
                01
              </p>
              <p className="leading-loose text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                ipsam eaque mollitia ad, harum eligendi id aspernatur iure
                perferendis aperiam, recusandae accusamus voluptates. Dolores
                sapiente esse quas commodi, quis natus vitae qui eveniet fugiat,
                necessitatibus quam facere doloremque, sit molestias.
              </p>
            </li>
            <li className="flex items-start space-x-6">
              <p className="text-3xl font-bold text-white mb-4 border-b-4 pb-1 border-primary-500 inline-block">
                02
              </p>
              <p className="leading-loose text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur eligendi doloribus quia, architecto officia veritatis
                unde nobis praesentium aliquam ad obcaecati velit inventore enim
                cupiditate quasi fuga dolore ullam natus. Beatae recusandae
                sequi dolore magnam numquam nemo obcaecati animi quos
                consequuntur! Iste consequuntur saepe at veniam assumenda ullam
                ab fugit.
              </p>
            </li>
            <li className="flex items-start space-x-6">
              <p className="text-3xl font-bold text-white mb-4 border-b-4 pb-1 border-primary-500 inline-block">
                03
              </p>
              <p className="leading-loose text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                quibusdam aperiam, voluptates molestiae amet aut hic itaque
                velit distinctio deleniti facilis nulla fuga corporis nesciunt
                animi rem, eligendi esse fugiat!
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-10">
        <div className="max-w-3xl lg:max-w-7xl mx-auto  items-center py-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10 ">Sejarah</h2>
          <div className="grid grid-cols-2 gap-14 px-8 py-2">
            <div>
              <p className="leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quibusdam alias est natus accusamus impedit possimus tenetur
                quo. Dolorem quas consequatur temporibus, enim repellat
                laudantium ad dolores laboriosam laborum quidem cum nihil
                consequuntur iste, id vel aut fugiat modi ipsum. Consequuntur?
              </p>
              <p className="leading-loose">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos quae, cupiditate consequuntur similique ratione
                exercitationem deserunt inventore. Earum cum expedita libero
                iusto pariatur, non debitis neque eveniet, incidunt modi officia
                provident perferendis ipsa, necessitatibus tempora voluptatibus
                deleniti! Sint eligendi, esse corporis commodi voluptatibus quod
                eum iusto quidem incidunt, reprehenderit dolorum eveniet
                nesciunt porro maiores nisi! Architecto quibusdam quam
                repellendus cum iste consequuntur voluptatibus. Sapiente, natus
                dignissimos. Excepturi, nesciunt sit eligendi facere, quae
                quaerat, tenetur nam a inventore dolor soluta explicabo
                consequatur et blanditiis laborum repellendus rem maiores eaque
                fugiat? Totam molestias, at est excepturi iste repudiandae
                voluptatem omnis ullam quod!
              </p>
            </div>
            <div>
              <img
                className="rounded-2xl aspect-square object-cover"
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
                alt="Asha IVF"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
