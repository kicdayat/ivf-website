/* eslint-disable @next/next/no-img-element */
import { FormEvent, useEffect, useCallback, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useQueryClient } from "react-query";
import { useDropzone } from "react-dropzone";
import { PhotographIcon } from "@heroicons/react/outline";

import { AdminLayout } from "@/components/layouts";
import { FormLabel, Input, Textarea, Switch } from "@/components/forms";
import { AlertButton, Button } from "@/components/elements";
import { useSingleNews } from "@/hooks/news";

const RichText = dynamic(() => import("@/components/rich-text/RichText"), {
  ssr: false,
});

/* eslint-disable-next-line */
export interface EditNewsProps {}

export function EditNews(props: EditNewsProps) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState<any>();
  const [prevImage, setPrevImage] = useState("");
  const [published, setPublished] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    if (acceptedFiles?.length) {
      setImage(acceptedFiles[0]);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const { data: news } = useSingleNews(String(router.query.id || ""));

  useEffect(() => {
    if (news) {
      setTitle(news.title);
      setDescription(news.description);
      setContent(news.content);
      setTags(news.tags);
      setPublished(news.status === "published");
      setPrevImage(news.image);
    }
  }, [news]);

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

    setIsLoading(true);
    try {
      const res = await fetch(
        `http://localhost:5000/api/v1/news/${router.query.id}`,
        {
          method: "PUT",
          body: formData,
        }
      );
      await res.json();
      await queryClient.invalidateQueries("news");
      setIsLoading(false);
      router.push("/admin/news");
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `http://localhost:5000/api/v1/news/${router.query.id}`,
        {
          method: "DELETE",
        }
      );
      await res.json();
      await queryClient.invalidateQueries("news");
      setIsLoading(false);
      router.push("/admin/news");
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="py-4">
        <Link href="/admin/news">
          <a className="block mb-2 text-sm text-primary-700 hover:underline">
            &larr; Back to news list
          </a>
        </Link>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Edit News</h1>
          <AlertButton
            buttonText="Delete"
            actionText="Yes, delete"
            title="Are you absolutely sure?"
            description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
            onActionClick={handleDelete}
          />
        </div>
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
                <FormLabel htmlFor="image">image</FormLabel>
                <div className="mt-1 flex space-x-4">
                  {image ? (
                    <div className="flex flex-col items-stretch space-y-1">
                      <img
                        src={URL.createObjectURL(image)}
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
                  ) : prevImage ? (
                    <div className="flex flex-col items-stretch space-y-1">
                      <img
                        src={prevImage}
                        alt="preview image"
                        className="w-40"
                      />
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
      </div>
    </AdminLayout>
  );
}

export default EditNews;
