"use client";
import React, { useEffect, useMemo, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import ProjectTaskBox from "@/components/projectTaskBox";
import AddTaskComponent from "@/components/addTaskComponent";
import api from "@/lib/api";
import ProtectedAdmin from "@/components/admin/ProtectedAdmin";
import { toast } from "sonner";
import EmptyTaskCard from "@/components/emptyTask";

function AddTask() {
  const [tasks, setTasks] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [search, setSearch] = useState("");

  const fetchTasks = async () => {
    try {
      const res = await api.get("/task");
      const data = res.data;

      setTasks(data);
    } catch (err) {
      toast.error("Can't load you task");
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filterData = useMemo(() => {
    if (!search.trim()) return tasks;

    const query = search.toLowerCase();

    return tasks.filter((task) => {
      return (
        task.name?.toLowerCase().includes(query) ||
        task.project?.name?.toLowerCase().includes(query) ||
        task.assignee?.name?.toLowerCase().includes(query)
      );
    });
  }, [tasks, search]);


  return (
    <ProtectedAdmin>
      {isFetching ? <></> : (
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between m-8 gap-5">
          <div className="flex w-full sm:w-[40%] border border-gray-300 dark:bg-gray-800 dark:border-gray-700   bg-white rounded-xl py-2 items-center gap-4">
            <IoSearchOutline className="ms-3" />
            <input
              id="password"
              type="text"
              placeholder="Search clients..."
              required
              className="focus:outline-none focus:border-0 w-full "
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex w-full sm:w-auto justify-end">
            <AddTaskComponent refreshData={fetchTasks} />
          </div>
        </div>

        { filterData.length > 0 ? (
          <div className="rounded-lg overflow-x-auto   mx-8 shadow-sm">
            <table className="w-full rounded-lg border overflow-hidden dark:border-gray-700 border-gray-200 border-separate dark:bg-gray-800 bg-gray-100 m-0 mt-0 border-spacing-y-[3px] border-spacing-x-0">
              <thead className="bg-gray-50 dark:bg-gray-800 dark:text-gray-200 text-gray-500 uppercase text-xs font-semibold">
                <tr>
                  <th className="font-semibold text-start py-3 px-6">TASK</th>
                  <th className="font-semibold text-start py-3 px-6">
                    PROJECT
                  </th>
                  <th className="font-semibold text-start py-3 px-6">
                    ASSIGNED TO
                  </th>
                  <th className="font-semibold text-start py-3 px-6">STATUS</th>
                  <th className="font-semibold text-start py-3 px-6">
                    PRIORITY
                  </th>
                  <th className="font-semibold text-start py-3 px-6">
                    DEADLINE
                  </th>
                  <th className="font-semibold text-start py-3 px-6">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y dark:divide-gray-600 divide-gray-100 dark:bg-gray-700 bg-white">
                {filterData?.map((item) => (
                  <ProjectTaskBox
                    key={item.id}
                    id={item.id}
                    task={item.name}
                    description={item.description}
                    project={item.project?.name || ""}
                    projectId={item.project?.id || ""}
                    assignedTo={item.assignee?.name || ""}
                    assignedToId={item.assignee?.id || ""}
                    status={item.status}
                    priority={item.priority}
                    deadline={item.dueDate}
                    refreshData={fetchTasks}
                  />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <EmptyTaskCard />
        )}
        
      </div>
      )}
    </ProtectedAdmin>
  );
}

export default AddTask;
