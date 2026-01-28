import React, { useMemo, useState } from "react";
import Tasksummary from "@/components/tasksummary";
import { Input } from "@/components/ui/input";
import { RxCross2 } from "react-icons/rx";
import api from "@/lib/api";
import { toast } from "sonner";

function Profilewpassword({ editClose, data, refreshData }) {
  const initialData = useMemo(
    () => ({
      name: data.profile.name,
      designation: data.profile.designation || "",
      phoneNumber: data.profile.phoneNumber || "",
      bio: data.profile.bio || "",
    }),
    [data],
  );

  const [formData, setFormData] = useState({
    ...initialData,
    email: data.profile.email,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {};

      Object.keys(initialData).forEach((key) => {
        if (formData[key] !== initialData[key]) {
          payload[key] = formData[key];
        }
      });

      if (formData.newPassword || formData.currentPassword) {
        if (!formData.currentPassword || !formData.newPassword) {
          return toast.error("Both current and new password are required");
        }

        if (formData.newPassword !== formData.confirmPassword) {
          return toast.error("Passwords do not match");
        }

        payload.currentPassword = formData.currentPassword;
        payload.newPassword = formData.newPassword;
      }

      if (Object.keys(payload).length === 0) {
        return toast.info("No changes to update");
      }

      const res = await api.patch("/user", payload);

      if (res.status === 200 || res.status === 201) {
        toast.success("Profile updated successfully");

        setFormData((prev) => ({
          ...prev,
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        }));
      }
      refreshData();
      editClose(false);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Profile update failed");
      editClose(false);
    }
  };

  return (
    <div className="m-4">
      <form onSubmit={handleSubmit}>
        <div className="flex md:flex-row flex-col">
          <div className="p-4 md:w-[65%] grid sm:grid-cols-2 gap-6">
            <div>
              <label className="pb-1 font-medium text-blue-950 dark:text-gray-200">
                Full Name
              </label>
              <Input
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className={"mt-1"}
                required
              />
            </div>

            <div>
              <label className="pb-1  font-medium text-blue-950 dark:text-gray-200">
                Job Title
              </label>
              <Input
                name="designation"
                type="text"
                placeholder="Job title"
                value={formData.designation}
                onChange={handleChange}
                className={"mt-1"}
              />
            </div>

            <div>
              <label className="pb-1 font-medium  text-blue-950 dark:text-gray-200">
                Email
              </label>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                className={"mt-1"}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="pb-1 font-medium  text-blue-950 dark:text-gray-200">
                Phone Number
              </label>
              <Input
                name="phoneNumber"
                type="tel"
                placeholder="Phone Number"
                className={"mt-1"}
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div className="">
              <label className=" font-medium text-blue-950 dark:text-gray-200">
                Bio
              </label>
              <textarea
                name="bio"
                className="h-[100px] max-w-[775px] rounded-md block p-2 border  border-gray-300 mt-1"
                placeholder="Write your bio . . ."
                value={formData.bio}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="p-4 md:w-[35%]">
            <h1 className="  pb-3 text-blue-950 font-bold dark:text-gray-200">
              Task Summary
            </h1>
            <div className="pb-6">
              <Tasksummary
                status={"Completed Tasks"}
                count={data.completedTasks}
                texta={"green"}
              />
            </div>
            <div className="pb-6">
              <Tasksummary
                status={"Pending Tasks"}
                count={data.pendingTasks}
                texta={"orange"}
              />
            </div>
            <div className="pb-6">
              <Tasksummary
                status={"Overdue Tasks"}
                count={data.overdueTasks}
                texta={"red"}
              />
            </div>
            <div className="pb-6">
              <Tasksummary
                status={"Total Projects"}
                count={data.totalProjects}
                texta={"blue"}
              />
            </div>{" "}
          </div>
        </div>

        <div className="ml-4">
          <h1 className="pb-2 text-blue-950 dark:text-gray-200  ">
            Skills
          </h1>
          <div className="flex justify-start gap-2 flex-wrap">
            {[
              "UI Design",
              "UX Research",
              "Figma",
              "Adobe XD",
              "Prototyping",
              "User Testing",
            ].map((skill) => (
              <div
                key={skill}
                className="flex gap-1 justify-between items-center bg-[#DAE6F4] text-blue-800 rounded-xl px-2.5 py-0.5 text-sm"
              >
                <h1>{skill}</h1>
                <h2 className="mt-1">
                  <RxCross2 />
                </h2>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 w-[65%]">
          <Input
            type="text"
            placeholder="Add new skill..."
            className={"mt-1"}
          />
        </div>

        <div className="p-4 w-auto sm:w-[65%]">
          <h1 className="  text-black font-bold  dark:text-gray-200 text-[18px] pb-4">
            Change Password
          </h1>
          <div className={"mt-2 ms-3"}>
            <label className="py-3  font-medium text-blue-950 dark:text-gray-200">
              Current Password
            </label>
            <Input
              name="currentPassword"
              type="password"
              value={formData.currentPassword}
              onChange={handleChange}
              className={"mt-1"}
            />
          </div>
          <div className={"mt-4 ms-3"}>
            {" "}
            <label className="py-3 font-medium  text-blue-950 dark:text-gray-200">
              New Password
            </label>
            <Input
              name="newPassword"
              type="password"
              value={formData.newPassword}
              onChange={handleChange}
              className={"mt-1"}
            />
          </div>
          <div className={"mt-4 ms-3"}>
            {" "}
            <label className="py-3 font-medium text-blue-950 dark:text-gray-200">
              Confirm New Password
            </label>
            <Input
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={"mt-1"}
            />
          </div>
        </div>

        <div className="p-4 flex justify-start gap-3.5">
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-sm py-2 px-3.5  "
          >
            Save Changes
          </button>
          <button
            type="button"
            className="border border-gray-300 dark:border-gray-600 dark:text-gray-200 text-gray-500 py-2 px-3.5 rounded-sm"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Profilewpassword;
