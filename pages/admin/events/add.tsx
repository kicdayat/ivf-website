/* eslint-disable @next/next/no-img-element */
import { FormEvent, useCallback, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Tab } from "@headlessui/react";
import { useDropzone } from "react-dropzone";
import { useQueryClient } from "react-query";
import { PhotographIcon } from "@heroicons/react/outline";

import { AdminLayout } from "@/components/layouts";
import {
  FormLabel,
  Input,
  Textarea,
  Switch,
  FormHelperText,
} from "@/components/forms";
import { Button } from "@/components/elements";

const RichText = dynamic(() => import("@/components/rich-text/RichText"), {
  ssr: false,
});

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

/* eslint-disable-next-line */
export interface AddNewEventProps {}

export function AddNewEvent(props: AddNewEventProps) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState<any>();
  const [eventDate, setEventDate] = useState("");
  const [published, setPublished] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    if (acceptedFiles?.length) {
      setImage(acceptedFiles[0]);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const status = published ? "published" : "unpublished";

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("content", content);
    formData.append("status", status);
    formData.append("tags", tags);
    formData.append("image", image);
    formData.append("eventDate", eventDate);

    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/v1/events", {
        method: "POST",
        body: formData,
      });
      await res.json();
      await queryClient.invalidateQueries("events");
      setIsLoading(false);
      router.push("/admin/events");
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="py-4">
        <Link href="/admin/events">
          <a className="block mb-2 text-sm text-primary-700 hover:underline">
            &larr; Back to event list
          </a>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Add New Event</h1>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <form onSubmit={handleSubmit}>
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
                <FormLabel htmlFor="event-date">Event Date</FormLabel>
                <div className="mt-1">
                  <Input
                    id="event-date"
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <FormLabel htmlFor="tags">Tags</FormLabel>
                <div className="mt-1">
                  <Input
                    id="tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                  />
                </div>
                <FormHelperText>
                  Separate by comma (ex: ivf,clinic)
                </FormHelperText>
              </div>

              <div>
                <FormLabel htmlFor="image">image</FormLabel>
                <div className="mt-1 flex space-x-4">
                  {image ? (
                    <div className="flex flex-col items-stretch space-y-1">
                      <img
                        src={URL.createObjectURL(image as any)}
                        alt="preview image"
                        className="w-40"
                      />
                      <button
                        className="py-1 bg-red-100 hover:bg-red-200 text-red-600 transition rounded-md text-sm font-semibold"
                        onClick={() => setImage("")}
                      >
                        Clear
                      </button>
                    </div>
                  ) : null}
                  <div
                    className=" flex-1 border-dashed border-2 flex justify-center items-center rounded-md"
                    {...getRootProps()}
                  >
                    <input id="image" {...getInputProps()} />
                    {isDragActive ? (
                      <div>
                        <p>Drop the files here ...</p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center py-10">
                        <PhotographIcon className="w-10 h-10 text-gray-400" />
                        <p>
                          {`Drag 'n' drop image here, or click to select file`}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <FormLabel htmlFor="content">Content</FormLabel>
                <div className="mt-1">
                  <RichText value={content} onChange={setContent} />
                </div>
              </div>

              <div>
                <FormLabel id="status">Publish</FormLabel>
                <div className="mt-1">
                  <Switch
                    id="status"
                    checked={published}
                    onCheckedChange={setPublished}
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <Button type="submit" isLoading={isLoading}>
                Save
              </Button>
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
                <EventCard
                  date={new Date().toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                  title={title || "Title"}
                  description={description || "Description"}
                  id={1}
                  image={
                    image
                      ? URL.createObjectURL(image)
                      : "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
                  }
                />
              </Tab.Panel>
              <Tab.Panel className="p-2">
                <EventPage
                  date={new Date().toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                  title={title || "Title"}
                  description={description || "Description"}
                  id={1}
                  image={
                    image
                      ? URL.createObjectURL(image)
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

export default AddNewEvent;

export interface EventCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

export const EventCard = (props: EventCardProps) => {
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

export interface EventPageProps {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  content: string;
}

export const EventPage = (props: EventPageProps) => {
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
