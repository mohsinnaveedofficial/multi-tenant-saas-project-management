"use client";
import Project from "@/components/project";
import Projectdetails from "@/components/projectdetails";
import React, { useState } from "react";
import Profiletask from "@/components/profiletask";
import Profileperformance from "@/components/profileperformance";

function Projects() {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "E-commerce Platform",
      status: "Active",
      company: "TechCorp Inc.",
      category: "UI Designer",
      progress: 75,
      startdate: "2024-01-15",
      enddate: "2024-02-15",
      description:
        "Designing a modern e-commerce platform with focus on user experience and conversion optimization.",
      teamMembers: [
        { name: "John Doe", role: "Project Manager" },
        { name: "Mike Wilson", role: "Developer" },
        { name: "Emily Davis", role: "Designer" },
      ],
    },
    {
      title: "Mobile App Design",
      status: "Active",
      company: "StartupXYZ",
      category: "Lead Designer",
      progress: 45,
      startdate: "2024-01-20",
      enddate: "2024-02-28",
      description: "Designing a mobile app with modern UI/UX.",
      teamMembers: [
        { name: "Alice Brown", role: "Designer" },
        { name: "Bob Smith", role: "Developer" },
      ],
    },
  ];

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setDetailsOpen(true);
  };

  const closeProjectDetails = () => {
    setDetailsOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="relative min-h-screen">
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 rounded-2xl gap-6">
        {projects.map((item, idx) => (
          <Project
            key={idx}
            project={item}          
            onClick={() => openProjectDetails(item)}
          />
        ))}
      </div>

      {detailsOpen && selectedProject && (
  <div className="fixed inset-0 z-50 w-full h-full bg-black/35 flex justify-center items-start overflow-auto">
    <div className="pt-8 pb-8 w-full flex justify-center">
      <Projectdetails
        openDetail={closeProjectDetails}
        project={selectedProject}
      />
    </div>
  </div>
)}

      
    </div>
  );
}

export default Projects;
