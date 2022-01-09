/* eslint-disable @next/next/no-img-element */
import { useMemo } from "react";
import Link from "next/link";

import { AdminLayout } from "@/components/layouts";
import { PaginationTable } from "@/components/table/PaginationTable";

/* eslint-disable-next-line */
export interface EventProps {}

export function Event(props: EventProps) {
  const data = useMemo(
    () => [
      {
        id: 1,
        title: "Event 1",
        tags: ["discount", "hospital"],
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod incidunt vero libero nesciunt commodi sapiente pariatur quo! Sed, consequuntur laborum illo velit quisquam dolores nihil soluta sit aliquam enim incidunt.",
        image:
          "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        status: "published",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: "Event 2",
        tags: ["discount", "hospital"],
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod incidunt vero libero nesciunt commodi sapiente pariatur quo! Sed, consequuntur laborum illo velit quisquam dolores nihil soluta sit aliquam enim incidunt.",
        image:
          "https://images.unsplash.com/photo-1626809259716-29eadc96fea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        status: "draft",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    []
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
        Cell: () => (
          <div className="flex items-center space-x-4">
            <Link href="/admin/events/123">
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
        <h3 className="text-2xl leading-6 font-bold text-gray-900">Event</h3>
        <div className="mt-3 sm:mt-0 sm:ml-4">
          <Link href="/admin/events/add">
            <a className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              Add New Event
            </a>
          </Link>
        </div>
      </div>
      <div>
        <div className="mt-4 overflow-hidden p-1">
          <PaginationTable
            showFooter={false}
            data={data}
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

export default Event;
