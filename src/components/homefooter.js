import React from "react";
import { Separator } from "./ui/separator";

function Homefooter() {
  return (
    <footer className="bg-gray-900 text-white font-sans  ">
      <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 gap-8    ">
          <div className="space-y-4  ">
            <h1 className="font-bold text-blue-400 text-2xl font-['Pacifico'] ">
              Workhub
            </h1>
            <h5 className="text-gray-400 ">
              The complete solution for managing clients, projects, and teams in
              one powerful platform.
            </h5>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="space-y-2 mt-4 ">
              <li className="text-gray-400">Features</li>
              <li className="text-gray-400">Pricing</li>
              <li className="text-gray-400">Documentation</li>
              <li className="text-gray-400">Api</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 mt-4 ">
              <li className="text-gray-400">About</li>
              <li className="text-gray-400">Carrers</li>
              <li className="text-gray-400">Contact</li>
              <li className="text-gray-400">Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 mt-4 ">
              <li className="text-gray-400">Privacy Policy</li>
              <li className="text-gray-400">Terms of Services</li>
              <li className="text-gray-400">Cookie Policy</li>
              <li className="text-gray-400">Blog</li>
            </ul>
          </div>
        </div>
        <Separator className={"mt-10 bg-gray-800"} ></Separator>
        <p className="text-gray-400 text-center mt-5">© 2025 ProjectHub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Homefooter;
