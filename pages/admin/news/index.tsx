/* eslint-disable @next/next/no-img-element */
import { useMemo } from "react";
import Link from "next/link";

import { AdminLayout } from "@/components/layouts";
import { PaginationTable } from "@/components/table/PaginationTable";
import { useNews } from "@/hooks/news";

/* eslint-disable-next-line */
export interface NewsProps {}

export function News(props: NewsProps) {
  const { data: news, isSuccess } = useNews();

  const data = useMemo(
    () =>
      isSuccess &&
      news?.map((singleNews) => ({
        id: singleNews.id,
        title: singleNews.title,
        status: singleNews.status,
        tags: singleNews.tags?.split(","),
        image: singleNews.image,
        createdAt: new Date(singleNews.createdAt),
        updatedAt: new Date(singleNews.updatedAt),
      })),
    [news, isSuccess]
  );
  const columns = useMemo(
    () => [
      {
        Header: "Title",
        Footer: "Title",
        accessor: "title",
      },
      {
        Header: "Image",
        Footer: "Image",
        accessor: "image",
        Cell: ({ value, row }: any) => (
          <img
            className="w-14 h-14 object-cover"
            src={value}
            alt={row.original.title}
          />
        ),
      },
      {
        Header: "Tags",
        Footer: "Tags",
        accessor: "tags",
        Cell: ({ value }: { value: string[] }) => (
          <div className="flex space-x-2">
            {value.map((item) => (
              <p
                key={item}
                className="py-0.5 px-2 rounded-md border border-gray-300 text-gray-700 font-semibold text-sm"
              >
                {item}
              </p>
            ))}
          </div>
        ),
      },
      {
        Header: "Status",
        Footer: "Status",
        accessor: "status",
        Cell: ({ value }: { value: string }) => (
          <span
            className={`uppercase text-xs font-semibold px-4 py-1 rounded-full ${
              value === "published"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {value}
          </span>
        ),
      },
      {
        Header: "Created At",
        Footer: "Created At",
        accessor: "createdAt",
        Cell: ({ value }: { value: Date }) =>
          value.toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
      },
      {
        Header: "Updated At",
        Footer: "Updated At",
        accessor: "updatedAt",
        Cell: ({ value }: { value: Date }) =>
          value.toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
      },
      {
        Header: "Action",
        Footer: "Action",
        Cell: ({ row }: any) => (
          <div className="flex items-center space-x-4">
            <Link href={`/admin/news/${row.original.id}`}>
              <a className="rounded-md px-4 py-1 bg-primary-600 text-white hover:bg-primary-700 text-sm">
                Details
              </a>
            </Link>
            {/* <button className="p-2 rounded-lg hover:bg-gray-100">
              <DotsVerticalIcon className="w-5 h-5 text-gray-600" />
            </button> */}
          </div>
        ),
      },
    ],
    []
  );

  return (
    <AdminLayout>
      <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
        <h3 className="text-2xl leading-6 font-bold text-gray-900">News</h3>
        <div className="mt-3 sm:mt-0 sm:ml-4">
          <Link href="/admin/news/add">
            <a className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              Add New News
            </a>
          </Link>
        </div>
      </div>
      <div>
        <div className="mt-4 overflow-hidden p-1">
          <PaginationTable
            showFooter={false}
            data={data || []}
            columns={columns}
            searchable={true}
            pagination={true}
            extraPaddingBottom={false}
            dense={true}
          />
        </div>
      </div>
    </AdminLayout>
  );
}

export default News;
