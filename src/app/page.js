import HomeCard from "@/components/homeCard";
import Homenavbar from "@/components/homenavbar";
import SideNavBar from "@/components/sideNavBar";
import Slide from "@/components/slide";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { RiBuildingLine } from "react-icons/ri";
import { FaRegFolder } from "react-icons/fa6";
import { RiTeamLine } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import HomeFeature from "@/components/homeFeature";
import { Badge } from "@/components/ui/badge";
import HomeTestimonialsCard from "@/components/homeTestimonialsCard";
import HomeBillingcard from "@/components/homeBillingcard";
import Homefooter from "@/components/homefooter";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen ">
      <Homenavbar />

      <section id="home" className="grid grid-cols-1 pt-20 lg:grid-cols-2 gap-10 items-center font-sans justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 
            dark:from-blue-900 dark:via-purple-900 dark:to-gray-800 ">
        <div className="lg:ml-24 ml-5 space-y-8 ">
          <h2 className=" text-3xl md:text-5xl mt-3 lg:mt-0 lg:text-6xl font-bold whitespace-nowrap  ">
            Manage Clients,<br></br>
            Projects & Teams <MdOutlineHorizontalRule className="inline" />
            <br></br>
            <span className="text-blue-600">All in One Place</span>
          </h2>
          <p className="md:w-2/3 text-lg md:text-xl text-gray-600 dark:text-gray-200 leading-relaxed mt-4">
            A powerfull multi-tanent SaaS platform to simplify project
            management for every company. Streamline workflows, boost
            productivity, and grow your bussiness
          </p>
          <div className="space-x-6 mt-5">
             <Link href={"/auth/signup"}>
            <Button  variant={"primary"} className={"text-white cursor-pointer bg-blue-600 hover:bg-blue-700 py-6 "}>
               Get started Free 
            </Button>
            </Link>
            <Link href={"https://www.linkedin.com/posts/mohsinnaveedofficial_saas-startup-webdevelopment-activity-7411990759052156928-8t42?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYde6EBTbGL7OdXsUQtYL6TZVvgYHElFb0"}>
            <Button variant={"secondary"} className="cursor-pointer dark:bg-gray-700 dark:hover:bg-gray-800 dark:border-gray-500 text-blue-700 border py-6 border-blue-700 bg-white">
              Watch Demo
            </Button>
            </Link>
          </div>
        </div>
        <div>
          <Slide />
        </div>
      </section>

      <section id="features" className="bg-white dark:bg-gray-800 mx-auto">
        <div className="font-sans text-center  py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
          <h2 className="text-3xl md:text-4xl  text-gray-900 dark:text-gray-200 font-bold mt-3 ">
            Everything You Need to Succeed
          </h2>
          <h5 className="text-xl mt-3 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16">
            Powerful features designed to streamline your workflow and boost
            team productivity
          </h5>
          <div className="grid md:grid-cols-2 justify-center  lg:grid-cols-4 gap-8 ">
            <HomeCard
              Icon={RiBuildingLine}
              color={"blue"}
              desc={
                "Seperate secure workspace for each company with role-based permissions"
              }
              title={"Multi-Tenant Access"}
            />
            <HomeCard
              Icon={FaRegFolder}
              color={"purple"}
              desc={
                "Track progress, set deadlines, and manage tasks with intuitive boards"
              }
              title={"Project & Task Management"}
            />
            <HomeCard
              Icon={RiTeamLine}
              color={"green"}
              desc={
                "Assign roles, share updates, and collaborate seamlessly with your team"
              }
              title={"Team Collaboration"}
            />
            <HomeCard
              Icon={RiMoneyDollarCircleLine}
              color={"orange"}
              desc={
                "Monitor costs, revenue, and performance with detailed analytics"
              }
              title={"Finance & Reports"}
            />
          </div>
        </div>
      </section>

      <section  className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="">
            <h2 className="text-gray-900 dark:text-gray-200 text-3xl md:text-4xl font-bold my-6">
              All your work <MdOutlineHorizontalRule className="inline" />{" "}
              organized and visible in one place
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-xl my-5">
              Get a complete overview of your projects, tasks, team performance
              and finicial metrics with our intuitive dashborad interface
            </p>
            <div className=" ">
              <HomeFeature text={"Real-time project tracking"} />
              <HomeFeature text={"Advanced analytics and reporting"} />
              <HomeFeature text={"Team collaboration tools"} />
            </div>
          </div>
          <div className="flex justify-center items-center m-4 pt-8 relative">
            <div className="absolute top-16 left-5">
              <Badge className={"bg-blue-600 py-1 px-3 shadow-lg"}>Tasks</Badge>
            </div>{" "}
            <div className="absolute top-16 right-5">
              <Badge className={"bg-purple-600 py-1 px-3  shadow-lg"}>
                Clients
              </Badge>
            </div>{" "}
            <div className="absolute bottom-16 left-5">
              <Badge className={"bg-green-600 py-1 px-3  shadow-lg"}>
                Charts
              </Badge>
            </div>
            <div className="absolute bottom-16 right-5">
              <Badge className={"bg-orange-600 py-1 px-3  shadow-lg"}>
                Reports
              </Badge>
            </div>
            <div className="border-12  border-white  shadow-xl rounded-xl mb-10">
              <img
                className=" "
                src="https://readdy.ai/api/search-image?query=Complete%20project%20management%20dashboard%20interface%20showing%20analytics%20charts%2C%20task%20boards%2C%20team%20members%2C%20financial%20reports%2C%20modern%20clean%20design%2C%20professional%20business%20software%2C%20white%20background&width=600&height=400&seq=dashboard2&orientation=landscape"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 font-sans bg-white dark:bg-gray-800">
        <div className=" px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
          <h2 className="text-gray-900 text-3xl dark:text-gray-200 text-center md:text-4xl font-bold my-4">
            Trusted by Teams Worldwide
          </h2>
          <p className="text-gray-600 text-xl dark:text-gray-400  mb-16 text-center">
            See what our customer have to say about their experience
          </p>

          <div className="flex gap-10 overflow-auto custom-scrollbar pb-5 mt-4 px-2">
            <HomeTestimonialsCard
              img={""}
              name={"Sarah Johnson"}
              postion={"CEO, TechStart Inc."}
              desc={
                "Our productivity increased by 40% since using this platform. The multi-tenant feature is perfect for managing multiple client projects."
              }
            />
            <HomeTestimonialsCard
              name={"Michael Chen"}
              postion={"Project Manager, Design Co."}
              img={
                "https://readdy.ai/api/search-image?query=Professional%20business%20man%20headshot%2C%20friendly%20expression%2C%20modern%20office%20setting%2C%20corporate%20portrait%2C%20professional%20attire&width=60&height=60&seq=person2&orientation=squarish"
              }
              desc={
                "Our productivity increased by 40% since using this platform. The multi-tenant feature is perfect for managing multiple client projects."
              }
            />
            <HomeTestimonialsCard
              name={"Emily Rodriguez"}
              postion={"Operations Director, Growth Labs"}
              img={
                "https://readdy.ai/api/search-image?query=Professional%20business%20woman%20headshot%2C%20warm%20smile%2C%20contemporary%20office%20background%2C%20executive%20portrait%2C%20professional%20business%20attire&width=60&height=60&seq=person3&orientation=squarish"
              }
              desc={
                "Our productivity increased by 40% since using this platform. The multi-tenant feature is perfect for managing multiple client projects."
              }
            />
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 font-sans" >
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-gray-900 text-3xl  text-center md:text-4xl font-bold my-4">
           Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 text-xl  text-center">
           Choose the plan that fits your team size and needs
          </p>
          </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center  max-w-5xl mx-auto">
        <HomeBillingcard   price={0} type={"Free"} buttoncolor={"dark:bg-gray-500"}  features={["Up to 3 projects","5 team members","Basic reporting","Email support"]}  />
        <HomeBillingcard  popular={true} buttoncolor={"bg-blue-600 text-white hover:bg-blue-700"} price={0} type={"Standard"}  features={["Unlimited projects","25 team members","Advanced reporting","Priority support","Time tracking"]}  />
        <HomeBillingcard   buttoncolor={"bg-purple-600 text-white hover:bg-purple-700 "} price={29} type={"Premium"}  features={["Everything in Standard","Unlimited team members","Custom integrations","24/7 phone support","Advanced security" ]}  />

       </div>
        </div>
      </section>

      <section className="py-20 font-sans bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="text-center" >
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
            Start Managing Smarter Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of teams who have transformed their workflow with our platform
          </p>
          <div className="space-x-5">

          <Button className={"bg-white text-blue-600 dark:bg-gray-700 dark:hover:bg-gray-800 "} size={"lg"} >Sign Up Free</Button>
          <Button variant={"outline"} className={"bg-transparent border-2 text-white"} size={"lg"}  >Learn More</Button>
          </div>
        </div>

      </section>

      <Homefooter/>
    </div>
  );
}
