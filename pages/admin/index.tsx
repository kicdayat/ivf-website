import { AdminLayout } from "@/components/layouts";

/* eslint-disable-next-line */
export interface AdminProps {}

export const Admin: React.FC<AdminProps> = ({ children }) => {
  return <AdminLayout></AdminLayout>;
};

export default Admin;
