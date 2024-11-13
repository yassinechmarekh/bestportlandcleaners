import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Overview } from "@/components/Dashboard/overview";
import { RecentSales } from "@/components/Dashboard/recent-sales";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


import { FaCalendarDay } from "react-icons/fa";
import { FaCalendarWeek } from "react-icons/fa";
import { BsCalendar2MonthFill } from "react-icons/bs";
import { IoCalendar } from "react-icons/io5";

export default function Dashboard() {
  return (
    <section className={"bg-pink-100 min-h-screen min-w-full"}>
      <div className="container">
        <div className="flex-1 space-y-4 py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Home</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm text-steel-blue font-medium">
                      Current Year
                    </CardTitle>
                    <IoCalendar size={15} className={"text-steel-blue"} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl text-rose-bonbon font-bold">
                      2000
                    </div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last year
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm text-steel-blue font-medium">
                      Current Month
                    </CardTitle>
                    <BsCalendar2MonthFill
                      size={15}
                      className={"text-steel-blue"}
                    />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl text-rose-bonbon font-bold">
                      150
                    </div>
                    <p className="text-xs text-muted-foreground">
                      +180.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm text-steel-blue font-medium">
                      Current Week
                    </CardTitle>
                    <FaCalendarWeek size={15} className={"text-steel-blue"} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl text-rose-bonbon font-bold">
                      35
                    </div>
                    <p className="text-xs text-muted-foreground">
                      +19% from last week
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm text-steel-blue font-medium">
                      Current Day
                    </CardTitle>
                    <FaCalendarDay size={15} className={"text-steel-blue"} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl text-rose-bonbon font-bold">7</div>
                    <p className="text-xs text-muted-foreground">
                      +2 from yesterday
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 grid-cols-2 lg:grid-cols-7">
                <Card className="hidden sm:block col-span-4">
                  <CardHeader>
                    <CardTitle className={"text-rose-bonbon"}>
                      Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle className={"text-rose-bonbon"}>
                      Last Appointments
                    </CardTitle>
                    <CardDescription>
                      You received 150 appointments this month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
