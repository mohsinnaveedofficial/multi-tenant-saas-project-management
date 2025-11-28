import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import ProjectClientBox from "@/components/projectClientBox";
import AddClientComponent from "@/components/admin/addClientComponent";



function ClientTable() {
  const data = [
  {
    name: "John Smith",
    company: "TechCorp Inc.",
    email: "john@techcorp.com",
    phone: "+1 (555) 123-4567",
    projects: "3",
    status: "Active",
  },
  {
    name: "Sarah Johnson",
    company: "StartupXYZ",
    email: "sarah@startupxyz.com",
    phone: "+1 (555) 234-5678",
    projects: "2",
    status: "Active",
  },
  {
    name: "Mike Wilson",
    company: "Creative Agency",
    email: "mike@creative.com",
    phone: "+1 (555) 345-6789",
    projects: "1",
    status: "Inactive",
  },
  {
    name: "Emily Davis",
    company: "Fashion Brand",
    email: "emily@fashion.com",
    phone: "+1 (555) 456-7890",
    projects: "4",
    status: "Active",
  },
  {
    name: "David Brown",
    company: "E-commerce Co.",
    email: "david@ecommerce.com",
    phone: "+1 (555) 567-8901",
    projects: "2",
    status: "Active",
  },
  {
    name: "M Hassan",
    company: "E-commerce Co.",
    email: "david@ecommerce.com",
    phone: "+1 (555) 567-8901",
    projects: "2",
    status: "Active",
  }
];


  return (
    <div >
      <div className="flex justify-between m-8">

        {/* search bar */}
        <div className=" text-start border border-gray-300  w-[40%] bg-white rounded-lg flex flex-nowrap py-2 items-center  gap-4">
          <IoSearchOutline className=" ms-3" />
          <input
            id="password"
            type="text"
            placeholder="Search clients..."
           
            className="focus:outline-none focus:border-0 w-full"
          />
        </div>

        {/* add button */} 
          <AddClientComponent/>
      </div>
 
        {/* table */}

      <div className=" border border-gray-200 rounded-lg overflow-hidden m-6 shadow-sm">
        <table className="border-collapse w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-semibold">
              <tr>
                <th className="font-semibold py-3 px-6">NAME</th>
                <th className="font-semibold py-3 px-6">COMPANY</th>
                <th className="font-semibold py-3 px-6">EMAIL</th>
                <th className="font-semibold py-3 px-6">PHONE</th>
                <th className="font-semibold py-3 px-6">PROJECTS</th>
                <th className="font-semibold py-3 px-6">STATUS</th>
                <th className="font-semibold py-3 px-6 text-center">ACTIONS</th>
              </tr>
            </thead>
             <tbody className="divide-y divide-gray-100 bg-white ">

            {
              data.map((item,index) => (
                <ProjectClientBox key={index} id={index} name={item.name} company={item.company} email={item.email} phone={item.phone} projects={item.projects} status={item.status}/>
              ))
            }
            </tbody>
            </table>
      </div>
 

    </div>
  );
}

export default ClientTable;

