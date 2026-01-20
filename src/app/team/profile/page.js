"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineCameraAlt } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import Profileview from "@/components/profileview";
import Profilewpassword from "@/components/profilewpassword";
import Profileperformance from "@/components/profileperformance";
import Profiletask from "@/components/profiletask";
import api from "@/lib/api";
import ProtectedTeam from "@/components/team/ProtectedTeam";

function Page() {
  let [edit, setedit] = useState(false);
  const [data, setData] = useState(null);

  const [details, setDetail] = useState({
    profile: true,
    task: false,
    performance: false,
  });
  useEffect(() => {
    const getData = async () => {
      const res = await api.get("/user/team/profile");
      setData(res.data);
    };
    getData();
  }, []);

  if (!data) return null;
  return (
        <ProtectedTeam>

    <div className="m-4 mb-10 border border-gray-200 rounded-2xl font-sans bg-white">
      <div className="flex justify-between items-center m-6 flex-col sm:flex-row">
        <div className="flex gap-5 items-center flex-col sm:flex-row">
          <div className=" ">
            <div className=" relative h-24 w-24 rounded-full bg-blue-600 flex justify-center items-center  text-white font-medium text-xl">
              SM
              <div className="w-8 h-8 absolute bottom-0 right-0 z-30 text-black  bg-white rounded-full border-2 border-gray-200 flex justify-center items-center">
                <MdOutlineCameraAlt />
              </div>
            </div>
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-2xl text-gray-900 font-semibold ">
              {data.profile.name}
            </h2>
            <h5 className="text-gray-600 text-sm font-medium">
              {data.profile.designation || ""}
            </h5>
            Joined{" "}
            {new Date(data.profile.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>
        <div>
          {details.profile && (
            <button
              onClick={() => setedit(!edit)}
              className="  border border-gray-300 bg-blue-600 mt-3 sm:mt-0 text-white py-2 px-4 rounded-lg"
            >
              {" "}
              <AiOutlineEdit className="inline" />{" "}
              {edit ? "Cancel" : "Edit Profile"}
            </button>
          )}
        </div>
      </div>

      <div className=" rounded-[5px] ">
        <hr className="text-gray-200 mt-5 w-[100%]" />
        <div className="flex gap-8 text-sm  text-gray-500 px-10 pt-4 ">
          <button
            onClick={() =>
              setDetail({ profile: true, performance: false, task: false })
            }
            className={`  pb-4 ${details.profile && "text-blue-500 border-b-blue-500 border-b-2"}`}
          >
            Profile
          </button>
          <button
            onClick={() =>
              setDetail({ profile: false, performance: false, task: true })
            }
            className={`  pb-4 ${details.task && "text-blue-500 border-b-blue-500 border-b-2"}`}
          >
            Tasks
          </button>
          <button
            onClick={() =>
              setDetail({ profile: false, performance: true, task: false })
            }
            className={`  pb-4 ${details.performance && "text-blue-500 border-b-blue-500 border-b-2"}`}
          >
            Performance
          </button>
        </div>
        <hr className="text-gray-200 w-[100%] " />
      </div>
      {details.profile ? (
        edit ? (
          <Profilewpassword  editClose={setedit} data={data} />
        ) : (
          <Profileview  data={data} />
        )
      ) : details.performance ? (
        <Profileperformance />
      ) : details.task ? (
        <Profiletask />
      ) : (
        <></>
      )}
    </div>
    </ProtectedTeam>
  );
}

export default Page;
