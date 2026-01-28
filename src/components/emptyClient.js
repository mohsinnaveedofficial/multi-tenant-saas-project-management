import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FaUserSecret } from "react-icons/fa6";

function EmptyClient() {
  return (
    <div className="mx-4 my-6">
      <Card className="col-span-full rounded-2xl border-dashed border-gray-300 dark:bg-gray-800 bg-gray-50">
        <CardContent className="flex flex-col items-center justify-center py-14 text-center">
          <FaUserSecret className="h-10 w-10 text-gray-400 dark:text-gray-300 mb-4" />

          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            No Client found
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-sm">
            You don’t have any client here yet. Try adjusting your filters or
            Add a new
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default EmptyClient;
