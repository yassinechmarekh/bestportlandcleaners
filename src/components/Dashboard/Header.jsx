import React from "react";
import { MainNav } from "./main-nav";
import { UserNav } from "./user-nav";

export default function Header() {
  return (
    <div className="border-b bg-rose-bonbon">
      <div className="container">
        <div className="flex h-16 items-center">
          <MainNav className="mx-6" />
          <div className="ml-auto">
            <UserNav />
          </div>
        </div>
      </div>
    </div>
  );
}
