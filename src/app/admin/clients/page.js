"use client";
import React, { useEffect, useMemo, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import ProjectClientBox from "@/components/projectClientBox";
import AddClientComponent from "@/components/admin/addClientComponent";
import api from "@/lib/api";
import ProtectedAdmin from "@/components/admin/ProtectedAdmin";
import { toast } from "sonner";
import EmptyClient from "@/components/emptyClient";

function ClientTable() {
  const [isFetching, setIsFetching] = useState(true);

  const getdata = async () => {
    try {
      const res = await api.get("/client");
      setdata(res.data);
    } catch (error) {
      toast.error("Failed to load data");
    } finally {
      setIsFetching(false);
    }
  };
  const [data, setdata] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const [search, setSearch] = useState("");

  const filterData = useMemo(() => {
    if (!search.trim()) return data;

    const query = search.toLowerCase();

    return data.filter((item) => {
      return (
        item.name?.toLowerCase().includes(query) ||
        item.companyName?.toLowerCase().includes(query)
      );
    });
  }, [data, search]);

  return (
    <ProtectedAdmin>
      {isFetching ? null : (
        <div className="w-full">
          <div className="flex justify-between m-8">
            <div className=" text-start border border-gray-300 dark:bg-gray-800 dark:border-gray-700  w-[40%] bg-white rounded-lg flex flex-nowrap py-2 items-center  gap-4">
              <IoSearchOutline className=" ms-3" />
              <input
                id="password"
                type="text"
                placeholder="Search clients..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="focus:outline-none focus:border-0 w-full"
              />
            </div>

            <AddClientComponent refreshData={getdata} />
          </div>

          {filterData.length > 0 ? (
            <div className="m-6 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700  shadow-sm">
              <table className="min-w-[800px] w-full text-left text-sm border-collapse">
                <thead className="bg-gray-50 dark:bg-gray-800  text-gray-500 dark:text-gray-200 uppercase text-xs font-semibold">
                  <tr>
                    <th className="py-3 px-6">NAME</th>
                    <th className="py-3 px-6">COMPANY</th>
                    <th className="py-3 px-6">EMAIL</th>
                    <th className="py-3 px-6">PHONE</th>
                    <th className="py-3 px-6">PROJECTS</th>
                    <th className="py-3 px-6">STATUS</th>
                    <th className="py-3 px-6 text-center">ACTIONS</th>
                  </tr>
                </thead>
                <tbody className="bg-white  dark:bg-gray-700 divide-y divide-gray-100 dark:divide-gray-600">
                  {filterData?.map((item, index) => (
                    <ProjectClientBox
                      key={item.id || index}
                      id={item.id}
                      name={item.name}
                      company={item.companyName}
                      email={item.email}
                      phone={item.phone}
                      projects={item.projectCount}
                      status={item.status}
                      refreshData={getdata}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <EmptyClient />
          )}
        </div>
      )}
    </ProtectedAdmin>
  );
}

export default ClientTable;
