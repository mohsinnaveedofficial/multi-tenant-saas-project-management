"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { MdOutlineRemoveRedEye } from "react-icons/md";
import ProjectMemberIcon from "../ProjectMemberIcon";
import { FaRegComment, FaRegFolder } from "react-icons/fa6";
import { Field, FieldGroup, FieldSet } from "../ui/field";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function ProjectDetailsCard({ project }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(project?.comments || []);
  const router = useRouter();
  const team = project?.assignedUsers || [];
  const [open, setOpen] = useState(false);

  const handlePostComment = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    try {
      const res = await api.post("/projectcomments", {
        projectId: project.id,
        comment,
      });
      toast.success("Commnet added successfully");
    
      setComments((prev) => [...prev, res.data]);
      setComment("");
      setOpen(false);
      router.refresh();
    } catch (error) {
      toast.error(
        error.response?.data?.message || error.message || "Unable to Update"
      );
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <MdOutlineRemoveRedEye className="inline text-blue-500 cursor-pointer" />
      </DialogTrigger>

      <DialogContent
        className={"bg-white sm:max-w-[725px] text-black dark:text-gray-200 dark:bg-neutral-950 dark:shadow-sm dark:shadow-gray-800 border-0 p-1"}
      >
        <DialogHeader className={"p-3"}>
          <DialogTitle className="text-lg font-semibold">
            {project?.name}
          </DialogTitle>
        </DialogHeader>
        <Separator className=" bg-gray-200 dark:bg-gray-400 " />
        <div className="grid grid-cols-3 gap-8 p-4">
          <Card className={"border-0 bg-gray-50  dark:bg-gray-900 shadow-none flex flex-col min-w-0"}>
            <CardContent>
              <h5 className=" font-semibold">Client</h5>
              <p className="text-gray-500 dark:text-gray-400 mt-2 truncate " title={project?.client?.companyName}>
                {project?.client?.companyName || "N/A"}
              </p>
            </CardContent>
          </Card>

          <Card className={"border-0 bg-gray-50 dark:bg-gray-900 shadow-none flex flex-col min-w-0"}>
            <CardContent>
              <h5 className=" font-semibold">Budget</h5>
              <p className="text-gray-500 dark:text-gray-400 mt-2 " title={project?.budget}>${project?.budget || 0}</p>
            </CardContent>
          </Card>

          <Card className={"border-0 bg-gray-50 dark:bg-gray-900 shadow-none"}>
            <CardContent> 
              <h5 className=" font-semibold">Progress</h5>
              <p className="text-gray-500 dark:text-gray-400 mt-2 ">{project?.progress || 0}%</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className=" px-4  ">
          <TabsList className={"gap-3 bg-white dark:bg-gray-900 rounded-b-none"}>
            <TabsTrigger
              className="flex-1 rounded-b-none data-[state=active]:!text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-b-blue-600  text-gray-600 data-[state=active]:bg-white  data-[state=active]:shadow-none transition-all shadow-none"
              value="overview"
            >
              Overview
            </TabsTrigger>

            <TabsTrigger
              className={
                "flex-1 text-gray-500 rounded-b-none data-[state=active]:!text-blue-600 data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-b-blue-600  data-[state=active]:shadow-none "
              }
              value="files"
            >
              Files
            </TabsTrigger>
            <TabsTrigger
              className={
                "flex-1 text-gray-500 rounded-b-none data-[state=active]:!text-blue-600 data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-b-blue-600  data-[state=active]:shadow-none"
              }
              value="comment"
            >
              Comments
            </TabsTrigger>
          </TabsList>
          <Separator className=" bg-gray-200 dark:bg-gray-400  -translate-2 " />
          <TabsContent value="overview">
            <div className="font-sans">
              <h4 className=" font-semibold mb-3">Project Description</h4>
              <p className="text-gray-500 mb-3">
                {project?.description || "No description provided."}
              </p>
              <h3 className="font-semibold mb-3">Team Member</h3>
              <div className="grid grid-cols-4 gap-5 mb-5">
                {team.length > 0 ? (
                  team.map((item, idx) => (
                    <div
                      key={idx}
                      className=" flex justify-center items-center"
                    >
                      <ProjectMemberIcon name={item?.user?.name || "Unnamed"} />
                      <span className="text-sm text-gray-500 whitespace-nowrap">
                        {item?.user?.name || `Team member ${idx + 1}`}
                      </span>
                    </div>
                  ))
                ) : (
                  <span className="text-gray-500 col-span-4 text-center">
                    Not team assigned yet
                  </span>
                )}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="files">
            <Input
              type="file"
              className="
    w-52 
    text-gray-200 
    bg-blue-600 
    file:text-white 
    file:py-1 
    file:pe-4
    transition-all duration-300 ease-in-out
    hover:bg-gray-100 hover:file:text-black hover:text-black
  "
            />
            <div className="  ">
              <div className="flex justify-center items-center flex-col gap-2 py-10">
                <FaRegFolder className="text-2xl text-gray-300 font-bold " />
                <span className="text-gray-500 ">No files uploaded yet </span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="comment">
            <Card className={"border-gray-200 px-5"}>
              <form onSubmit={handlePostComment}>
                <FieldSet>
                  <FieldGroup>
                    <Field>
                      <Textarea
                        id="checkout-7j9-optional-comments"
                        placeholder="Add a comment...."
                        className="resize-none border-gray-200 placeholder:text-gray-400"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      />
                    </Field>
                  </FieldGroup>
                </FieldSet>
                <Button
                  type="submit"
                  className={"bg-blue-600 text-white mt-3 mb-1"}
                >
                  Post Comment
                </Button>
              </form>
            </Card>
            <div className="flex flex-col my-10">
              {comments.length > 0 ? (
                comments.map((cmt, idx) => (
                  <div key={idx} className="text-gray-500">
                    {cmt.comment}
                  </div>
                ))
              ) : (
                <div className="flex flex-col justify-center items-center">
                  <FaRegComment className="text-gray-300 text-3xl" />
                  <span className="text-gray-500 mt-1">No comments yet</span>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

export default ProjectDetailsCard;
