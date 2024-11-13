import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentSales() {
  const appointments = [
    {
      name: "Olivia Martin",
      profile: "OM",
      email: "olivia.martin@email.com",
      servicetype: "Standard Cleaning",
    },
    {
      name: "Jackson Lee",
      profile: "JL",
      email: "jackson.lee@email.com",
      servicetype: "Deep Cleaning",
    },
    {
      name: "Isabella Nguyen",
      profile: "IN",
      email: "isabella.nguyen@email.com",
      servicetype: "Move-in/out Cleaning",
    },
    {
      name: "William Kim",
      profile: "WK",
      email: "will@email.com",
      servicetype: "Deep Cleaning",
    },
    {
      name: "Sofia Davis",
      profile: "SD",
      email: "sofia.davis@email.com",
      servicetype: "Airbnb Cleaning",
    },
  ];
  return (
    <div className="space-y-8">
      {appointments.map((item, index) => (
        <div key={index} className="flex flex-col sm:flex-row sm:items-center">
          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback className={"text-steel-blue"}>
                {item.profile}
              </AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm text-rose-bonbon font-medium leading-none">
                {item.name}
              </p>
              <p className="text-sm text-muted-foreground">{item.email}</p>
            </div>
          </div>
          <div className="ml-auto font-medium text-steel-blue">
            {item.servicetype}
          </div>
        </div>
      ))}
    </div>
  );
}
