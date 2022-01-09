/* eslint-disable @next/next/no-img-element */
import { ChangeEvent, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Tab } from "@headlessui/react";

import { AdminLayout } from "@/components/layouts";
import { FormLabel, Input, Textarea, Switch } from "@/components/forms";

const RichText = dynamic(() => import("@/components/rich-text/RichText"), {
  ssr: false,
});

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

/* eslint-disable-next-line */
export interface AddNewNewsProps {}

export function AddNewNews(props: AddNewNewsProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState<Blob | MediaSource | null>(
    null
  );
  const [content, setContent] = useState("");

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage(null);
  };

  console.log(content);

  return (
    <AdminLayout>
      <div className="py-4">
        <Link href="/admin/news">
          <a className="block mb-2 text-sm text-primary-700 hover:underline">
            &larr; Back to news list
          </a>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Add New News</h1>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <form>
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div>
                <FormLabel htmlFor="title">Title</FormLabel>
                <div className="mt-1">
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <FormLabel htmlFor="description">Description</FormLabel>
                <div className="mt-1">
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <FormLabel htmlFor="image">Image</FormLabel>
                <div className="mt-1">
                  <Input
                    id="title"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {}}
                  />
                </div>
              </div>

              {/* <div>
                <label className="block text-sm font-medium text-gray-700">
                  Image
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div> */}

              <div>
                <FormLabel htmlFor="content">Content</FormLabel>
                <div className="mt-1">
                  <RichText value={content} onChange={setContent} />
                </div>
              </div>

              <div>
                <FormLabel id="status">Publish</FormLabel>
                <div className="mt-1">
                  <Switch id="status" />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>

        <div>
          <Tab.Group>
            <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-sm leading-5 font-medium text-primary-700 rounded-lg",
                    "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primary-400 ring-white ring-opacity-60",
                    selected
                      ? "bg-white shadow"
                      : "text-gray-600 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                Preview Card
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-sm leading-5 font-medium text-primary-700 rounded-lg",
                    "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primary-400 ring-white ring-opacity-60",
                    selected
                      ? "bg-white shadow"
                      : "text-gray-600 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                Preview Page
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel className="p-2">
                {" "}
                <NewsCard
                  date={new Date().toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                  title={title || "Title"}
                  description={description || "Description"}
                  id={1}
                  image={
                    selectedImage
                      ? URL.createObjectURL(selectedImage)
                      : "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
                  }
                />
              </Tab.Panel>
              <Tab.Panel className="p-2">
                <NewsPage
                  date={new Date().toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                  title={title || "Title"}
                  description={description || "Description"}
                  id={1}
                  image={
                    selectedImage
                      ? URL.createObjectURL(selectedImage)
                      : "https://via.placeholder.com"
                  }
                  content={content}
                />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AddNewNews;

export interface NewsCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

export const NewsCard = (props: NewsCardProps) => {
  return (
    <div
      key={props.id}
      className="flex flex-col rounded-lg shadow-lg overflow-hidden max-w-[400px]"
    >
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={props.image}
          alt={props.title}
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          {/* <p className="text-sm font-medium text-primary-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p> */}
          <div className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{props.title}</p>
            <p className="mt-3 text-base text-gray-500">{props.description}</p>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <div>
              <span className="sr-only">Admin IVF</span>
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="/mini-logo.png"
                alt="ASHA IVF"
              />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              <span className="hover:underline">Admin IVF</span>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <span>{props.date}</span>
              {/* <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface NewsPageProps {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  content: string;
}

export const NewsPage = (props: NewsPageProps) => {
  return (
    <div className="bg-white shadow rounded-md p-6 mx-auto">
      <h1 className="text-2xl font-bold text-center">{props.title}</h1>
      <p className="text-gray-600 text-center">{props.date}</p>
      <div className="mt-6 flex justify-center">
        <img
          className="aspect-video object-cover"
          src={props.image}
          alt={props.title}
        />
      </div>
      <div
        className="mt-6 prose mx-auto prose-headings:text-center"
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </div>
  );
};
