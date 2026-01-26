import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { TbFolderCode } from "react-icons/tb";
import { ArrowUpRightIcon, Link } from "lucide-react";

export function EmptyDemoProject({ admin }) {
  return (
    <div className="min-h-screen flex justify-center items-center">

   
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <TbFolderCode />
        </EmptyMedia>
        <EmptyTitle>No Projects Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t any projects yet.
          {admin && "Get started by creating your first project."}
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row  justify-center gap-2  ">
        {admin &&
        <Button>Create Project</Button>
        }
      </EmptyContent>
      <Button
        variant="link"
        asChild
        className="text-muted-foreground"
        size="sm"
      >
        <Link href="/">
          Learn More <ArrowUpRightIcon />
        </Link>
      </Button>
    </Empty>
     </div>
  );
}
