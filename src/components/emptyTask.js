import { Card, CardContent } from "@/components/ui/card";
import { Inbox } from "lucide-react";

export default function EmptyTaskCard() {
  return (
    <div className="mx-4 my-6">
        <Card className="col-span-full rounded-2xl border-dashed border-gray-300 bg-gray-50">
      <CardContent className="flex flex-col items-center justify-center py-14 text-center">
        <Inbox className="h-10 w-10 text-gray-400 mb-4" />

        <h3 className="text-lg font-semibold text-gray-700">
          No tasks found
        </h3>

        <p className="text-sm text-gray-500 mt-1 max-w-sm">
          You don’t have any tasks here yet.  
          Try adjusting your filters 
        </p>
      </CardContent>
    </Card>
    </div>
  );
}
