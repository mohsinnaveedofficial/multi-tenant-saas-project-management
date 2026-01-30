"use client";
import React, { useEffect, useMemo, useState } from "react";
import { RiLayoutGrid2Line } from "react-icons/ri";
import { FaList } from "react-icons/fa";
import { RiFilterLine } from "react-icons/ri";
import AdminProjectCardTable from "@/components/admin/ProjectCardTable";
import AdminProjectCard from "@/components/admin/ProjectCard";
import AdminCreateProject from "@/components/admin/CreateProject";
import api from "@/lib/api";
import ProtectedAdmin from "@/components/admin/ProtectedAdmin";
import { EmptyDemoProject } from "@/components/emptyProject";
import { toast } from "sonner";
import FilterProject from "@/components/filterProject";
function Projects() {
  const [table, settable] = useState(false);
  const [CreateForm, setOpenForm] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  const [data, setdata] = useState([]);
  const [filter, setFilters] = useState({
    Status: "all",
    Client: "all",
    DateRange: "all",
  });

  let getData = async () => {
    try {
      const res = await api.get("/project");
      setdata(res.data);
    } catch (error) {
      toast.error("Failed to Load");
    } finally {
      setIsFetching(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const statusProgressMap = {
    notStarted: 0,
    pending: 30,
    inProgress: 60,
    onHold: 80,
    completed: 100,
    cancelled: 100,
  };

  const filterData = useMemo(() => {
    return data.filter((project) => {
      if (filter.Status !== "all" && project.status !== filter.Status) {
        return false;
      }
      if (filter.Client !== "all" && project.client?.id !== filter.Client) {
        return false;
      }

      if (filter.DateRange !== "all") {
        const startDate = new Date(project.createdAt);
        const now = new Date();
        switch (filter.DateRange) {
          case "today":
            return startDate.toDateString() === now.toDateString();
          case "week": {
            const weekAgo = new Date();
            weekAgo.setDate(now.getDate() - 7);
            return startDate >= weekAgo;
          }
          case "month":
            return (
              startDate.getMonth() === now.getMonth() &&
              startDate.getFullYear() === now.getFullYear()
            );
          case "quarter":
            const quarter = Math.floor(now.getMonth() / 3);
            return (
              Math.floor(startDate.getMonth() / 3) === quarter &&
              startDate.getFullYear() === now.getFullYear()
            );
          default:
            return true;
        }
      }
      return true;
    });
  }, [data, filter]);

  if (!data) return null;

  return (
    <ProtectedAdmin>
      <div className="relative w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4">
          <div className="flex flex-col sm:flex-row  items-start sm:items-center gap-4">
            <button
              onClick={() => setOpenForm(true)}
              className="text-white bg-blue-600 rounded-lg px-4 py-2.5 whitespace-nowrap cursor-pointer"
            >
              + Add Project
            </button>

            <div className="rounded-lg bg-gray-100 dark:bg-gray-700 flex py-1 gap-2 px-1 items-center w-full sm:w-auto">
              <button
                className={`py-1.5 px-3 rounded-lg flex items-center justify-center text-center transition-all duration-300 ease-in-out cursor-pointer ${
                  !table ? "bg-white dark:bg-gray-800 text-black dark:text-gray-200" : "text-gray-500 dark:text-gray-400"
                }`}
                onClick={() => settable(false)}
              >
                <RiLayoutGrid2Line className="inline me-1" />
                Cards
              </button>
              <button
                className={`py-1.5 px-3 rounded-lg flex items-center justify-center text-center transition-all duration-300 ease-in-out cursor-pointer ${
                  table ?"bg-white dark:bg-gray-800 text-black dark:text-gray-200" : "text-gray-500 dark:text-gray-400"
                }`}
                onClick={() => settable(true)}
              >
                <FaList className="inline me-1" />
                Tables
              </button>
            </div>
          </div>
          <div className="w-full ">
            <div className="flex justify-end items-end">
              <FilterProject setFilters={setFilters} filter={filter} />
            </div>
          </div>
        </div>
        {isFetching ? null : filterData.length > 0 ? (
          !table ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
              {filterData?.map((project, idx) => (
                <AdminProjectCard
                  key={idx}
                  projectname={project?.name}
                  Deadline={project?.end}
                  Progress={statusProgressMap[project?.status] ?? 0}
                  Status={project?.status}
                  budget={project?.budget}
                  client={project?.client?.companyName}
                  team={project?.assignedUsers || []}
                />
              ))}
            </div>
          ) : (
            <div className="m-4 overflow-x-auto rounded-lg border border-gray-300 dark:border-gray-700 shadow-sm">
              <table className="min-w-[700px] w-full text-left border-separate border-spacing-x-0 ">
                <thead className="text-gray-500 dark:text-gray-200 font-sans">
                  <tr>
                    <th className="font-semibold px-4 py-3">PROJECT</th>
                    <th className="font-semibold  px-4 py-3">CLIENT</th>
                    <th className="font-semibold  px-4 py-3">TEAM</th>
                    <th className="font-semibold  px-4 py-3">PROGRESS</th>
                    <th className="font-semibold  px-4 py-3">STATUS</th>
                    <th className="font-semibold  px-4 py-3">DEADLINE</th>
                    <th className="font-semibold  px-4 py-3">ACTION</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-700 divide-y dark:divide-gray-600 divide-gray-100 text-black">
                  {filterData?.map((item, idx) => (
                    <AdminProjectCardTable
                      key={idx}
                      projectname={item?.name}
                      client={item?.client?.companyName}
                      team={item?.assignedUsers || []}
                      project={item}
                      progress={statusProgressMap[item?.status] ?? 0}
                      status={item?.status}
                      deadline={item?.end}
                      budget={item?.budget}
                      refreshData={getData}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          )
        ) : (
          <EmptyDemoProject admin={true} />
        )}

        {CreateForm && (
          <div className="fixed inset-0 z-50 flex justify-center items-start pt-[10%] w-full min-h-full bg-black/50">
            <AdminCreateProject refreshData={getData} closeform={setOpenForm} />
          </div>
        )}
      </div>
    </ProtectedAdmin>
  );
}

export default Projects;
