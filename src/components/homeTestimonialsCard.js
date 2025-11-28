import React from "react";
import { Card, CardContent, CardDescription } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

function HomeTestimonialsCard({img,name,postion,desc}) {
  return (
    <Card className={'min-w-80 shadow-lg hover:drop-shadow-lg transition-all duration-300 ease-in-out'}>
      <CardContent>
        <div className="flex items-center gap-4 mt-2 mb -5">
          <div>
            <Avatar className={"h-16 w-16"}>
        <AvatarImage decoding="async" loading="lazy" src={img ? img:"https://readdy.ai/api/search-image?query=Professional%20business%20woman%20headshot%2C%20confident%20smile%2C%20modern%20office%20background%2C%20corporate%20portrait%2C%20clean%20professional%20appearance&width=60&height=60&seq=person1&orientation=squarish"} alt="@shadcn" />
        <AvatarFallback>JN</AvatarFallback>
      </Avatar>
          </div>
          <div>
            <h3>{name}</h3>
            <p className="text-gray-400 text-sm">{postion}</p>
          </div>
        </div>

        <CardDescription  className={"line-clamp-4 mt-5"}>
            "{desc}"
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default HomeTestimonialsCard;
