/* eslint-disable @next/next/no-img-element */
import { AdminLayout } from "@/components/layouts";
import { PaginationTable } from "@/components/table/PaginationTable";

/* eslint-disable-next-line */
export interface DashboardProps {}

export function Dashboard(props: DashboardProps) {
  return (
    <AdminLayout>
      <div className="pb-5 pt-2 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
        <h3 className="text-2xl leading-6 font-bold text-gray-900">
          Dashboard
        </h3>
      </div>
      <div>
        <dl className="rounded-lg bg-white shadow sm:grid sm:grid-cols-4">
          <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
              Banner
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-primary-600">
              4
            </dd>
          </div>
          <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
              News
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-primary-600">
              4
            </dd>
          </div>
          <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
              Article
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-primary-600">
              3
            </dd>
          </div>
          <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
              Event
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-primary-600">
              1
            </dd>
          </div>
        </dl>
      </div>
    </AdminLayout>
  );
}

export default Dashboard;
